import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    postList: [],
  },
  reducers: {
    getPosts: (state, action) => {
      state.postList.push(action.payload);
    },
  },
});

export const { getPosts } = postSlice.actions;

export default postSlice.reducer;
