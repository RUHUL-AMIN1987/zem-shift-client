
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/COverage";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendPercel/SendParcel";
import DashboardLayout from "../layout/DashboardLayout";
import MyParcel from "../pages/Dashboard/MyParcel/MyParcel";
import { createBrowserRouter } from "react-router-dom";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../pages/Dashboard/Payment/PaymentCancelled";
import OurServices from "../pages/Home/OurServices/OurServices";
import AboutUs from "../pages/Home/AboutUs/AboutUs";
import PlaceOrder from "../pages/Home/PlaceOrder/PlaceOrder";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/our-services',
        Component: OurServices
      },

      {
        path:'/rider',
        element:<PrivateRoutes><Rider></Rider></PrivateRoutes>
      },
      {
        path:'/send-parcel',
        element:<PrivateRoutes><SendParcel></SendParcel></PrivateRoutes>,
        loader: ()=> fetch('/serviceCenters.json').then(res=>res.json())
      },
      {
        path:'/coverage',
        element: <Coverage/>,
        loader: ()=> fetch('/serviceCenters.json').then(res=>res.json())
      },
      {
        path:'/about-us',
        element: <AboutUs/>
      },
      {
        path:'/place-order',
        element:<PlaceOrder/>
      }
    ]
  },
{
  path:'/',
  Component: AuthLayout,
  children: [
    {
      path: 'login',
      Component: Login,
    },
    {
      path: 'register',
      Component: Register,
    },
    {
      path: 'dashboard',
      element:<PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
      children:[
        {
          path: 'my-parcels',
          Component: MyParcel,
        },
       {
          path: 'payment/:parcelId',
          element: <Payment />,
       },
       {
        path:'payment-success',
        Component:PaymentSuccess,
       },
       {
        path: 'payment-cancel',
        Component: PaymentCancelled,
       }
      ]
    },
  ]
}
]);