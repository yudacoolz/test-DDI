import { configureStore } from "@reduxjs/toolkit";
import DropdownSlices from "./slices/DropdownSlices";

export const store = configureStore({
  reducer: {
    dropdown: DropdownSlices,
  },
});
