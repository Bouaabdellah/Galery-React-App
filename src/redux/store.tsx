import { configureStore } from "@reduxjs/toolkit";
import searchStore from "./searchStore";
import amountStore from "./amountStore";
import imagesStore from "./imagesStore";

export const store = configureStore({
    reducer: {
        search: searchStore,
        amount: amountStore,
        images: imagesStore
    }
})