import { configureStore, createSlice } from "@reduxjs/toolkit";
import { INCREMENT, DECREMENT } from "./statetype";
const counterslice = createSlice({
  name: "couneterslice",
  initialstate: {
    counter: 0,

    status: ""
  },
  reducers: {
    increment: (state) => {
      state.counter = state.counter + 1;
      state.status = INCREMENT;
    },
    decrement: (state) => {
      state.counter = state.counter - 1;
      state.status = DECREMENT;
    },
  },
});

export const { increment, decrement } = counterslice.actions;

const store = configureStore({
  reducer: {
    counterstore1: counterslice.reducer,
  },
});

export default store;
