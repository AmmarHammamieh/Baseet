import {  createSlice } from "@reduxjs/toolkit";


const initialState = {
  SlidesProduct: [],
};

export const SlideProductSlice = createSlice({
  name: "ProductSlide",
  initialState,
  reducers: {
    addProductSlide: (state, action) => {
          state.SlidesProduct = [action.payload];
      },
  emptyProductSlide: (state, action) => {
        state.SlidesProduct = [];
  },
    removeProductSlide: (state, action) => {
      const index= state.SlidesProduct.findIndex(category => category.id === action.payload.id);

      let newCategory = [...state.SlidesProduct];

      if(index >= 0){
        newCategory.splice(index , 1)
      }else {
        console.warn(`Cant remove Category (id: ${action.payload.id}) as its not in the Category List`
        );
      }

      state.SlidesProduct = newCategory ;
    },
  },
});

  
export const { addProductSlide, removeProductSlide,emptyProductSlide } = SlideProductSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectProductSlide = (state) => state.ProductSlide.SlidesProduct;

export default SlideProductSlice.reducer;
