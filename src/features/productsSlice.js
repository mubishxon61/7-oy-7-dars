import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    initialState: localStorage.getItem("cartProducts")
    ? JSON.parse(localStorage.getItem("cartProducts"))
     : [],
    name: "products",
        reducers: {
            addToCart: (state, {payload}) => {
            const cartProducts = !state.find((products) => products.id === payload.id)
             ? [...state, {...payload, amount: 1}]
              : state.map((product) => 
                product.id === payload.id 
              ? {...product, amount: product.amount + 1} 
              : product
         );
            localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
            return cartProducts;
         }, 
         minusFromCart: (state, {payload}) => {
            const findProduct = [...state].find((product) =>
                product.id === payload.id);
            if (findProduct.amount === 1) {
                const cartProducts = [...state].filter((product) =>{
                  return product.id !== payload.id
                });
            localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
                return cartProducts;
            } else {
                const cartProducts = [...state].map((product) =>{
                return product.id === payload.id
                ? {...product, amount: product.amount - 1}
                : product;
             }
             );
            localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
            return cartProducts;
         }                  
        },
         remuveFromCart: (state, {payload}) => {
            const cartProducts = [...state].filter((product) =>{
                return product.id !== payload.id});
            localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
            return cartProducts;
         }
    },
});

export const { addToCart, minusFromCart, remuveFromCart } = productsSlice.actions;
export default productsSlice.reducer;