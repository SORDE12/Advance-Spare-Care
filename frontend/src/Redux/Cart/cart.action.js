import axios from "axios";
import * as types from "./cart.types";

const BASE_URL = "https://shy-ruby-piglet.cyclic.app";

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

export const addToCart = (id, token) => async(dispatch) => {
  try {
    dispatch({ type: types.ADD_CART_LOADING });
    const res = await fetch(`${BASE_URL}/cart/add/${id}`, {
      method:"POST",
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();

    dispatch({ type: types.ADD_CART_SUCCESS, payload: data.cart });
}catch(e){
      dispatch({ type: types.ADD_CART_ERROR });

};
}
