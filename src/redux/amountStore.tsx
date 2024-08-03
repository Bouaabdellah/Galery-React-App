import { createSlice } from '@reduxjs/toolkit';

interface action {
    payload: number;
}
interface initial {
    amount: number
}
const initialState: initial = {
    amount: 15
}
export const amountStore = createSlice({
    name: "amount",
    initialState,
    reducers: {
        setamount: (state: initial, action: action): void => {
            state.amount = action.payload;
        }
    }
});

export const { setamount } = amountStore.actions;
export default amountStore.reducer;