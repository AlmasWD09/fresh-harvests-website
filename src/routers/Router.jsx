import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/shared/errorPage/ErrorPage";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";

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
  ]);

  export default router;