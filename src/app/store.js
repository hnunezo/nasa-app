import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "../states/page";

export default configureStore({
  reducer: { page: pageReducer },
});
