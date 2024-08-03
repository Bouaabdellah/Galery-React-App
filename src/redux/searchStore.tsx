import { createSlice } from '@reduxjs/toolkit';

interface action {
    payload: string;
}
export interface initial {
    searchedImage: string
}
const initialState: initial = {
    searchedImage: ""
}
export const searchStore = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchedImage: (state: initial, action: action): void => {
            state.searchedImage = action.payload;
        }
    }
});

export const { setSearchedImage } = searchStore.actions;
export default searchStore.reducer;