import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Homelayout from "../Pages/Home/Homelayout";
import ErrorPage from "../Error/ErrorPage";
import AllToys from "../Pages/AllToys";
import SignInPage from "../Pages/Auth/SignInPage";
import Register from "../Pages/Auth/Register";
import MyProfile from "../Pages/MyProfile";
import PrivateRoute from "../context/PrivateRoute";
import ToysDeitls from "../Pages/ToysDeitls";

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
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: SignInPage,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/toysdeitals/:id",
        element: (
          <PrivateRoute>
            <ToysDeitls />
          </PrivateRoute>
        ),
        loader: () => fetch('../toydata.json')
      },
    ],
  },

  {
    HydrateFallback: <p>Loading..</p>,
  },
]);

export default router;