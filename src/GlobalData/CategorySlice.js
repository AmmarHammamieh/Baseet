import {  createSlice } from "@reduxjs/toolkit";


const initialState = {
  Categories: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (state, action) => {
          state.Categories = [action.payload];
      },
  emptyCategory: (state, action) => {
        state.Categories = [];
  },
    removeCategory: (state, action) => {
      const index= state.Categories.findIndex(category => category.id === action.payload.id);

      let newCategory = [...state.Categories];

      if(index >= 0){
        newCategory.splice(index , 1)
      }else {
        console.warn(`Cant remove Category (id: ${action.payload.id}) as its not in the Category List`
        );
      }

      state.Categories = newCategory ;
    },
  },
});

  
export const { addCategory, removeCategory,emptyCategory } = categorySlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectCategories = (state) => state.category.Categories;

export default categorySlice.reducer;
