import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const aprovedProductsSlice = createSlice({
  name: "approved",
  initialState,
  reducers: {
    AddToApproved: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromApproved: (state, action) => {
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

export const { AddToApproved, removeFromApproved } = aprovedProductsSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectApproved = (state) => state.approved.items;

export default aprovedProductsSlice.reducer;
