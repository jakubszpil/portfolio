import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScrollbarProps {
  scrolled: boolean;
  attached: boolean;
}

const initialState: ScrollbarProps = {
  scrolled: false,
  attached: true,
};

export const scrollbarSlice = createSlice({
  name: 'scrollbar',
  initialState,
  reducers: {
    attachScrollbar: (state, action: PayloadAction<boolean>) => {
      state.attached = action.payload;
    },
    scrollScrollbar: (state, action: PayloadAction<boolean>) => {
      state.scrolled = action.payload;
    },
  },
});

export const { attachScrollbar, scrollScrollbar } = scrollbarSlice.actions;

export default scrollbarSlice.reducer;
