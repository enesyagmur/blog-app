import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    postList: [454, 545],
  },
  reducers: {
    getPosts: (state, action) => {
      state.postList = action.payload;
    },
  },
});

export const { getPosts } = postSlice.actions;

export default postSlice.reducer;
