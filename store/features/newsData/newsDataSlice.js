import { createSlice } from "@reduxjs/toolkit";
import { News } from "../../../data/data";

const initialState = {
  value: News,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const { sortLatest } = newsSlice.actions;
export default newsSlice.reducer;
