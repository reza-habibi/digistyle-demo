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
  { path: "/", exact: true, component: HomeScreen },
  { path: "/products/:id", exact: false, component: ProductScreen },
  { path: "/cart", exact: false, component: CartScreen },
  { path: "/shipping", exact: false, component: ShippingScreen },
  { path: "/checkout", exact: false, component: CheckoutScreen },
  { path: "/signin", exact: false, component: SigninScreen },
  { path: "/register", exact: false, component: RegisterScreen },
  { path: "/order/:id", exact: false, component: OrderScreen },
  { path: "/orderhistory", exact: false, component: OrderHistoryScreen },
  { path: "/profile", exact: false, component: ProfileScreen },
];
