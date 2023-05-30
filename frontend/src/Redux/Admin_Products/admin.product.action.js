import axios from "axios";
import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCT_SUCCESS,
  ADD_PRODUCTS,
  UPDATE_PRODUCTS,
  REMOVE_PRODUCTS
} from "./admin.products.actionTypes";

const token = localStorage.getItem("admintoken");
export const getData = (ProductCategory, searchValue) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    axios
      .get(
        `https://advance-spare-care.onrender.com/products?category=${ProductCategory}&desc=${searchValue}`
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
    let data = await fetch(`https://advance-spare-care.onrender.com/products/add`, {
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



export const updateData = (id,newData) => async (dispatch) => {
  console.log("updatedata", id);
  dispatch({ type: UPDATE_PRODUCTS });
  try {
    let data = await fetch(`https://advance-spare-care.onrender.com/products/update/${id}`, {
      method: "PATCH",
      body: JSON.stringify(newData),

      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }); 
    await data.json()
    dispatch(getData("",""))
    console.log("Update successfully",data);
  } catch (e) {
    console.log(e);
  }
};


export const removeData = (id) => async (dispatch) => {
console.log("Delete action called")
  dispatch({ type: REMOVE_PRODUCTS });
  try {
    let data = await fetch(
      `https://advance-spare-care.onrender.com/products/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    await data.json();
    dispatch(getData("", ""));
    console.log("DELETED successfully", data);
  } catch (e) {
    console.log(e);
  }
};
