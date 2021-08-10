import { lazy } from "react";
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
  { path: "/", exact: true, component: HomeScreen, isLogin: false },
  {
    path: "/products/:id",
    exact: false,
    component: ProductScreen,
    isLogin: false,
  },
  { path: "/cart", exact: false, component: CartScreen, isLogin: false },
  {
    path: "/shipping",
    exact: false,
    component: ShippingScreen,
    isLogin: false,
  },
  {
    path: "/checkout",
    exact: false,
    component: CheckoutScreen,
    isLogin: false,
  },
  { path: "/signin", exact: false, component: SigninScreen, isLogin: false },
  {
    path: "/register",
    exact: false,
    component: RegisterScreen,
    isLogin: false,
  },
  { path: "/order/:id", exact: false, component: OrderScreen, isLogin: false },
  {
    path: "/orderhistory",
    exact: false,
    component: OrderHistoryScreen,
    isLogin: true,
  },
  { path: "/profile", exact: false, component: ProfileScreen, isLogin: true },
];
