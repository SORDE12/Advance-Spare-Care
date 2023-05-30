import axios from "axios";
import * as types from "./products.types"

const BASE_URL="https://advance-spare-care.onrender.com"

export const getProducts =
  (params) =>
 
  (dispatch) => {
    console.log("10",params)
    let carArr=params.params;
    let category=carArr[0]
    let category1=carArr[1];
    
    if(category && category1){

      dispatch({ type: types.GET_PRODUCT_LOADING });
  
      return axios
        .get(`${BASE_URL}/products?category=${category}&skip=${params.params.skip}&limit=${params.params.limit}`)
        .then((res) => {
          dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: res.data });
          
        })
        .catch(() => {
          dispatch({ type: types.GET_PRODUCT_ERROR });
        });
    }
      else if(params.params.sort!=="" && params.params.order!==""){

        console.log("sorting",params.params.sort,params.params.order)

        dispatch({ type: types.GET_PRODUCT_LOADING });
    
        return axios
          .get(`${BASE_URL}/products?_sort=${params.params.sort}&_order=${params.params.order}`)
          .then((res) => {
            dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: res.data });
            
          })
          .catch(() => {
            dispatch({ type: types.GET_PRODUCT_ERROR });
          });
      }
      else{

        dispatch({ type: types.GET_PRODUCT_LOADING });
    
        return axios
          .get(`${BASE_URL}/products`,params)
          .then((res) => {
            dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: res.data });
            // console.log(params)
          })
          .catch(() => {
            dispatch({ type: types.GET_PRODUCT_ERROR });
          });
      }
   
    
  };


