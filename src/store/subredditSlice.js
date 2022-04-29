import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    subReddits: [],
    error: false,
    isLoading: false,
};

const subRedditSlice = createSlice({
    name: 'subReddits',
    initialState,
    reducers: {

    },
});

export default subRedditSlice.reducer;