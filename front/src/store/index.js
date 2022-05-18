import { configureStore, createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: { 
//     user: localStorage.getItem("user") || null,
//     isLoggedIn: false
//    },
//   reducers: {
//     login(state) {
//       state.user = localStorage.getItem("user")
//       state.isLoggedIn = true;
//     },
//     logout(state) {
//       localStorage.removeItem("user");
//       localStorage.removeItem("token");
//       state.isLoggedIn = false;
//     },
//   },
// });

const authSlice = createSlice({
    name: "auth", 
    initialState: {
      user : null, 
      isLoggedIn: false 
    }, 
    reducers: {
      login : (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        console.log(state.user)
      },
      logout : (state) => {
        state.user = null;
        state.isLoggedIn = false
      },
    },

})

export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: authSlice.reducer,
});