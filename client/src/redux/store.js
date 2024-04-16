import { configureStore } from "@reduxjs/toolkit";

import postsSlice from "./postsSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    search: searchSlice,
  },
});
