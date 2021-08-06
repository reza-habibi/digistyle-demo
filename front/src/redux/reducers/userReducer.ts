import {
  USER_SIGNIN_Fail,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from "../constants/userConstants";

const initialState:any={}

export const userSigninReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNIN_Fail:
      return { loading: false, error: action.payload };
    case USER_SIGNOUT:
      return {};

    default:
      return state;
  }
};
