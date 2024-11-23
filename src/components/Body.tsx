import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import NotFoundPage from "./error/NotFoundPage";
import Home from "../pages/Home";
import { ThemeProvider } from "../Context/Theme";
import CreateEvent from "../pages/event/CreateEvent";
import { UserProvider } from "../Context/UserContext";
import ListEvents from "../pages/event/ListEvents";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import Profile from "../pages/user/Profile";
import EditEvent from "../pages/event/EditEvent";
import AppLayout from "./AppLayout";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/home" />,
    },
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "user",
          children: [
            { path: "login", element: <Login /> },
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
                  <Home />
                </ProtectedRoute>
              ),
            },
          ],
        },
        {
          path: "events",
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
          ],
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
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </UserProvider>
  );
};

export default Body;
