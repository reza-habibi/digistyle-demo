import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

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
          brand:data.brand,
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
    getState: () => { cart: { cartItems: any } }
  ) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

export { addToCart, removeFromCart };
