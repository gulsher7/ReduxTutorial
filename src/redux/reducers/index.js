import { combineReducers } from "redux";
import auth from "./auth";
import counterReducer from "./counterReducer";


const appReducer = combineReducers({
    auth,
    counterReducer
})

export default appReducer