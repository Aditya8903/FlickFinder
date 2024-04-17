import { createSlice } from "@reduxjs/toolkit";

// initial state of store->can be arr or objs
const initialState = {
  url: {},
  geners: {},
};

// create a slice->kind of reducer i.e. functionality

export const homeSlice = createSlice({
  //name of slice
  name: "home",
  //initial state of slice
  initialState,
  //reducers
  reducers: {
    getApiConfig: (state, action) => {
      //add values in url state
      state.url = action.payload;
    },
    getGeners: (state, action) => {
      state.geners = action.payload;
    },
  },
});

export const { getApiConfig, getGeners } = homeSlice.actions;
export default homeSlice.reducer;
