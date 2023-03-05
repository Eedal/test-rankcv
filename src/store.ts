import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import notificationReducer from "./features/notification/notificationSlice";

export const store = configureStore({
  reducer: {
    notification: notificationReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
