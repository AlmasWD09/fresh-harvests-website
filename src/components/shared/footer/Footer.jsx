import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdCall, MdLocationOn, MdMessage } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        <div className="">
          <div className="flex items-center">
            <img src="/logo.png" alt="logo" />
            <h2 className="text-xl font-bold">Fresh Harvests</h2>
          </div>
          <div className="lg:mt-20">
            <p className="font-Rubik font-medium">Download App:</p>
            <div className="flex items-center">
              <img className=" h-10 object-cover" src="/images/footer/appStore.png" alt="app store" />
              <img className=" h-[70px] object-cover" src="/images/footer/googlePlay.png" alt="app store" />
            </div>
          </div>
        </div>

        {/* Quick Links 1 */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links 1</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Shop</a>
            </li>
            <li>
              <a href="#" className="hover:underline">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Blog</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Detail Blog</a>
            </li>
          </ul>
        </div>

        {/* Quick Links 2 */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links 2</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              <a href="#" className="hover:underline">Favorites</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Cart</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Sign In</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Register</a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            <span><MdCall className="text-primary text-lg"/></span>
            <strong>Phone:</strong> +123 5678 90
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-1">
          <span><MdMessage className="text-primary text-lg"/></span>
            <strong>Email:</strong> freshharvests@gmail.com
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-1">
          <span><MdLocationOn className="text-primary text-lg"/></span>
            <strong>Address:</strong> TunjukStreet,Pontianak,Indonesia
          </p>
          <div className="mt-4">
            <p className="text-sm font-Rubik font-semibold text-gray-800">Accepted Payment Methods:</p>
            <div className="flex gap-2 mt-2">
              <img className="w-20 bg-white px-4 rounded" src="/images/footer/visa.png" alt="visa" />
              <img className="w-8 object-contain bg-white rounded" src="/images/footer/payPal.png" alt="payPal" />
              <img className=" object-cover bg-white px-4 rounded" src="/images/footer/applePay.png" alt="apple pay" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <hr />
        {/* Copyright */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between mt-4 py-4 ">
          <p className="text-wrap">© Copyright 2024, All Rights Reserved by Banana Studio</p>
          <div className="flex gap-2">
            <span><AiFillTwitterCircle /></span>
            <span><FaFacebook /></span>
            <span><FaSquareInstagram /></span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer