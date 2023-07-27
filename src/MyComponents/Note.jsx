import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const StickyNote = ({ stickyNote, handleDelete }) => {
  // Custom CSS styles for priority levels
  const priorityStyle = {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "5px",
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: "16px",
  };
  const mymansexj = {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "51px",
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: "79%",
  };

  // Function to format the date to 'dd-mm-yyyy'
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const getPriorityColor = () => {
    if (stickyNote.priorityLevel === "Low") {
      return "green";
    } else if (stickyNote.priorityLevel === "Medium") {
      return "#b0a000";
    } else if (stickyNote.priorityLevel === "High") {
      return "red";
    }
    // Default to black if priority level is not recognized
    return "black";
  };

  return (
    <Card
      className="m-3 shadow-lg rounded"
      style={{
        width: "18rem",
        background: "#fffaf0",
        border: "1px solid #f0e68c",
        boxShadow: "2px 2px 5px #ddd",
      }}
    >
      <Card.Body style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            fontFamily: "double",
            fontWeight: "bold",
            fontSize: "21px",
            textAlign: "center",
            marginBottom: "10px",
            textTransform: "capitalize",
          }}
        >
          {stickyNote.noteTitle}
        </div>
        <div className="border-top my-1"></div>
        <div
          style={{
            fontFamily: "double",
            fontWeight: "600",
            fontSize: "15px",
            textAlign: "center",
            marginBottom: "10px",
            paddingBottom: "15px",
            textTransform: "capitalize",
          }}
        >
          {stickyNote.stickyNoteContent}
        </div>
        <div style={priorityStyle}>
          Priority Level :{" "}
          <span style={{ color: getPriorityColor(), paddingLeft:"3px"}}>
            {stickyNote.priorityLevel}
          </span>
        </div>
        <div style={mymansexj}>
          Expected Date of Completion: {formatDate(stickyNote.expectedDate)}
        </div>
      </Card.Body>
      <div
        style={{
          position: "absolute",
          bottom: "15px",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 3,
        }}
      >
        <Button
          style={{
            color:"black",
            width: "125px",
            border: "1px solid #d36e70",
          }}
          variant="danger"
          onClick={() => handleDelete(stickyNote)}
        >
          Delete Note
        </Button>
      </div>
    </Card>
  );
};

export default StickyNote;