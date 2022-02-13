import { combineReducers } from "@reduxjs/toolkit";
import PostChatReducer from "./PostChatReducer";

export default combineReducers({
    chat : PostChatReducer
});