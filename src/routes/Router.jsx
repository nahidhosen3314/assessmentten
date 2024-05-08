import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Root from "../layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddTouristSpot from "../pages/AddTouristSpot";
import TouristSpots from "../pages/TouristSpots";
import TouristSpotDetail from "../pages/TouristSpotDetail";
import MyList from "../pages/MyList";
import UpdateMylist from "../pages/UpdateMylist";
import Country from "../pages/Country";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/all-tourist-spot",
                element: <TouristSpots></TouristSpots>,
                loader: () => fetch("https://happy-travel-server-seven.vercel.app/tourists"),
            },
            {
                path: "/tourists/:id",
                element: <PrivateRouter><TouristSpotDetail></TouristSpotDetail></PrivateRouter>,
                loader: ({ params }) =>
                    fetch(`https://happy-travel-server-seven.vercel.app/tourists/${params.id}`),
            },
            {
                path: "/add-tourist-spot",
                element: <PrivateRouter><AddTouristSpot></AddTouristSpot></PrivateRouter>,
            },
            {
                path: "/mylist/:id",
                element: <PrivateRouter><MyList></MyList></PrivateRouter>,
                loader: ({ params }) =>
                    fetch(`https://happy-travel-server-seven.vercel.app/mylist/${params.id}`),
            },
            {
                path: "/update-mylist/:id",
                element: <PrivateRouter><UpdateMylist></UpdateMylist></PrivateRouter>,
                loader: ({ params }) =>
                    fetch(`https://happy-travel-server-seven.vercel.app/update-mylist/${params.id}`)
            },
            {
                path: "/countries/:name",
                element: <Country></Country>,
                loader: ({ params }) =>
                    fetch(`https://happy-travel-server-seven.vercel.app/countries/${params.name}`)
            },
        ],
    },
]);

export default router;
