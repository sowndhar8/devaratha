import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage";
import Contactus from "./pages/contactus";
import Aboutus from "./pages/aboutus";
import Services from "./pages/services";
import Footer from "./pages/footer";
import NavBar from "./pages/navbar";
import Faq from "./pages/components/faq";
import Progress from "./pages/components/progress";
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
import GoldLoans from "./pages/goldLoan";
import PersonalLoan from "./pages/personalLoan";
import Businessloan from "./pages/businessloan";
import MortageLoan from "./pages/mortageLoan";
import Enquire from "./pages/enquire";

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
      {
        path: "/Progress",
        element: <Progress />,
      },
      {
        path: "/GoldLoans",
        element: <GoldLoans />,
      },
      {
        path: "/PersonalLoan",
        element: <PersonalLoan />,
      },
      {
        path: "/BusinessLoan",
        element: <Businessloan />,
      },
      {
        path: "/MortageLoan",
        element: <MortageLoan />,
      },
      {
        path: "/Enquire",
        element: <Enquire />,
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
