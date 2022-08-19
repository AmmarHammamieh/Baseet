import {  createSlice } from "@reduxjs/toolkit";


const initialState = {
  InsideProducts: [],
};

export const InsideSlideSlice = createSlice({
  name: "insideSlide",
  initialState,
  reducers: {
    addinsideSlideProduct: (state, action) => {
          state.InsideProducts = [...state.InsideProducts,action.payload];
      },
  emptyinsideSlideProduct: (state, action) => {
        state.InsideProducts = [];
  },
    removeinsideSlideProduct: (state, action) => {
      const index= state.InsideProducts.findIndex(category => category.id === action.payload.id);

      let newCategory = [...state.InsideProducts];

      if(index >= 0){
        newCategory.splice(index , 1)
      }else {
        console.warn(`Cant remove Category (id: ${action.payload.id}) as its not in the Category List`
        );
      }

      state.InsideProducts = newCategory ;
    },
  },
});

  
export const { addinsideSlideProduct, removeinsideSlideProduct,emptyinsideSlideProduct } = InsideSlideSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectInsideSlide = (state) => state.insideSlide.InsideProducts;

export default InsideSlideSlice.reducer;
