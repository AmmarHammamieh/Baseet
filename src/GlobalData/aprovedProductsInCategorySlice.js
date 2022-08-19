import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const aprovedProductsInCategorySlice = createSlice({
  name: "accepted",
  initialState,
  reducers: {
    AddToApprovedProducts: (state, action) => {
      state.items = [...state.items, action.payload]
      },
      emptyFromApprovedProducts: (state, action) => {
        state.items = [];
  },
    removeFromApprovedProducts: (state, action) => {
      const index= state.items.findIndex(basketItem => basketItem.id === action.payload.id);

      let newBasket = [...state.items];

      if(index >= 0){
        newBasket.splice(index , 1)
      }else {
        console.warn(`Cant remove product (id: ${action.payload.id}) as its not in the Basket`
        );
      }

      state.items = newBasket ;
    },
  },
});

export const { AddToApprovedProducts, removeFromApprovedProducts,emptyFromApprovedProducts } = aprovedProductsInCategorySlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectApprovedProducts = (state) => state.accepted.items;

export default aprovedProductsInCategorySlice.reducer;
