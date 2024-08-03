import { createSlice } from '@reduxjs/toolkit';
import { hit } from '../mold/hit';

interface action {
    payload: hit[];
}
interface initial {
    images: hit[]
}
const initialState: initial = {
    images: []
}
export const imagesStore = createSlice({
    name: "images",
    initialState,
    reducers: {
        setimages: (state: initial, action: action): void => {
            state.images = action.payload;
        }
    }
});

export const { setimages } = imagesStore.actions;
export default imagesStore.reducer;