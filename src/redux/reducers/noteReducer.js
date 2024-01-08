// import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [
    {
      text: "Text 1",
      createdOn: new Date().toDateString(),
    },
    {
      text: "Text 2",
      createdOn: new Date().toDateString(),
    },
  ],
};

// Creating Reducer Using Redux Toolkit

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    add: (state, action) => {
      state.notes.push({
        text: action.payload,
        createdOn: new Date().toDateString(),
      });
    },
    delete: (state, action) => {
      state.notes = state.notes.filter((note, i) => i !== action.payload);
    },
  },
});

export const noteReducer = noteSlice.reducer;
export const noteActions = noteSlice.actions;
export const noteSelector = (state) => state.notes.notes
// Creating Reducer Using Redux

// export function noteReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_NOTE:
//       return {
//         ...state,
//         notes: [...state.notes, { text: action.text, createdOn: new Date() }],
//       };
//     case DELETE_NOTE:
//       return {
//         ...state,
//         notes: state.notes.filter((note, i) => i !== action.index),
//       };
//     default:
//       return state;
//   }
// }
