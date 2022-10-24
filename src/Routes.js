import { createBrowserRouter } from "react-router-dom";
import Category from "./Category";
import Home from "./Home";
import Login from "./Login";
import Main from "./Main";
import News from "./News";
import PrivateRoute from "./PrivateRoute";
import Profile from "./Profile";
import Registration from "./Registration";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/news/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "/category/:id",
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Registration></Registration> },
      { path: "/profile", element:<PrivateRoute><Profile></Profile></PrivateRoute>},
    ],
  },
]);
