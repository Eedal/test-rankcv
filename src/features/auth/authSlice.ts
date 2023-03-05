import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { AuthState, User } from "../../core/types/login.type";
import type { RootState } from "../../store";

const isLoggedIn = Object.values(JSON.parse(localStorage.getItem("user") || "{}")).length > 0;


const initialState: AuthState = {
  user: null,
  isLoggedIn,
};

export const characterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { loginSuccess, logoutSuccess } = characterSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export default characterSlice.reducer;
