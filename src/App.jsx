import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Homepage from "./pages/homepage";
import Contactus from "./pages/contactus";
import Aboutus from "./pages/aboutus";
import Services from "./pages/services";
import Footer from "./pages/footer";
import NavBar from "./pages/navbar";
// import Terms from "./pages/terms";
// import Privacy from "./pages/privacy";
import { Outlet } from "react-router-dom";
import GoldLoans from "./pages/goldLoan";
import PersonalLoan from "./pages/personalLoan";
import Businessloan from "./pages/businessloan";
import MortageLoan from "./pages/mortageLoan";
import Enquire from "./pages/enquire";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

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
  return (
    <>
      <RouterProvider router={router} />;
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
