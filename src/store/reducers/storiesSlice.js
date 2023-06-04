import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allStories: [],
  isLoading: false,
  error: '',
};

export const storiesSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    lastStoriesFetching(state, action) {
      state.isLoading = true;
    },
    lastStoriesFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = '';
      state.allStories = action.payload;
    },
    lastStoriesFetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default storiesSlice.reducer;
