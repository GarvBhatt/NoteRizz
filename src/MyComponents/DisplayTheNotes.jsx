import React from "react";
import StickyNote from "./Note";

const StickyNoteInfo = (props) => {
  const stickyNoteListStyle = {
    minHeight: "15vh",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: "30px auto",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  if (props.stickyNotes.length === 0) {
    return (
      <div className="text-center my-3" style={stickyNoteListStyle}>
        <p style={{ fontSize: "20px", color: "#555" }}>
          Oops! No sticky notes to display at the moment.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-center mb-4">Sticky Note Information</h2>
      <div style={stickyNoteListStyle}>
        {props.stickyNotes.map((stickyNote, index) => (
          <StickyNote
            key={index}
            stickyNote={stickyNote}
            handleDelete={props.handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default StickyNoteInfo;