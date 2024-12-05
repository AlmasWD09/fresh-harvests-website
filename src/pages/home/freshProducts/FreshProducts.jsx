import { useEffect, useState } from "react";
import SectionHeading from "../../../components/shared/sectionHeading/SectionHeading";


const FreshProducts = () => {
  const [vegitables, setvegitables] = useState();


  // Data load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api-fresh-harvest.code-commando.com/api/v1/products");
        const data = await response.json();
        setvegitables(data);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };
    fetchData();
  }, []);

  return (
 <>
<div className="flex justify-center">
   <img className="object-contain" src="/images/leaf/leafLeft.png" alt="left image" />
    <SectionHeading 
    subheading={'Our Products'}
    heading={'Our Fresh Products'}
    paragraph={"We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."}
    />
    <img className="object-contain mt-20" src="/images/leaf/leafLeft.png" alt="left image" />
   </div>

 <section className="container mx-auto px-6 ">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {vegitables.map((vegitable, idx) => (
    <div
      key={idx}
      className="bg-white rounded-lg shadow-md p-2 hover:shadow-2xl transition duration-300"
    >
      <div className="relative h-[220px] text-center">
      
      </div>
      <div className="mt-4">
      </div>
      <div className="mt-4">
        <button className="w-full py-2 border border-primary hover:text-white font-semibold rounded hover:bg-primary transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  ))}
</div>
<div className="text-center mt-8">
  <button className="px-6 py-2 bg-primary/90 text-white rounded hover:bg-primary transition duration-300">
    See More
  </button>
</div>
</section>
 </>
  )
}

export default FreshProducts