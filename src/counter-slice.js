const { createSlice } = require("@reduxjs/toolkit");
const initialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment(state, payload) {
      state.counter = state.counter + payload.payload;
    },
    decrement(state, payload) {
      state.counter = state.counter - payload.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

export default counterSlice;
