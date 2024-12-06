import React, { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeading from "../../../components/shared/sectionHeading/SectionHeading";

const FreshProductDetails = () => {
  const product = useLoaderData();
  const { categoryId, description, images, price, productName, id } =
    product.data;

  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchCategoriesAndProducts = async () => {
      try {
        // Fetch categories
        const categoryResponse = await fetch(
          "https://api-fresh-harvest.code-commando.com/api/v1/category"
        );
        const categoryData = await categoryResponse.json();

        if (categoryData.success) {
          setCategories(categoryData.data);
          const category = categoryData.data.find(
            (cat) => cat.id === categoryId
          );
          if (category) setCategoryName(category.categoryName);
        }

        // Fetch related products
        const productResponse = await fetch(
          "https://api-fresh-harvest.code-commando.com/api/v1/products"
        );
        const productData = await productResponse.json();
        if (productData.success) {
          const filteredProducts = productData.data.filter(
            (p) => p.categoryId === categoryId && p.id !== id
          );
          setRelatedProducts(filteredProducts);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategoriesAndProducts();
  }, [categoryId, id]);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="container mt-20 mx-auto px-6">
      {/* Main Product Details Section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 mx-auto p-4 mt-5">
        {/* Product Image Slider */}
        <div className="flex justify-center md:w-1/2">
          <Swiper
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper w-full h-[400px] md:h-[500px] border rounded-lg shadow-md"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Product image ${index + 1}`}
                  className="w-full h-full object-contain rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Product Details */}
        <div className="mt-5 md:w-1/2">
          <div>
          <button className="text-primary bg-primary/10 font-medium py-1 px-2 rounded">{categoryName}</button>
            <h3 className="text-3xl lg:text-5xl font-Rubik font-medium pt-2">{productName}</h3>
          </div>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-yellow-500"
              >
                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849 1.418 8.261L12 18.902l-7.418 4.631L6 15.272 0 9.423l8.332-1.268z" />
              </svg>
            ))}
            <span className="font-bold">5.0 (1 REVIEW)</span>
          </div>
          <p className="text-2xl font-bold text-[#FF6A1A] mt-3">${price}/kg</p>
          <p className="text-lg text-gray-700 mt-3">{description}</p>
          <div className="flex items-center justify-around mt-4 border border-gray-300 rounded-md w-full md:w-fit">
            <span className="block p-2">Quantity</span>
            <button
              onClick={handleDecrement}
              className="w-12 h-12 text-xl text-gray-700 flex items-center justify-center border-r border-gray-300"
            >
              -
            </button>
            <div className="w-16 h-12 text-lg flex items-center justify-center font-semibold">
              {quantity}
            </div>
            <button
              onClick={handleIncrement}
              className="w-12 h-12 text-xl text-gray-700 flex items-center justify-center border-l border-gray-300"
            >
              +
            </button>
          </div>
          <div className="flex mt-5 gap-5 flex-col sm:flex-row">
            <button className="flex text-[#4A4A52] rounded-md gap-2 justify-center items-center bg-gray-300 font-bold px-8 py-4">
              <FaHeart /> Save as Favorite
            </button>
            <button className="flex gap-2 justify-center rounded-md items-center text-white bg-[#FF6A1A] font-bold px-8 py-4">
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-3 items-center justify-start mt-5">
        <button className="w-[140px] h-[45px] bg-[#749B3F] text-white rounded-md">
          Description
        </button>
        <button className="w-[140px] h-[45px] bg-white text-slate-500 border border-slate-500 rounded-md">
          Reviews(1)
        </button>
      </div>

      <div className="mt-5 max-w-[894px] bg-[#F4F6F6] rounded-lg py-10 px-10 mb-20">
        {description}
      </div>

      <div className="text-center mt-20 mb-20">
        <SectionHeading 
        subheading={"Our Products"}
        heading={"Related Products"}
        paragraph={"We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."} 
        />
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 justify-center items-center gap-6">
          {relatedProducts.slice(0, 8).map((product) => (
              <div className=" border p-2 rounded-lg shadow-md flex flex-col justify-center items-center">
                <img
                  src={product.images[0] || "/404.png"}
                  alt={product.productName}
                  className="w-[258px] h-[208px] object-contain rounded-lg"
                />
                <h3 className="text-lg font-bold mt-4 text-center">
                  {product.productName}
                </h3>
                <p className="text-center font-bold">${product.price}</p>
                <button className="w-full border-[#D9D9D9] hover:border-white text-[#212337] border-2 p-2 mt-4 rounded-lg bg-white hover:text-white hover:bg-[#FF6A1A] transition duration-300">
                  Add to Cart
                </button>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreshProductDetails;