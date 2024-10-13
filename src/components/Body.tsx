import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import NotFoundPage from "./error/NotFoundPage";
import Home from "../pages/Home";
import Navbar from "./Navbar";
import { ThemeProvider } from "../Context/ThemeContext";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Home />,
    },
    {
      path: "/register",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/",
      element: <Navigate to="/home" />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <ThemeProvider>
      <Navbar />
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  );
};

export default Body;
