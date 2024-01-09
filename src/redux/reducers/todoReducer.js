import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

const initialState = {
  todos: [
    { text: "Go to Gym at 6", completed: false },
    { text: "Study at 8", completed: true },
  ],
};

// Creating Reducer Using Redux Toolkit
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action) => {
      state.todos.push({
        text: action.payload,
        completed: false,
      });
    },
    initializeTodos: (state, action) => {
      state.todos = [...action.payload];
    },
    toggle: (state, action) => {
      state.todos.map((todo, i) => {
        if (i === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const todoActions = todoSlice.actions;
export const todoSelector = (state) => state.todos.todos;

export const getInitialStateAsync = createAsyncThunk(todoActions.initializeTodos, (arg, thunkApi) => {
  axios.get(arg)
  .then(response => thunkApi.dispatch(todoActions.initializeTodos(response.data)))
})

// Creating Reducer Using Redux

// export function todoReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             text: action.text,
//             completed: false,
//           },
//         ],
//       };
//     case TOGGLE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo, i) => {
//           if (i === action.index) {
//             todo.completed = !todo.completed;
//           }
//           return todo;
//         }),
//       };
//     default:
//       return state;
//   }
// }
