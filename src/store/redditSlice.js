import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: '',
    selectedSubreddit: '',
};

const redditSlice = createSlice({
    name: 'redditPosts',
    initialState,
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
            state.searchTerm = '';
        },
    },
});

export const {
    setSearchTerm,
    setSelectedSubreddit,
} = redditSlice.actions;

export default redditSlice.reducer;

export const selectSelectedSubreddit = (state) => state.reddit.selectedSubreddit;