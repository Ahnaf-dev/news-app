import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./features/newsData/newsDataSlice";
export const store = configureStore({
  reducer: {
    news: newsSlice,
  },
});
