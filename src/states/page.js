import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  media: "",
  date: "",
  loading: false,
};
export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    reset: () => initialState,
    setMedia: (state, action) => {
      state.media = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    changeLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { reset, setDate, setMedia, changeLoading } = pageSlice.actions;
export default pageSlice.reducer;
