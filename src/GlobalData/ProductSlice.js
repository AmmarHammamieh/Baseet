import {  createSlice } from "@reduxjs/toolkit";


const initialState = {
  Products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
          state.Products = [action.payload];
      },
  emptyProduct: (state, action) => {
        state.Products = [];
  },
    removeProduct: (state, action) => {
      const index= state.Products.findIndex(product => product.id === action.payload.id);

      let newProduct = [...state.Products];

      if(index >= 0){
        newProduct.splice(index , 1)
      }else {
        console.warn(`Cant remove Category (id: ${action.payload.id}) as its not in the Category List`
        );
      }

      state.Products = newProduct ;
    },
  },
});

  
export const { addProduct, removeProduct,emptyProduct } = productSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectProducts = (state) => state.product.Products;

export default productSlice.reducer;
