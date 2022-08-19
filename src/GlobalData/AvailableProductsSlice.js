import {  createSlice } from "@reduxjs/toolkit";


const initialState = {
  AvailableProducts: [],
};

export const AvailableProductsSlice = createSlice({
  name: "AvailableProducts",
  initialState,
  reducers: {
    addavailableProduct: (state, action) => {
          state.AvailableProducts = [...state.AvailableProducts,action.payload];
      },
  emptyavailableProduct: (state, action) => {
        state.AvailableProducts = [];
  },
    removeavailableProduct: (state, action) => {
      const index= state.AvailableProducts.findIndex(category => category.id === action.payload.id);

      let newCategory = [...state.AvailableProducts];

      if(index >= 0){
        newCategory.splice(index , 1)
      }else {
        console.warn(`Cant remove Category (id: ${action.payload.id}) as its not in the Category List`
        );
      }

      state.AvailableProducts = newCategory ;
    },
  },
});

  
export const { addavailableProduct, removeavailableProduct,emptyavailableProduct } = AvailableProductsSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectAvailableProducts = (state) => state.AvailableProducts.AvailableProducts;

export default AvailableProductsSlice.reducer;
