import {  createSlice } from "@reduxjs/toolkit";


const initialState = {
  SlidesImage: [],
};

export const ImageSlideSlice = createSlice({
  name: "ImageSlide",
  initialState,
  reducers: {
    addImageSlide: (state, action) => {
          state.SlidesImage = [action.payload];
      },
  emptyImageSlide: (state, action) => {
        state.SlidesImage = [];
  },
    removeImageSlide: (state, action) => {
      const index= state.SlidesImage.findIndex(category => category.id === action.payload.id);

      let newCategory = [...state.SlidesImage];

      if(index >= 0){
        newCategory.splice(index , 1)
      }else {
        console.warn(`Cant remove Category (id: ${action.payload.id}) as its not in the Category List`
        );
      }

      state.SlidesImage = newCategory ;
    },
  },
});

  
export const { addImageSlide, removeImageSlide,emptyImageSlide } = ImageSlideSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectImageSlide = (state) => state.ImageSlide.SlidesImage;

export default ImageSlideSlice.reducer;
