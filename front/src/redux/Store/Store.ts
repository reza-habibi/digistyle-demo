import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "../reducers/cartReducer";
import { drawerReducer } from "../reducers/drawerReducer";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderMineListReducer,
  orderPayReducer,
} from "../reducers/orderReducer";
import {
  productCreateReducer,
  productDetailsReducer,
  productListReducer,
  productUpdateReducer,
} from "../reducers/productReducer";
import {
  userDetailsReducer,
  userRegisterReducer,
  userSigninReducer,
  userUpdateProfileReducer,
} from "../reducers/userReducer";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {},
    paymentMethod: "PayPal",
  },
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  drawer: drawerReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  orderReducer: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderMineList: orderMineListReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
});
//@ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof reducer>;

export default store;
