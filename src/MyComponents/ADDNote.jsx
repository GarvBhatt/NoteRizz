import React, { useState } from "react";
import { Row, Form, Button, Col } from "react-bootstrap";

const AddPet = (props) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [stickyNoteContent, setStickyNoteContent] = useState("");
  const [expectedDate, setExpectedDate] = useState("");
  const [priorityLevel, setPriorityLevel] = useState("Low");
  const [isFormValid, setIsFormValid] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!noteTitle || !stickyNoteContent || !expectedDate || !priorityLevel) {
      alert("Please fill all fields in the form.");
    } else {
      props.handleAddStickyNote(
        noteTitle,
        stickyNoteContent,
        expectedDate,
        priorityLevel
      );

      // setNoteTitle("");
      // setStickyNoteContent("");
      // setExpectedDate("");
      setPriorityLevel("Low");
    }
  };

  const onChangeNoteTitle = (e) => {
    setNoteTitle(e.target.value);
    setIsFormValid(e.target.value && stickyNoteContent && expectedDate);
  };

  const onChangeStickyNoteContent = (e) => {
    setStickyNoteContent(e.target.value);
    setIsFormValid(noteTitle && e.target.value && expectedDate);
  };

  const onChangeExpectedDate = (e) => {
    setExpectedDate(e.target.value);
    setIsFormValid(noteTitle && stickyNoteContent && e.target.value);
  };

  const onChangePriorityLevel = (e) => {
    setPriorityLevel(e.target.value);
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    boxShadow: "1px 1px 2px",
    border: "solid black 1px",
    alignSelf: "center",
    margin: "20px auto",
    padding: "20px",
    width: "35em",
    maxWidth: "35em",
  };

  return (
    <div
      style={{
        fontSize: "large",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          alignSelf: "center",
          marginTop: "15px",
          marginBottom: "2px",
        }}
      >
        Add Your Sticky Note!
      </h2>
      <Form style={formStyle} onSubmit={onSubmit}>
        <Form.Group controlId="formNoteTitle" className="mb-3">
          <Form.Label>Note Title</Form.Label>
          <Form.Control
            type="text"
            value={noteTitle}
            name="noteTitle"
            onChange={onChangeNoteTitle}
            placeholder="Enter Note Title"
          />
        </Form.Group>
        <Form.Group controlId="formStickyNoteContent" className="mb-3">
          <Form.Label>Sticky Note Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={stickyNoteContent}
            name="stickyNoteContent"
            onChange={onChangeStickyNoteContent}
            placeholder="Enter Sticky Note Content"
          />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group controlId="formExpectedDate">
              <Form.Label>Expected Completion Date</Form.Label>
              <Form.Control
                type="date"
                value={expectedDate}
                name="expectedDate"
                onChange={onChangeExpectedDate}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formPriorityLevel">
              <Form.Label>Priority Level</Form.Label>
              <Form.Control
                as="select"
                value={priorityLevel}
                name="priorityLevel"
                onChange={onChangePriorityLevel}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button
          style={{ fontSize: "large", marginTop: "20px", padding: "10px 20px" }}
          variant="primary"
          type="submit"
          disabled={!isFormValid}
        >
          Add Sticky Note
        </Button>
      </Form>
    </div>
  );
};

export default AddPet;
