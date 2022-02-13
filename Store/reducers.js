import { combineReducers } from "@reduxjs/toolkit";
import chatReducer from "./GupShupReducers";

export default combineReducers({
    entities: chatReducer
})