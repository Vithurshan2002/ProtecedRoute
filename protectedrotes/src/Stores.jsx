import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/useSlice";

const Store=configureStore({
    reducer:{
        userInfor:userSlice,
    }
})

export default Store;