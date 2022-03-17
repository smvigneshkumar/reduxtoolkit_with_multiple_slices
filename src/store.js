import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";
const { configureStore } = require("@reduxjs/toolkit");

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  }
});
export default store;
