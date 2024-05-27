import { configureStore } from "@reduxjs/toolkit";
import utilitySlice from "./features/utility/utilitySlice";

export const store = configureStore({
  reducer: {
    utility: utilitySlice,
  },
});
