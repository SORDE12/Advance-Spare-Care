import {
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  AUTH_REGISTER_FAILURE,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
} from "../Authentication/auth.actionTypes";
import axios from "axios";

export const authRegister = (data) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_REGISTER_REQUEST });

    const res = await axios.post(
      "https://shy-ruby-piglet.cyclic.app/users/register",
      data
    );
    // console.log('res: ', res);

    dispatch({
      type: AUTH_REGISTER_SUCCESS,
      payload: {
        message: res.data.message,
      },
    });
  } catch (error) {
    dispatch({
      type: AUTH_REGISTER_FAILURE,
      payload: {
        message: error.response.data.message,
      },
    });
  }
};

export const authLogin = (data) => async (dispatch) => {
// console.log("data: ", data);
  try {
    dispatch({ type: AUTH_LOGIN_REQUEST });

    const res = await axios.post(
      "https://shy-ruby-piglet.cyclic.app/users/login",
      data
    );
    // console.log("res: ", res);
      if(res.data.token){
        dispatch({
          type: AUTH_LOGIN_SUCCESS,
          payload: {
            token: res.data.token,
            message: res.data.msg,
            user: res.data.user,
          },
        });
      }
      else{
        dispatch({
          type: AUTH_LOGIN_FAILURE,
          payload: {
            message:res.data.msg,
          },
        });
      }
    
  } catch (error) {
    // console.log("error: ", error);

    dispatch({
      type: AUTH_LOGIN_FAILURE,
      payload: {
        message: error.response.data.msg,
      },
    });
  }
};

export const logout = (dispatch) => {
  dispatch({type:AUTH_LOGOUT})
};