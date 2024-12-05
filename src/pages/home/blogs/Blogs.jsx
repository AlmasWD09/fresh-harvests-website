import { FaArrowRight } from "react-icons/fa6";
import SectionHeading from "../../../components/shared/sectionHeading/SectionHeading";

const Blogs = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
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

        <div className="container px-6 py-10 mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {/* blog 1 */}
            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src="/images/blogs/blog01.png"
                alt=""
              />

              <div className="mt-4">
                <span className="text-[#4A4A52] font-Questrial">May 23, 2024</span>

                <h1 className="mt-2 text-[18px] font-medium text-gray-800 font-Rubik ">
                  Exploring Seasonal Delights:A Guide to What's Fresh Right No
                </h1>
                <button className="flex items-center gap-2 text-[#FF6A1A] font-semibold mt-2">Read More <FaArrowRight /></button>
              </div>
            </div>
            {/* blog 2 */}
            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src="/images/blogs/blog02.png"
                alt=""
              />

              <div className="mt-4">
                <span className="text-[#4A4A52] font-Questrial">May 23, 2024</span>

                <h1 className="mt-2 text-[18px] font-medium text-gray-800 font-Rubik ">
                  Mastering Salad Creations:Tips and Tricks for Bullding Delicious and Nutritious Salads
                </h1>
                <button className="flex items-center gap-2 text-[#FF6A1A] font-semibold mt-2">Read More <FaArrowRight /></button>
              </div>
            </div>
            {/* blog 3 */}
            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src="/images/blogs/blog03.png"
                alt=""
              />

              <div className="mt-4">
                <span className="text-[#4A4A52] font-Questrial">May 23, 2024</span>

                <h1 className="mt-2 text-[18px] font-medium text-gray-800 font-Rubik ">
                  The Art of Meal Prepping:How to Save Time and Eat Healthy Throughou the Week
                </h1>
                <button className="flex items-center gap-2 text-[#FF6A1A] font-semibold mt-2">Read More <FaArrowRight /></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blogs