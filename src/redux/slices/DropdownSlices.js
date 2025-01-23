// src/features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDropdownBars: false,
  isNotification: false,
  isDropdownUser: false,
};

const DropdownSlice = createSlice({
  name: "Dropdown",
  initialState,
  reducers: {
    // setActiveDropdown: (state, action) => {
    //   Object.keys(state).forEach((key) => {
    //     state[key] = false;
    //   });
    //   state[action.payload] = true;
    // },
    setBarsDropdown: (state) => {
      state.isDropdownBars = !state.isDropdownBars;
      state.isNotification = false;
      state.isDropdownUser = false;
    },
    setNotifDropdown: (state) => {
      state.isNotification = !state.isNotification;
      state.isDropdownUser = false;
      state.isDropdownBars = false;
    },
    setUserDropdown: (state) => {
      state.isDropdownUser = !state.isDropdownUser;
      state.isNotification = false;
      state.isDropdownBars = false;
    },

    clearDropdown: (state) => {
      state.isDropdownBars = false;
      state.isNotification = false;
      state.isDropdownUser = false;
    },
  },
});

// export const { setActiveDropdown } = DropdownSlice.actions;
export const {
  setBarsDropdown,
  setNotifDropdown,
  setUserDropdown,
  clearDropdown,
} = DropdownSlice.actions;

export default DropdownSlice.reducer;
