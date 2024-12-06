import { FaHome } from "react-icons/fa";
import { MdLibraryAdd } from "react-icons/md";
import { VscGitPullRequestGoToChanges, VscGitPullRequestNewChanges } from "react-icons/vsc";
import { NavLink } from "react-router-dom";



const AllSidebar = () => {


    return (
        <>
            <div>
                    <div className="flex flex-col gap-2">
                        <NavLink className={({ isActive }) =>
                            `flex items-center  px-4 py-2 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300 text-gray-700 border-l-4 border-primary' : 'text-gray-600'
                            }`
                        } to='/dashboard/admin-home'><FaHome className="mr-2" />Admin Home</NavLink>
                        <NavLink className={({ isActive }) =>
                            `flex items-center px-4 py-2 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300 text-gray-700 border-l-4 border-primary' : 'text-gray-600'
                            }`
                        } to='/dashboard/add-product'><MdLibraryAdd className="mr-2" />Add Product</NavLink>
                        <NavLink className={({ isActive }) =>
                            `flex items-center px-4 py-2 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300 text-gray-700 border-l-4 border-primary' : 'text-gray-600'
                            }`
                        } to='/dashboard/all-product'><VscGitPullRequestGoToChanges className="mr-2" />All Product</NavLink>
                      
                    </div>
            </div>
        </>
    );
};

export default AllSidebar;