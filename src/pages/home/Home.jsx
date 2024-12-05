import About from "./about/About"
import Banner from "./banner/Banner"
import Blogs from "./blogs/Blogs"
import FreshProducts from "./freshProducts/FreshProducts"
import SpecialOffer from "./specialOffer/SpecialOffer"
import Testimonial from "./testimonial/Testimonial"


const Home = () => {
  return (
    <div>
       <Banner />
       {/* <FreshProducts /> */}
       <About />
       <SpecialOffer />
       <Testimonial />
       <Blogs />
    </div>
  )
}

export default Home