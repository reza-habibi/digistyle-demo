import { TCartItem, TCartState } from "../../type.ds";
import {
  CART_ADD_ITEM,
  CART_EMPTY,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_INCREASE_QTY,
  CART_DECREASE_QTY,
} from "../constants/cartConstants";

const initialState: TCartState = { cartItems: [] };

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case CART_REMOVE_ITEM:
      return {
        cartItems: state.cartItems.filter(
          (x) => x.product !== action.payload
        ),
      };

    case CART_INCREASE_QTY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          action.payload === item.product
            ? { ...item, qty: item.qty + 1 }
            : item
        ),
      };

    case CART_DECREASE_QTY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          action.payload === item.product
            ? { ...item, qty: item.qty - 1 }
            : item
        ),
      };

    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };

    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };

    case CART_EMPTY:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};
