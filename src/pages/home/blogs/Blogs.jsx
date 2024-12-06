import { FaArrowRight } from "react-icons/fa6";
import SectionHeading from "../../../components/shared/sectionHeading/SectionHeading";

const Blogs = () => {
  const blogs = [
    {
      image: "/images/blogs/blog01.png",
      date: "May 23, 2024",
      description: "Exploring Seasonal Delights:A Guide to What's Fresh Right No"
    },
    {
      image: "/images/blogs/blog02.png",
      date: "May 23, 2024",
      description: "Mastering Salad Creations:Tips and Tricks for Bullding Delicious and Nutritious Salads"
    },
    {
      image: "/images/blogs/blog03.png",
      date: "May 23, 2024",
      description: " The Art of Meal Prepping:How to Save Time and Eat Healthy Throughou the Week"
    },
  ]
  return (
    <>
      <section className="container mx-auto px-6 bg-white py-10">
        <div className="flex justify-center items-center">
          <div>
            {/* section heading component */}
            <SectionHeading
              subheading={'Our Blog'}
              heading={'Fresh Harvest Blog'}
              paragraph={'Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration.'}
            />
          </div>
          <div>
            <img className="object-contain" src="/images/leaf/leafRight.png" alt="leaf" />
          </div>
        </div>

        <div className="">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {
              blogs.map((blog, idx) => {
                return (
                  <div>
                    <img
                      className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                      src={blog.image}
                      alt="blog image"
                    />
                    <div className="mt-4">
                      <span className="text-[#4A4A52] font-Questrial">{blog.date}</span>
                      <h1 className="mt-2 text-[18px] font-medium text-gray-800 font-Rubik ">
                        {blog.description}
                      </h1>
                      <button className="flex items-center gap-2 text-[#FF6A1A] font-semibold mt-2">Read More <FaArrowRight /></button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Blogs