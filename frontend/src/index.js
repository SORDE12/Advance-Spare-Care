import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import { Provider } from "react-redux";
import { store } from "./Redux/store";
console.log(store.getState())
=======
import { store } from "./Redux/store";
>>>>>>> 25503a1fe4201384e0c70a2ca9bf087670ddb4f8

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <ChakraProvider>
      <Provider store={store}>
           <App />
      </Provider>
    </ChakraProvider>
  </BrowserRouter>
  </Provider>
);


