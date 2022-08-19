import {  createSlice } from "@reduxjs/toolkit";


const initialState = {
  Images: [],
};

export const ImagesInSlideSlice = createSlice({
  name: "ImageInside",
  initialState,
  reducers: {
    addImageInside: (state, action) => {
          state.Images = [...state.Images,action.payload];
      },
  emptyImageInside: (state, action) => {
        state.Images = [];
  },
    removeImageInside: (state, action) => {
      const index= state.Images.findIndex(category => category.id === action.payload.id);

      let newCategory = [...state.Images];

      if(index >= 0){
        newCategory.splice(index , 1)
      }else {
        console.warn(`Cant remove Category (id: ${action.payload.id}) as its not in the Category List`
        );
      }

      state.Images = newCategory ;
    },
  },
});

  
export const { addImageInside, removeImageInside,emptyImageInside } = ImagesInSlideSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectImageInside = (state) => state.ImageInside.Images;

export default ImagesInSlideSlice.reducer;
