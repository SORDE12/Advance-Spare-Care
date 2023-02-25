import * as types from "./cart.types";

const initState = {
  loading: false,
  error: false,
  products: [],
};

export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GET_CART_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case types.GET_CART_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case types.GET_CART_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        products: payload,
      };
    }
    case types.DELETE_CART_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case types.DELETE_CART_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case types.DELETE_CART_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case types.EDIT_CART_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case types.EDIT_CART_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case types.EDIT_CART_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }

    case types.ADD_CART_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case types.ADD_CART_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case types.ADD_CART_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
       
      };
    }
    default: {
      return state;
    }
  }
};
