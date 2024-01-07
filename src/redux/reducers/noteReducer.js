import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

const initialState = {
  notes: [
    {
      text: "Text 1",
      createdOn: new Date(),
    },
    {
      text: "Text 2",
      createdOn: new Date(),
    },
  ],
};

export function noteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, { text: action.text, createdOn: new Date() }],
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note, i) => i !== action.index),
      };
    default:
      return state;
  }
}
