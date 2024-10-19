import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import NotFoundPage from "./error/NotFoundPage";
import Home from "../pages/Home";
import Navbar from "./Navbar";
import { ThemeProvider } from "../Context/ThemeContext";
import CreateEvent from "../pages/event/CreateEvent";
import { UserProvider } from "../Context/UserContext";
import ListEvents from "../pages/event/ListEvents";
import ProtectedRoute from "./ProtectedRoute"; // Import the ProtectedRoute
import Login from "./Login";
import { ValidationSchemaExample } from "../pages/event/test";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/",
      element: <Navigate to="/home" />,
    },
    {
      path: "/user",
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "event",
          element: (
            <ProtectedRoute>
              <CreateEvent />
              {/* <ValidationSchemaExample /> */}
            </ProtectedRoute>
          ),
        },
        {
          path: "bookmarks",
          element: (
            <ProtectedRoute>
              <CreateEvent />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/events",
      children: [
        {
          path: "list",
          element: <ListEvents />,
        },
        {
          path: "create",
          element: (
            <ProtectedRoute>
              <CreateEvent />
            </ProtectedRoute>
          ),
        },
        {
          path: "bookmarks",
          element: (
            <ProtectedRoute>
              <CreateEvent />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <UserProvider>
      <ThemeProvider>
        <Navbar />
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </UserProvider>
  );
};

export default Body;
