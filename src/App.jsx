import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Auth } from "./pages/Auth";
import { Home } from "./pages/Home";
import { Video } from "./pages/Video.jsx";
import { UserHome } from "./pages/UserHome.jsx";
import { NavBar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ErrorPage } from "./pages/NotFound.jsx";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "videos/:video_id",
        element: <Video />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <UserHome />,
    errorElement: <ErrorPage />,
  },
]);

export const App = () => <RouterProvider router={router} />;
