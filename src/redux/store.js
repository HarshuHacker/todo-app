// Creating Reducer Using Redux Toolkit

import { Tuple, configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";
import { notificatioNReducer } from "./reducers/notificationReducer";
import { loggerMiddleware } from "./middlewares/logger";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    notes: noteReducer,
    notification: notificatioNReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
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
