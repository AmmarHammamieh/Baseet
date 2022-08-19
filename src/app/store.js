import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../GlobalData/UserSlice";
import CategoryReducer from "../GlobalData/CategorySlice";
import ProductReducer from "../GlobalData/ProductSlice";
import basketReducer from "../GlobalData/basketSlice";
import aprovedProductsReducer from "../GlobalData/aprovedProductsSlice";
import ProductInCategoryReducer from "../GlobalData/ProductInCategorySlice";
import aprovedProductsInCategoryReducer from "../GlobalData/aprovedProductsInCategorySlice";
import SlideProductReducer from "../GlobalData/SlideProductSlice";
import InsideSlideReducer from "../GlobalData/InsideSlideSlice";
import AvailableProductsReducer from "../GlobalData/AvailableProductsSlice";
import ImageSlideReducer from "../GlobalData/ImageSlideSlice";
import ImagesInSlideReducer from "../GlobalData/ImagesInSlideSlice";
import ImageSlideShowReducer from "../GlobalData/ImageSlideShowSlice";


export const store = configureStore({
  reducer: {
    user: UserReducer,
    category: CategoryReducer,
    product: ProductReducer,
    basket: basketReducer,
    approved: aprovedProductsReducer,
    productInCategory:ProductInCategoryReducer,
    accepted: aprovedProductsInCategoryReducer,
    ProductSlide: SlideProductReducer,
    insideSlide: InsideSlideReducer,
    AvailableProducts:AvailableProductsReducer,
    ImageSlide: ImageSlideReducer,
    ImageInside: ImagesInSlideReducer,
    ImageSlideShow:ImageSlideShowReducer,
  },
});

