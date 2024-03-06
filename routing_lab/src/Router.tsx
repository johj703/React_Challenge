import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Root from "./Root";
import Author from "./screens/authors/Author";
import BookDetail from "./screens/detail/BookDetail";
import ChapterList from "./screens/detail/ChapterList";
import CharacterList from "./screens/detail/CharacterList";

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
        children: [
          {
            path: "author/:name/:book",
            element: <BookDetail />,
          },
          {
            path: "author/:name/:chapters",
            element: <ChapterList />,
          },
          {
            path: "author/:name/:Characters",
            element: <CharacterList />,
          },
        ],
      },
    ],
  },
]);

export default router;
