import axios from "axios";
import {
  USER_SIGNIN_Fail,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
} from "../constants/userConstants";

export const signin =
  (email: string, password: string) => async (dispatch: any) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });

    try {
      const { data } = await axios.post("/api/users/signin", {
        email,
        password,
      });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_SIGNIN_Fail,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
