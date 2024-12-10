import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Shop from "../Pages/Shop/Shop";
import BlogsMain from "../Pages/blogs/BlogsMain";
import BlogProductDetailsMain from "../Pages/blogs/blogsDetails/BlogProductDetails/BlogProductDetailsMain";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import PaymentTable from "../Pages/DashboardPages/UserPages/PaymentInstalment/PaymentsCard/PaymentTable";
import DiscountSection from "../Pages/DashboardPages/UserPages/Discount/DiscountSection/DiscountSection";

import DashboardLayout from "../Layouts/DashboardLayout";
import PersonalData from "../Pages/DashboardPages/UserPages/PersonalData/PersonalData";
import PaymentInstalment from "../Pages/DashboardPages/UserPages/PaymentInstalment/PaymentInstalment";
import SecurityAccess from "../Pages/DashboardPages/UserPages/SecurityAccess/SecurityAccess";
import Notification from "../Pages/DashboardPages/UserPages/Notification/Notification";
import ContactUs from "../Pages/DashboardPages/UserPages/ContactUs/ContactUs";
import WishList from "../Pages/DashboardPages/UserPages/WishList/WishList";
import Orders from "../Pages/DashboardPages/UserPages/Orders/Orders";
import Discount from "../Pages/DashboardPages/UserPages/Discount/Discount";
import AdminHome from "../Pages/DashboardPages/AdminPages/AdminHome/AdminHome";
import AddProducts from "../Pages/DashboardPages/AdminPages/AddProducts/AddProducts";
import ManageProducts from "../Pages/DashboardPages/AdminPages/ManageProducts/ManageProducts";

import AllUsers from "../Pages/DashboardPages/AdminPages/AllUsers/AllUsers";
import Blogs from "../Pages/DashboardPages/AdminPages/Blogs/Blogs";
import OrderStatus from "../Pages/DashboardPages/UserPages/Orders/OrderStatus/OrderStatus";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Route/PrivateRoute";
import Carts from "../Pages/DashboardPages/UserPages/Carts/Carts";
import Checkout from "../Pages/DashboardPages/UserPages/Checkout/Checkout";
import AdminRoute from "./AdminRoute";
import Payment from "../Pages/DashboardPages/Payment/Payment";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Success from "../Pages/DashboardPages/Payment/Success/Success";
import Cancel from "../Pages/DashboardPages/Payment/Cancel/Cancel";
import Fail from "../Pages/DashboardPages/Payment/Fail/Fail";
import Returns from "../Pages/FooterComponents/Returns";
import CookieSettings from "../Pages/FooterComponents/CookieSettings";
import PrivacyPolicy from "../Pages/FooterComponents/PrivacyPolicy";
import TermsAndConditions from "../Pages/FooterComponents/TermsConditions";
import ManageOrders from "../Pages/DashboardPages/AdminPages/ManageBookings/ManageOrders";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/blog",
        element: <BlogsMain />,
      },
      {
        path: "/blog/list/:id",
        element: <BlogProductDetailsMain />,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
      },
  
   
    
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/carts",
        element: <Carts />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/payment-success",
        element: <Success />,
      },
      {
        path: "/payment-cancel",
        element: <Cancel />,
      },
      {
        path: "/payment-fail",
        element: <Fail />,
      },
      {
        path: "/returns",
        element: <Returns />,
      },
      {
        path: "/cookieSettings",
        element: <CookieSettings />,
      },
      {
        path: "/privacyPolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/termsConditions",
        element: <TermsAndConditions />,

      },
      
     
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      /////// Admin Route /////////
      {
        path: "admin-home",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "add-products",
        element: (
          <AdminRoute>
            {" "}
            <AddProducts />
          </AdminRoute>
        ),
      },
      {
        path: "manage-products",
        element: (
          <AdminRoute>
            <ManageProducts />
          </AdminRoute>
        ),
      },
      {
        path: "manage-orders",
        element: (
          <AdminRoute>
            <ManageOrders />
          </AdminRoute>
        ),
      },
      {
        path: "all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "blogs",
        element: (
          <AdminRoute>
            <Blogs />{" "}
          </AdminRoute>
        ),
      },
      /////// user Route /////////
      {
        path: "personal-data",
        element: <PersonalData />,
      },
      {
        path: "payment-instalment",
        element: <PaymentInstalment />,
      },
      {
        path: "payment-istalment/table",
        element: <PaymentTable />,
      },
      {
        path: "discount",
        element: <DiscountSection />,
      },

      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "order-status/:id",
        element: <OrderStatus />,
      },

      {
        path: "wish-list",
        element: <WishList />,
      },
      {
        path: "discount",
        element: <Discount />,
      },
      {
        path: "security-access",
        element: <SecurityAccess />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      // {
      //   path: "/dashboard/payment",
      //   element: <Payment />,
      // },
      // {
      //   path: "/dashboard/payment-success",
      //   element: <Success />,
      // },
      // {
      //   path: "/dashboard/payment-cancel",
      //   element: <Cancel />,
      // },
      // {
      //   path: "/dashboard/payment-fail",
      //   element: <Fail />,
      // },
    ],
  },
]);
export default router;
