import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Homelayout from "../Pages/Home/Homelayout";
import ErrorPage from "../Error/ErrorPage";
import AllToys from "../Pages/AllToys";
import Wishlist from "../Pages/MyProfile";
import SignInPage from "../Pages/Auth/SignInPage";
import Register from "../Pages/Auth/Register";
import MyProfile from "../Pages/MyProfile";
import PrivateRoute from "../context/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Homelayout,
        loader: () => fetch("../toydata.json"),
      },
      {
        path: "/alltoys",
        Component: AllToys,
        loader: () => fetch("../toydata.json"),
      },
      {
        path: "/myprofile",
        element: <PrivateRoute><MyProfile/></PrivateRoute>,
      },
      {
        path: "/login",
        Component: SignInPage,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
     path:'toysdeitals/:id',
     
  },

  {
    HydrateFallback: <p>Loading..</p>,
  },
]);

export default router;