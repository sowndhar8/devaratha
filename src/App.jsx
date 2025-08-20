import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage";
import Contactus from "./pages/contactus";
import Aboutus from "./pages/aboutus";
import Services from "./pages/services";
import Footer from "./pages/footer";
import NavBar from "./pages/navbar";
import Faq from "./pages/components/faq";
// import Terms from "./pages/terms";
// import Privacy from "./pages/privacy";



function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
import { Outlet } from "react-router-dom";
import Footersection from "./pages/footer";
import Navbar from "./pages/navbar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/Contactus",
        element: <Contactus />,
      },
      {
        path: "/AboutUs",
        element: <Aboutus />,
      },
      {
        path: "/Services",
        element: <Services />,
      },
      {
        path: "/Faq",
        element: <Faq />,
      },
      // {
      //   path: "/terms",
      //   element: <Terms />,
      // },
      // {
      //   path: "/privacy",
      //   element: <Privacy />,
      // }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
