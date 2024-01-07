
// const redux = require("redux");

import * as redux from "redux";
import {todoReducer} from "./reducers/todoReducer";
import {noteReducer} from "./reducers/noteReducer"

const reducer = redux.combineReducers({
    todos: todoReducer,
    notes: noteReducer
})

export const store = redux.createStore(reducer);

