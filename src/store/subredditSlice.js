import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    subReddits: [],
    type: '',
    error: false,
    isLoading: false,
};

const subRedditSlice = createSlice({
    name: 'subReddits',
    initialState,
    reducers: {
        setType (state, action) {
            state.type = action.payload;
        },
    },
});

export const {
    setType,
} = subRedditSlice.actions;

export default subRedditSlice.reducer;

export const selectSubreddits = (state) => state.subreddits.subreddits;