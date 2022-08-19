import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
        state.user = action.payload;
    },
    logout: (state) => {
        state.user = null;
      },
  },
});

export const {  login, logout  } = UserSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectUser = (state) => state.user.user;


export default UserSlice.reducer;
