import { createBrowserRouter } from "react-router-dom";
import Root from "../outlets/Root";
import Home from "../pages/homepage/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
