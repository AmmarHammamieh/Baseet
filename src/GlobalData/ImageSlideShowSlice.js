import {  createSlice } from "@reduxjs/toolkit";


const initialState = {
  SlideImages: [],
};

export const ImageSlideShowSlice = createSlice({
  name: "ImageSlideShow",
  initialState,
  reducers: {
    addImagesSlide: (state, action) => {
          state.SlideImages = [...state.SlideImages,action.payload];
      },
  emptyImagesSlide: (state, action) => {
        state.SlideImages = [];
  },
    removeImagesSlide: (state, action) => {
      const index= state.SlideImages.findIndex(category => category.id === action.payload.id);

      let newCategory = [...state.SlideImages];

      if(index >= 0){
        newCategory.splice(index , 1)
      }else {
        console.warn(`Cant remove Category (id: ${action.payload.id}) as its not in the Category List`
        );
      }

      state.SlideImages = newCategory ;
    },
  },
});

  
export const { addImagesSlide, removeImagesSlide,emptyImagesSlide } = ImageSlideShowSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectImagesSlide = (state) => state.ImageSlideShow.SlideImages;

export default ImageSlideShowSlice.reducer;
