import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PriveteRouter from "./PriveteRouter";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcel from "../pages/Dashboard/MyParcel/MyParcel";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../pages/Dashboard/Payment/PaymentCancelled";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import ApproveRiders from "../pages/Dashboard/ApproveRiders/ApproveRiders";
import UsersManagement from "../pages/Dashboard/UsersManagement/UsersManagement";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/rider",
        element: (
          <PriveteRouter>
            <Rider />
          </PriveteRouter>
        ),
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "/sendParcel",
        element: (
          <PriveteRouter>
            <SendParcel />
          </PriveteRouter>
        ),
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "dashboard",
    element:
      <PriveteRouter>
        <DashboardLayout />
      </PriveteRouter>
    ,
    children: [
      {
        path: 'my-parcels',
        Component: MyParcel
      },
      {
        path: 'payment-history',
        Component: PaymentHistory
      },
      {
        path: 'approve-riders',
        Component: ApproveRiders
      },
      {
        path: 'users-management',
        Component: UsersManagement
      },
      {
        path:'payment/:parcelId',
        Component:Payment
      },
      {
        path:'payment-success',
        Component: PaymentSuccess
      },
      {
        path:'payment-cancelled',
        Component: PaymentCancelled
      },
    ]
  },
]);
