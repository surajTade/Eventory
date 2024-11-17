import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import NotFoundPage from "./error/NotFoundPage";
import Home from "../pages/Home";
import Navbar from "./Navbar";
import { ThemeProvider } from "../Context/Theme";
import CreateEvent from "../pages/event/CreateEvent";
import { UserProvider } from "../Context/UserContext";
import ListEvents from "../pages/event/ListEvents";
import ProtectedRoute from "./ProtectedRoute"; // Import the ProtectedRoute
import Login from "./Login";
import Profile from "../pages/user/Profile";
import EditEvent from "../pages/event/EditEvent";

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
          path: "profile",
          element: (
            <ProtectedRoute>
              <Profile />
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
          path: "edit/:id",
          element: (
            <ProtectedRoute>
              <EditEvent />
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
