const { createSlice } = require("@reduxjs/toolkit");
const initialState = { isLoggedIn: false };
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    }
  }
});

export default authSlice;
