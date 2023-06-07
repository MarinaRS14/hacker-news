import { combineReducers, configureStore } from '@reduxjs/toolkit';
import newsReducer from './reducers/storiesSlice';
import storyReducer from './reducers/storyPageSlice';


const rootReducer = combineReducers({
  newsReducer,
  storyReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
