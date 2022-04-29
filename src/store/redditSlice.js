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

    },
});

export default redditSlice.reducer;