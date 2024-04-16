import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    foundBlogs: [],
  },
  reducers: {
    getBlog: (state, action) => {
      state.foundBlogs.push(action.payload);
    },
  },
});

export const { getBlog } = searchSlice.actions;
export default searchSlice.reducer;
