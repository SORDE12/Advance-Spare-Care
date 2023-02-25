import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
    combineReducers,
  } from "redux";
  
  import thunk from "redux-thunk";
import authReducer from "./Authentication/auth.reducer";
import { cartReducer } from "./Cart/cart.reducer";
  
//   import { cartReducer } from "./cart/reducer";
import  {productReducer} from "./Products/product.reducer";
  
//   import { adminReducer } from "./Admin/admin.reducer"
  
  const rootReducer = combineReducers({
    auth: authReducer,
    productManager: productReducer,
    cartManager: cartReducer,
    // admin: adminReducer
  });
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );