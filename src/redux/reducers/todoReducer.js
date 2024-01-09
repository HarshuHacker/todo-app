import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

// export const getInitialStateAsync = createAsyncThunk(
//   "todos",
//   (arg, thunkApi) => {
//     axios
//       .get(arg)
//       .then((response) =>
//         thunkApi.dispatch(todoActions.initializeTodos(response.data))
//       );
//   }
// );

export const getInitialStateAsync = createAsyncThunk("todos", async (arg) => {
  const { data } = await axios.get(arg);
  return data;
});

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
  extraReducers: (builder) => {
    builder.addCase(getInitialStateAsync.fulfilled, (state, action) => {
      state.todos = [...action.payload];
    });
  },
});

export const todoReducer = todoSlice.reducer;
export const todoActions = todoSlice.actions;
export const todoSelector = (state) => state.todos.todos;

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
