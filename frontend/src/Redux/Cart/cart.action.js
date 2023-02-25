import axios from "axios";
import * as types from "./cart.types";

const BASE_URL = "https://bindass-db.onrender.com";

export const getCartProducts = (email) => (dispatch) => {
  dispatch({ type: types.GET_CART_LOADING });
  return axios
    .get(`${BASE_URL}/carts?user=${email}`)
    .then((res) => {
      dispatch({ type: types.GET_CART_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: types.GET_CART_ERROR });
    });
};

export const deleteItemFromCart = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_CART_LOADING });
  return axios
    .delete(`${BASE_URL}/carts/${id}`)
    .then(() => {
      dispatch({ type: types.DELETE_CART_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: types.DELETE_CART_ERROR });
    });
};

export const editCartItem =
  ({ id, qty, size }) =>
  (dispatch) => {
    dispatch({ type: types.EDIT_CART_LOADING });
    return axios
      .patch(`${BASE_URL}/carts/${id}`, {
        qty: qty ? +qty : undefined,
        size,
      })
      .then(() => {
        dispatch({ type: types.EDIT_CART_SUCCESS });
      })
      .catch(() => {
        dispatch({ type: types.EDIT_CART_ERROR });
      });
  };

export const addToCart = (item) => (dispatch) => {
  dispatch({ type: types.ADD_CART_LOADING });
  return axios
    .post(`${BASE_URL}/carts`, item)
    .then(() => {
      dispatch({ type: types.ADD_CART_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: types.ADD_CART_ERROR });
    });
  
};
