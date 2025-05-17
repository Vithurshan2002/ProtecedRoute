import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/useSlice';

const Store=configureStore({
    reducer:{
        userInfor:userReducer
    }
})

export default Store;