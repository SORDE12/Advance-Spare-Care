import axios from "axios";
import * as types from "./products.types"

const BASE_URL="https://shy-ruby-piglet.cyclic.app"

export const getProducts =
  ({ target, page = 1, limit = 10, sort, order }) =>
  (dispatch) => {
    dispatch({ type: types.GET_PRODUCT_LOADING });

    return axios
      .get(`${BASE_URL}/products`, {
        params: {
          target,
          _page: page,
          _limit: limit,
          _sort: sort,
          _order: order,
        },
      })
      .then((res) => {
        dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: res.data });
      })
      .catch(() => {
        dispatch({ type: types.GET_PRODUCT_ERROR });
      });
  };
