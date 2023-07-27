import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import About from "./MyComponents/About";
import Header from "./MyComponents/Header";
import PetInfo from "./MyComponents/DisplayTheNotes";
import Footer from "./MyComponents/Footer";
import AddPet from "./MyComponents/ADDNote";

function App() {
  let initStickyNotes = localStorage.getItem("stickyNotes")
    ? JSON.parse(localStorage.getItem("stickyNotes"))
    : [];

  const handleDelete = function (note) {
    setStickyNotes((prevStickyNotes) => prevStickyNotes.filter((it) => it !== note));
  };

  const handleAddStickyNote = (Nt, SNc, Ed, Pl) => {
    let stickyNote = {
      noteTitle:Nt,
      stickyNoteContent:SNc,
      expectedDate:Ed,
      priorityLevel:Pl,
    };
    setStickyNotes((prevStickyNotes) => [...prevStickyNotes, stickyNote]);
  };
  
  let [stickyNotes, setStickyNotes] = useState(initStickyNotes);
  useEffect(() => {
    localStorage.setItem("stickyNotes", JSON.stringify(stickyNotes));
  }, [stickyNotes]);

  return (
    <>
      <Router>
        <Header title="NoteRizz" showAdoptedPage={false} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddPet handleAddStickyNote={handleAddStickyNote} />
                <PetInfo stickyNotes={stickyNotes} handleDelete={handleDelete} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;