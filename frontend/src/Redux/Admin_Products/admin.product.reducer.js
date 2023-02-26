import {
  ADD_PRODUCTS,
  GET_PRODUCTS_LOADING,
  GET_PRODUCT_SUCCESS,
  UPDATE_PRODUCTS,
  REMOVE_PRODUCTS
} from "./admin.products.actionTypes";

const initialState = {
  data: [],
  isloader: false,
  iserror: false,
};

const Admin_Products_reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_LOADING: {
      return { ...state, isloader: true, iserror: false };
    }

    case GET_PRODUCT_SUCCESS: {
      return { ...state, isloader: false, data: payload.data };
    }

    case ADD_PRODUCTS: {
      return { ...state, isloader: false };
    }
    case UPDATE_PRODUCTS: {
      return { ...state, isloader: false };
    }

    case REMOVE_PRODUCTS: {
      return {...state,isloader:false};
    }

    default: {
      return state;
    }
  }
};

export default Admin_Products_reducer;
