import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Cities from "./pages/Cities"
import CityDetail from "./pages/CityDetail"
import MainLayout from "./layouts/MainLayout"
import NotFound from "./pages/NotFound"
import Profile from "./pages/Profile"
import FormSignIn from "./pages/FormSignIn"
import FormSignUp from "./pages/FormSignUp"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        { path: "/", element: <Home /> },
        { path: "/index", element: <Home />},
        { path: "/home", element: <Home />},
        { path: "/cities", element: <Cities /> },
        { path: "/city/:city_id", element: <CityDetail />},
        { path: "/auth/register", element: <FormSignUp /> },
        { path: "/auth/signin", element: <FormSignIn /> },
        { path: "/profile", element: <Profile /> },
        { path: "/*", element: <NotFound />}
    ],
  },
]);

export default router;
