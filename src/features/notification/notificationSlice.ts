import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Notification } from "../../core/types/notification.type";
import type { RootState } from "../../store";

const initialState: Notification = {
  text: "",
  isOpen: false,
  severity: "success",
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    handleNotification: (state, action: PayloadAction<Notification>) => {
      state.text = action.payload.text;
      state.isOpen = action.payload.isOpen;
      state.severity = action.payload.severity;
    },
    handleCloseNotification: (state) => {
      state.text = "";
      state.isOpen = false;
    },
  },
});

export const { handleNotification, handleCloseNotification } =
  notificationSlice.actions;

export const selectText = (state: RootState) => state.notification.text;

export const selectIsOpen = (state: RootState) => state.notification.isOpen;

export const selectSeverity = (state: RootState) => state.notification.severity;

export default notificationSlice.reducer;
