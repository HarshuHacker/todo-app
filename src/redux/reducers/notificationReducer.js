import { createSlice } from "@reduxjs/toolkit";
import { todoActions } from "./todoReducer";
import { noteActions } from "./noteReducer";

const initialState = {
  message: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(todoActions.add, (state, action) => {
        state.message = "Todo Added";
      })
      .addCase(todoActions.toggle, (state, action) => {
        state.message = "Todo Toggled";
      })
      .addCase(noteActions.add, (state, action) => {
        state.message = "Note Added";
      })
      .addCase(noteActions.delete, (state, action) => {
        state.message = "Note Deleted";
      })
      .addDefaultCase((state, action) => {});
  },
});

export const notificatioNReducer = notificationSlice.reducer;
export const notificationActions = notificationSlice.actions;
export const notificationSelector = (state) => state.notification.message;
