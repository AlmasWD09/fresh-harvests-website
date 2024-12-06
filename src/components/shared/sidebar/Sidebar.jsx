
import { TfiClose } from "react-icons/tfi";
import { VscGitPullRequestGoToChanges, VscMenu } from "react-icons/vsc";
import { FcSettings } from 'react-icons/fc'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import AllSidebar from "../allSidebar/AllSidebar";



const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);



    return (
        <div>
            {/* mobile device for... */}
            <div className="fixed top-0 left-0 z-[99999] shadow-md w-full h-[80px] pl-3 py-4 md:py-2   lg:hidden">
                <div
                    className="flex items-center cursor-pointer">
                        <img className="w-[70%]" src="/logo.png" alt="navbar logo" />
                </div>

                <div className="flex">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className={`absolute mr-4  right-[2px] top-1/2 block -translate-y-1/2  rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${isOpen ? 'navbarTogglerActive' : ''
                            }`}

                    >
                        {!isOpen ? (
                            <TfiClose className="text-2xl " />
                        ) : (
                            <VscMenu className="text-2xl " />
                        )}
                    </button>
                </div>

                {/* mobile menu */}
                <div
                    className={`${isOpen ? "-right-full" : "right-0"
                        }  w-2/3 h-screen py-4 fixed  top-[78px] z-[999999] bg-gray-100  shadow-md flex flex-col space-y-4 my-transition`}>
                    <AllSidebar />
                    <hr />
                    <div>
                        <NavLink className={({ isActive }) =>
                            `flex items-center pl-3 py-2 my-2 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        } to='/'><FaHome className="mr-2" />Home</NavLink>
                        <NavLink className={({ isActive }) =>
                            `flex items-center pl-3 py-2 my-2 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        } to='/login'><VscGitPullRequestGoToChanges className="mr-2" />Logout</NavLink>
                    </div>
                </div>
            </div>

            {/* tablet & dastop device */}
            <div className="bg-gray-50 w-60 h-screen lg:block border-px-1 py-1 fixed hidden">
                <AllSidebar />
                <hr className="my-6" />
                
                <div className="flex flex-col gap-2">
                    {/* Profile Menu */}
                    <NavLink
                        to='/dashboard/profile'
                        className={({ isActive }) =>
                            `flex items-center  px-4 py-2 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300 text-gray-700 border-l-4 border-primary' : 'text-gray-600'
                            }`}>
                        <FcSettings className='mr-2' />

                        <span className='mx-1'>Profile</span>
                    </NavLink>

                    <NavLink className={({ isActive }) =>
                        `flex items-center  px-4 py-2 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300 text-gray-700 border-l-4 border-primary' : 'text-gray-600'
                        }`
                    } to='/'><FaHome className="mr-2" />Home</NavLink>
                    <NavLink
                        // onClick={logOut}
                        className={({ isActive }) =>
                            `flex items-center  px-4 py-2 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300 text-gray-700 border-l-4 border-primary' : 'text-gray-600'
                            }`
                        } to='/login'><VscGitPullRequestGoToChanges className="mr-2" />Logout</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;