import axios from "axios";
import { TCartItem } from "../../type.ds";
import { CART_EMPTY } from "../constants/cartConstants";
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_PAY_REQUEST,
  ORDER_PAY_FAIL,
  ORDER_PAY_SUCCESS,
  ORDER_MINE_LIST_REQUEST,
  ORDER_MINE_LIST_FAIL,
  ORDER_MINE_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
} from "../constants/orderConstants";

export const createOrder =
  (
    order:
      | {
          orderItems: any[] | TCartItem[];
          cartItems: any[];
          subPrice?: number;
          discount?: number;
          itemsPrice?: number;
        }
      | {
          orderItems: any[] | TCartItem[];
          shippingAddress: any;
          cartItems: TCartItem[];
          subPrice?: number;
          discount?: number;
          itemsPrice?: number;
        }
      | {
          orderItems: any[] | TCartItem[];
          paymentMethod: any;
          cartItems: TCartItem[];
          subPrice?: number;
          discount?: number;
          itemsPrice?: number;
        }
  ) =>
  async (
    dispatch: (arg0: { type: string; payload?: any }) => void,
    getState: () => { userSignin: { userInfo: any } }
  ) => {
    dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
    try {
      const {
        userSignin: { userInfo },
      } = getState();
      const { data } = await axios.post("/api/orders", order, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
      dispatch({ type: CART_EMPTY });
      localStorage.removeItem("cartItems");
    } catch (error) {
      dispatch({
        type: ORDER_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const detailsOrder =
  (orderId: any) =>
  async (
    dispatch: (arg0: { type: string; payload: any }) => void,
    getState: () => { userSignin: { userInfo: any } }
  ) => {
    dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await axios.get(`/api/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ORDER_DETAILS_FAIL, payload: message });
    }
  };

export const payOrder =
  (order: { _id: any }, paymentResult: any) =>
  async (
    dispatch: (arg0: { type: string; payload: any }) => void,
    getState: () => { userSignin: { userInfo: any } }
  ) => {
    dispatch({ type: ORDER_PAY_REQUEST, payload: { order, paymentResult } });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      //@ts-ignore
      const { data } = axios.put(
        `/api/orders/${order._id}/pay`,
        paymentResult,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ORDER_PAY_FAIL, payload: message });
    }
  };

export const listOrderMine =
  () =>
  async (
    dispatch: (arg0: { type: string; payload?: any }) => void,
    getState: () => { userSignin: { userInfo: any } }
  ) => {
    dispatch({ type: ORDER_MINE_LIST_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await axios.get("/api/orders/mine", {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: ORDER_MINE_LIST_SUCCESS, payload: data });
      console.log(data);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ORDER_MINE_LIST_FAIL, payload: message });
    }
  };

export const listOrders =
  () =>
  async (
    dispatch: (arg0: { type: string; payload?: any }) => void,
    getState: () => { userSignin: { userInfo: any } }
  ) => {
    dispatch({ type: ORDER_LIST_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await axios.get("/api/orders", {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      console.log(data);
      dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ORDER_LIST_FAIL, payload: message });
    }
  };
