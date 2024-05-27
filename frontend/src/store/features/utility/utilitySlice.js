import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuOpen: false,
  isDarkMode: false,
  theme: "light",
};

export const utilitySlice = createSlice({
  name: "utility",
  initialState,
  reducers: {
    isMenuOpen: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    isDarkModeOn: (state) => {
      state.isDarkMode = !state.isDarkMode;
      state.theme = state.isDarkMode ? "dark" : "light";
      document.documentElement.setAttribute("data-theme",state.theme)
    },
  },
});

export const { isMenuOpen, isDarkModeOn } = utilitySlice.actions;
export default utilitySlice.reducer;
