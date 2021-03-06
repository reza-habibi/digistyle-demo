import axios from "axios";
import { TCartItem } from "../../type.ds";
import {
  CART_ADD_ITEM,
  CART_DECREASE_QTY,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstants";
import { CART_INCREASE_QTY } from "./../constants/cartConstants";

const addToCart =
  (productId: string, qty: number) => async (dispatch: any, getState: any) => {
    try {
      const { data } = await axios.get(`/api/products/${productId}`);
      dispatch({
        type: CART_ADD_ITEM,
        payload: {
          product: data._id,
          name: data.name,
          image: data.image,
          price: data.price,
          discount: data.discount,
          countInStock: data.countInStock,
          brand: data.brand,
          qty,
        },
      });
      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
      );
    } catch (error) {}
  };

const removeFromCart =
  (productId: string) =>
  (
    dispatch: (arg0: { type: any; payload: string }) => void,
    getState: () => { cart: { cartItems: TCartItem } }
  ) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

const increaseQty =
  (productId: string) =>
  (
    dispatch: (arg0: { type: any; payload: string }) => void,
    getState: () => { cart: { cartItems: TCartItem } }
  ) => {
    dispatch({ type: CART_INCREASE_QTY, payload: productId });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
const decreaseQty =
  (productId: string) =>
  (
    dispatch: (arg0: { type: any; payload: string }) => void,
    getState: () => { cart: { cartItems: TCartItem } }
  ) => {
    dispatch({ type: CART_DECREASE_QTY, payload: productId });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

const saveShippingAddress = (data: any) => (dispatch: any) => {
  dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

const savePaymentMethod = (data: any) => (dispatch: any) => {
  dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
};

export {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  increaseQty,
  decreaseQty,
};
