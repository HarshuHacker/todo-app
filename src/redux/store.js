// Creating Reducer Using Redux Toolkit

import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    notes: noteReducer,
  },
});

// Creating Reducer Using Redux

// import * as redux from "redux";
// import {todoReducer} from "./reducers/todoReducer";
// import {noteReducer} from "./reducers/noteReducer"

// const reducer = redux.combineReducers({
//     todos: todoReducer,
//     notes: noteReducer
// })

// export const store = redux.createStore(reducer);
