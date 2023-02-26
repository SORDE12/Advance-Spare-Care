import axios from "axios";
import * as types from "./cart.types";

const BASE_URL = "https://shy-ruby-piglet.cyclic.app";

export const getCartProducts = (token) => async(dispatch) => {
  try{
    dispatch({ type: types.GET_CART_LOADING });
    let cartData=await fetch(`${BASE_URL}/cart`,{
      headers:{
        Authorization: token,
      }
    })
     cartData=await cartData.json();
     console.log(cartData)
        dispatch({ type: types.GET_CART_SUCCESS, payload: cartData.cartProducts });
    
  }catch(e){
    dispatch({ type: types.GET_CART_ERROR });
  }
};

export const deleteItemFromCart = (id,token) => async(dispatch) => {
  
  try{
    dispatch({ type: types.DELETE_CART_LOADING });
    let cartData=await fetch(`${BASE_URL}/cart/delete/${id}`,{
      method:"DELETE",
      headers:{
        Authorization: token,
      }
    })
    // await cartData.json();
    console.log(cartData)
        dispatch({ type: types.DELETE_CART_SUCCESS});
    
  }catch(e){
    dispatch({ type: types.DELETE_CART_ERROR });
  }
};

export const editCartItem  = (id,qty,token) => async(dispatch) => {
console.log(id,qty,token)
  try{
    dispatch({ type: types.EDIT_CART_LOADING });
    let cartData=await fetch(`${BASE_URL}/cart/update/${id}`,{
      method:"PATCH",
      body:JSON.stringify({"quantity":+qty}),
      headers:{
        Authorization: token,
        "Content-Type": "application/json",
      }
    })
    await cartData.json();
   console.log(cartData)
        dispatch({ type: types.EDIT_CART_SUCCESS});
    
  }catch(e){
    dispatch({ type: types.EDIT_CART_ERROR });
  }
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
