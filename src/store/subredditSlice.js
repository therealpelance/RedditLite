import { createSlice } from '@reduxjs/toolkit';
import { getSubreddits } from '../api/reddit';

const initialState = {
    subreddits: [

    ],
    error: false,
    isLoading: false,
};

const subRedditSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {
        startGetSubreddits(state) {
            state.isLoading = true;
            state.error = false;
          },
        getSubredditsSuccess(state, action) {
            state.isLoading = false;
            state.subreddits = action.payload;
          },
        getSubredditsFailed(state) {
            state.isLoading = false;
            state.error = true;
          },
    },
});

export const {
    startGetSubreddits,
    getSubredditsSuccess,
    getSubredditsFailed,
} = subRedditSlice.actions;

export default subRedditSlice.reducer;

export const fetchSubreddits = (type) => async (dispatch) => {
    const subType = type;
    let url = 'subreddits';
    if (subType === 'Popular') {
        url = 'subreddits';
    }

    if (subType === 'New') {
        url = 'subreddits/new';
    }
    try {
      dispatch(startGetSubreddits());
      const subreddits = await getSubreddits(url);
      dispatch(getSubredditsSuccess(subreddits));
    } catch (error) {
      dispatch(getSubredditsFailed());
    }
  };

export const selectSubreddits = (state) => state.subreddits.subreddits;