import { useSelector, useDispatch } from "react-redux";
import { todoActions, todoSelector } from "../../redux/reducers/todoReducer";

import "./ToDoList.css";
import { useEffect } from "react";
import axios from "axios";

function ToDoList() {
  const todos = useSelector(todoSelector);
  const disptach = useDispatch();
  // const todos= store.getState().todos;

  useEffect(() => {
    // fetch("http://localhost:4100/api/todos")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    axios.get("http://localhost:4100/api/todos")
    .then(response => console.log(response.data))
  }, []);

  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Completed" : "Pending"}
            </span>
            <button
              className="btn btn-warning"
              onClick={() => {
                disptach(todoActions.toggle(index));
              }}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
