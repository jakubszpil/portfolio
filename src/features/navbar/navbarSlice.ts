import { createSlice } from '@reduxjs/toolkit';

interface NavbarState {
  expanded: boolean;
}

const initialState: NavbarState = {
  expanded: false,
};

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggleNavbar: (state) => {
      state.expanded = !state.expanded;
    },
    collapseNavbar: (state) => {
      state.expanded = false;
    },
    expandNavbar: (state) => {
      state.expanded = true;
    },
  },
});

export const {
  toggleNavbar,
  collapseNavbar,
  expandNavbar,
} = navbarSlice.actions;

export default navbarSlice.reducer;
