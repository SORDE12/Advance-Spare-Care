import {
  ADMIN_LOGIN_FAILURE,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_RESET,
} from "./adminauth.actionTypes.js";
import axios from "axios";

//  const ADMINRegister = (data) => async (dispatch) => {
//   try {
//     dispatch({ type: ADMIN_REGISTER_REQUEST });

//     const res = await axios.post(
//       "https://advance-spare-care.onrender.com/users/register",
//       data
//     );
//     // console.log('res: ', res);

//     dispatch({
//       type: ADMIN_REGISTER_SUCCESS,
//       payload: {
//         message: res.data.message,
//       },
//     });
//   } catch (error) {
//     dispatch({
//       type: ADMIN_REGISTER_FAILURE,
//       payload: {
//         message: error.response.data.message,
//       },
//     });
//   }
// };

export const ADMINLogin = (data) => async (dispatch) => {
  // console.log("data: ", data);
  try {
    dispatch({ type: ADMIN_LOGIN_REQUEST });

    const res = await axios.post(
      "https://advance-spare-care.onrender.com/admin/login",
      data
    );
    console.log("res: ", res);
    if (res.data.token) {
      dispatch({
        type: ADMIN_LOGIN_SUCCESS,
        payload: {
          token: res.data.token,
          message: res.data.msg,
        },
      });
    } else {
      dispatch({
        type: ADMIN_LOGIN_FAILURE,
        payload: {
          message: res.data.msg,
        },
      });
    }
  } catch (error) {
    // console.log("error: ", error);

    dispatch({
      type: ADMIN_LOGIN_FAILURE,
      payload: {
        message: error,
      },
    });
  }
};
export const ADMINLogout = () => async (dispatch) => {
  // console.log("data: ", data);
  dispatch({ type: ADMIN_LOGIN_RESET });
};
