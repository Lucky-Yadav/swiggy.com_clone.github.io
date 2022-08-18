import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer} from "./auth/reducer";
import {reducer as addressReducer} from "../../../src/Redux/Cart/Reducer"

const rootReducer = combineReducers({
    auth: authReducer,
    cart:addressReducer
})

export const store = createStore(rootReducer, compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ));