import { lazy } from "react";
import AdminDashboardScreen from "../screens/AdminDashboardScreen";
import ProductEditScreen from "../screens/ProductEditScreen";
const ProductScreen = lazy(() => import("../screens/ProductScreen"));

const CartScreen = lazy(() => import("../screens/CartScreen"));
const ShippingScreen = lazy(() => import("../screens/ShippingScreen"));
const CheckoutScreen = lazy(() => import("../screens/CheckoutScreen"));
const SigninScreen = lazy(() => import("../screens/SigninScreen"));
const RegisterScreen = lazy(() => import("../screens/RegisterScreen"));
const OrderScreen = lazy(() => import("../screens/OrderScreen"));
const OrderHistoryScreen = lazy(() => import("../screens/OrderHistoryScreen"));
const ProfileScreen = lazy(() => import("../screens/ProfileScreen"));
const HomeScreen = lazy(() => import("../screens/HomeScreen"));
export const routes = [
  {
    path: "/",
    exact: true,
    component: HomeScreen,
  },
  {
    path: "/products/:id",
    exact: true,
    component: ProductScreen,
  },
  {
    path: "/products/:id/edit",
    exact: true,
    component: ProductEditScreen,
    isLogin: true,
    isAdmin: true,
  },
  {
    path: "/cart",
    exact: false,
    component: CartScreen,
  },

  {
    path: "/signin",
    exact: false,
    component: SigninScreen,
  },
  {
    path: "/register",
    exact: false,
    component: RegisterScreen,
  },
];

export const PVRoute = [
  {
    path: "/profile",
    exact: false,
    component: ProfileScreen,
    isLogin: true,
    isAdmin: false,
  },
  {
    path: "/dashboard",
    exact: false,
    component: AdminDashboardScreen,
    isLogin: true,
    isAdmin: true,
  },
  {
    path: "/orderhistory",
    exact: false,
    component: OrderHistoryScreen,
    isLogin: true,
    isAdmin: false,
  },
  {
    path: "/shipping",
    exact: false,
    component: ShippingScreen,
    isLogin: true,
    isAdmin: false,
  },
  {
    path: "/checkout",
    exact: false,
    component: CheckoutScreen,
    isLogin: true,
    isAdmin: false,
  },
  {
    path: "/order/:id",
    exact: false,
    component: OrderScreen,
    isLogin: true,
    isAdmin: false,
  },
];
