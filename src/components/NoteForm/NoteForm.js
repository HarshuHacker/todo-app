import { useState } from "react";
import "./NoteForm.css";
import { useDispatch, useSelector } from "react-redux";
import { noteActions } from "../../redux/reducers/noteReducer";
import {
  notificationActions,
  notificationSelector,
} from "../../redux/reducers/notificationReducer";

function NoteForm() {
  const [NoteText, setNoteText] = useState("");
  const dispatch = useDispatch();
  const message = useSelector(notificationSelector);

  if (message) {
    setTimeout(() => {
      dispatch(notificationActions.reset());
    }, 3000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(noteActions.add(NoteText));
    setNoteText("");
  };

  return (
    <div className="container">
      {message && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          className="form-control mb-3"
          value={NoteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">
          Create Note
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
