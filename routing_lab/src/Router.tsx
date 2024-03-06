import { createBrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";
import Root from "./Root";
import Author from "./screens/authors/Author";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "Authors/:name",
        element: <Author />,
      },
    ],
  },
]);

export default router;
