import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../slices/auth"
import profileReducer from "../slices/profileSlice";
import cartReducer from "../slices/cartSlices"
import courseReducer from "../slices/CourseSlice"

const rootReducer  = combineReducers({
    auth: authReducer,
    profile:profileReducer,
    cart:cartReducer,
    course:courseReducer,
})

export default rootReducer ;