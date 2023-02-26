import axios from "axios";
import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCT_SUCCESS,
  ADD_PRODUCTS,
} from "./admin.products.actionTypes";

const token = localStorage.getItem("admintoken");
export const getData =
  (ProductCategory, ProductCategory2) => async (dispatch) => {
    dispatch({ type: GET_PRODUCTS_LOADING });
    try {
      axios
        .get(
          `https://shy-ruby-piglet.cyclic.app/products?category=${ProductCategory}&category1=${ProductCategory2}`
        )
        .then((res) =>
          dispatch({
            type: GET_PRODUCT_SUCCESS,
            payload: {
              data: res.data,
              iserror: false,
            },
          })
        );
    } catch (e) {
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: {
          data: [],
          iserror: true,
        },
      });
      console.log(e);
    }
  };

export const addData = (newdata) => async (dispatch) => {
  console.log("adddata", newdata);
  dispatch({ type: ADD_PRODUCTS });
  try {
    let data = await fetch(`https://shy-ruby-piglet.cyclic.app/products/add`, {
      method: "POST",
      body: JSON.stringify(newdata),

      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }); 
    await data.json()
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
