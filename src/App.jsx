import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ShoppingCard from "./pages/ShoppingCard";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/shopping-card",
          element: <ShoppingCard />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
