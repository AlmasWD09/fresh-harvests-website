import { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { VscMenu } from "react-icons/vsc";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "../Button";
import { LuShoppingCart } from "react-icons/lu";
import Modal from "../modal/Modal";


const Navbar = () => {
  const [modal, setModal] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [navbar, setNavbar] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate();

  const handleNavigaet = () => {
    navigate('/')
  }

  // background color add in navbar scroll
  const changeBackground = () => {
    if (window.scrollY >= 32) {
      setNavbar(true)
    }
    else { setNavbar(false) }
  }
  window.addEventListener('scroll', changeBackground)

  const handleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  const user = null;
  const displayName = "ALMAS HOSSAIN";
  const photoURL = "/images/about/photo02.png"
  return (
    <>
      <header className={navbar ? 'bg-primary/60 text-white sticky top-0 left-0 z-[99999] shadow-md w-full   py-4 lg:py-6  overflow-visible' : 'sticky top-0 left-0 z-[99999] shadow-md w-full py-4 lg:py-6  overflow-visible '}>
        <div className="container mx-auto px-6 flex items-center">
          <nav className="relative container flex justify-between items-center">
            {/* navbar website name and logo */}
            <div className="w-[20%]">
              <div
                onClick={handleNavigaet}
                className="flex items-center cursor-pointer">
                <img className="" src="/logo.png" alt="navbar logo" />
              </div>
            </div>

            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className={`absolute right-[2px] top-1/2 block -translate-y-1/2  rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${isOpen ? 'navbarTogglerActive' : ''
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
                }  w-2/3 h-screen p-4 fixed  top-[70px] md:top-[65px] z-[999999] bg-primaryGray  shadow-md flex flex-col space-y-4 my-transition`}
            >
              <div className="flex flex-col lg:hidden space-y-4">
                <NavLink to='/' >
                  <Button text={" Home"} />
                </NavLink>
                <NavLink to='/shop' >
                  <Button text={"Shop"} />

                </NavLink>
                <NavLink to='/about-us' >
                  <Button text={"About Us"} />

                </NavLink>
                <NavLink to='/blogs' >
                  <Button text={"Blogs"} />
                </NavLink>

                {/* navbar Sign Up and login button */}
                <div className=" bg-secondery/50 rounded-md py-3">
                  <div className="flex flex-col items-center gap-4">
                    <div>
                      <Link to='/favorites' className="text-xl  font-semibold font-lato ">Favorites</Link>
                    </div>
                    <Link to='/login'>
                      <button className="text-lg  font-semibold font-lato">Login</button>
                    </Link>
                    {
                      user ? <div onClick={handleMenu} className="w-full flex justify-center focus:outline-none cursor-pointer relative group">
                        <div className="w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full">
                          <img
                            src={user?.photoURL}
                            className="object-cover w-full h-full "
                            alt={user?.displayName}
                          />
                        </div>
                        {
                          menuOpen && <div className="absolute  flex flex-col justify-center bg-gray-100 rounded-md px-4 py-3 left-1 top-12 z-50 space-y-3">

                            <p className="uppercase">{user?.displayName}</p>
                            <p>{user?.email}</p>
                            <button
                              // onClick={logOut}
                              className="w-full bg-gray-200 rounded-md py-1">Logout</button>

                          </div>
                        }
                      </div>
                        :
                        <Link to='/sign-up'>
                          <button className="w-full px-5 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-secondery focus:outline-none focus:bg-secondery">Sign Up</button>
                        </Link>
                    }

                  </div>
                </div>
              </div>
            </div>

            {/* tablet & dastop munu items*/}
            <div className=" w-[50%] lg:flex lg:justify-center lg:items-center items-center hidden">
              <div className="flex items-center">
                <NavLink to='/' >
                  <Button text={" Home"} />
                </NavLink>
                <NavLink to='/shop' >
                  <Button text={"Shop"} />

                </NavLink>
                <NavLink to='/about-us' >
                  <Button text={"About Us"} />

                </NavLink>
                <NavLink to='/blogs' >
                  <Button text={"Blogs"} />
                </NavLink>
              </div>
            </div>
            {/* navbar signup and login button */}
            <div className=" w-[30%] lg:flex lg:justify-end hidden">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <img className="w-6" src="/love.png" alt="love" />
                  <Link to='/favorites' className="text-xl font-semibold font-lato text-primary pr-4 ">Favorites</Link>
                  <div className="relative">
                  <span><LuShoppingCart className="text-primary text-2xl"/></span>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF6A1A] text-white rounded-full text-xs flex justify-center items-center">3</div>
                  </div>
                </div>

                <p className="font-Rubik">Cart</p>
                {
                  user ? <div className=" focus:outline-none cursor-pointer relative group">
                    <div className="w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full">
                      <img
                        src={user?.photoURL}
                        className="object-cover w-full h-full"
                        alt={user?.displayName}
                      />
                    </div>
                    <div className="absolute group-hover:flex flex-col transform scale-y-0 group-hover:scale-y-100 origin-top ease-in transition duration-150 bg-gray-50 rounded-md px-4 py-3 right-2 top-10 z-50 space-y-2">
                      <p className="uppercase">{user?.displayName}</p>
                      <p>{user?.email}</p>
                      <button
                        // onClick={logOut}
                        className="w-full bg-gray-200 rounded-md py-1">Logout</button>
                    </div>
                  </div>
                    :
                      <button
                      onClick={() => setModal(true)}
                      className="w-full px-2 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-secondery focus:outline-none focus:bg-secondery">Sign Up</button>
                }

              </div>
            </div>
          </nav>
        </div>
      </header>
        {modal && <Modal closeModal={() => setModal(false)} />}
    </>
  )
}

export default Navbar