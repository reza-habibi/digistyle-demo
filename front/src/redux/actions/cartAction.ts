import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
import Cookie from "js-cookie";

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
          discount:data.discount,
          countInStock: data.countInStock,
          qty,
        },
      });
      const {
        cart: { cartItems },
      } = getState();
      Cookie.set("cartItems", JSON.stringify(cartItems));
    } catch (error) {}
  };

const removeFromCart =
  (productId: string) =>
  (
    dispatch: (arg0: { type: any; payload: string }) => void,
    getState: () => { cart: { cartItems: any } }
  ) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });

    const {
      cart: { cartItems },
    } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
  };

export { addToCart, removeFromCart };
