import {  createSlice } from "@reduxjs/toolkit";


const initialState = {
  Products: [],
};

export const ProductInCategorySlice = createSlice({
  name: "productInCategory",
  initialState,
  reducers: {
    addProductInCategory: (state, action) => {
      state.Products = [...state.Products, action.payload];
      },
      emptyProductInCategory: (state, action) => {
        state.Products = [];
  },
  removeProductInCategory: (state, action) => {
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

  
export const { addProductInCategory, removeProductInCategory,emptyProductInCategory } = ProductInCategorySlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectProductsInCategory = (state) => state.productInCategory.Products;

export default ProductInCategorySlice.reducer;
