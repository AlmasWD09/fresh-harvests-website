import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/shared/errorPage/ErrorPage";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import DashboardLayout from "../layout/DashboardLayout";
import CommonLayout from "../pages/dashboard/commonLayout/CommonLayout";
import AllProduct from "../pages/dashboard/admin/allProduct/AllProduct";
import AdminProfile from "../pages/dashboard/common/profile/AdminProfile";
import AddProduct from "../pages/dashboard/admin/addProduct/AddProduct";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import FreshProductDetails from "../pages/home/freshProducts/FreshProductDetails";
import About from "../pages/home/about/About";
import Blogs from "../pages/home/blogs/Blogs";
import Shop from "../pages/shop/Shop";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop/>,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/product-details/:id",
        element: <FreshProductDetails />,
        loader: ({ params }) =>
          fetch(
            `https://test-2-tan-chi.vercel.app/api/v1/products/${params.id}`
          ),
      },
    ],
  },

  {
    path:'/register',
    element:<Register />
  },
  {
    path:'/login',
    element:<Login />
  },
  // dashboard routes
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard',
        element: <CommonLayout />
      },
      {
        path: 'all-product',
        element: <AllProduct />
      },
      {
        path: 'add-product',
        element: <AddProduct />
      },
      {
        path:'profile',
        element:<AdminProfile />,
      },
    ]
  }
]);

export default router;