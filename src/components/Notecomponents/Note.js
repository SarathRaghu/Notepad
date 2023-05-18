import React from "react";
import 'boxicons'
function Note({ id, text, deleteNote }) {
    return (
      <div className="note">
        <div className="note__body">{text}</div>
        <div className="note__footer" style={{ justifyContent: "flex-end" }}>
          <button
            className="note__delete"
            onClick={() => deleteNote(id)}
            aria-hidden="true"
          ><i class='bx bxs-trash'></i></button>
          <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        </div>
      </div>
    );
  }
export default Note;