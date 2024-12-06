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