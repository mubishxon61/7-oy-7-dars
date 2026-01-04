import { configureStore } from "@reduxjs/toolkit";
import productReduser from "../features/productsSlice";
export default configureStore({
    reducer: {
        products: productReduser,
    },
})