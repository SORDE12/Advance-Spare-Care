import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore

    } from "redux"

    import {productReducer} from "./Products/product.reducer"
    import thunk from "redux-thunk"

    const rootReducer=combineReducers({
        productManager:productReducer

    })

    export const store=legacy_createStore(
        rootReducer,
        compose(applyMiddleware(thunk))
    )