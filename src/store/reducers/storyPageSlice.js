import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  storyInfo: {},
  isLoading: false,
  error: '',
};

export const storyPageSlice = createSlice({
  name: 'storyPage',
  initialState,
  reducers: {
    storyFetching(state, action) {
      state.isLoading = true;
    },
    storyFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = '';
      state.storyInfo = action.payload;
    },
    storyFetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default storyPageSlice.reducer;
