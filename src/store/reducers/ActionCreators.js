import { storiesSlice } from './storiesSlice';
import { storyPageSlice } from './storyPageSlice';

export const fetchStories = (stories) => async (dispatch) => {
  try {
    dispatch(storiesSlice.actions.lastStoriesFetching());
    dispatch(storiesSlice.actions.lastStoriesFetchingSuccess(stories));
  } catch (e) {
    dispatch(storiesSlice.actions.lastStoriesFetchingError(e.message));
  }
};

export const fetchOpenedStory = (story) => async (dispatch) => {
  try {
    dispatch(storyPageSlice.actions.storyFetching());
    dispatch(storyPageSlice.actions.storyFetchingSuccess(story));
  } catch (e) {
    dispatch(storyPageSlice.actions.storyFetchingError(e.message));
  }
};
