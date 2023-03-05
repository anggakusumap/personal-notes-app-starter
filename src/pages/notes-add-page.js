import React from "react";
import { useNavigate } from "react-router-dom";
import NotesInput from "../components/notes-input";
import { addNote } from "../utils/local-data";

export default function NotesAddPage() {
  const navigate = useNavigate();

  function onAddNoteEventHandler(note) {
    addNote(note);
    navigate("/");
  }
  return (
    <section className="add-new-page">
      <NotesInput addNote={onAddNoteEventHandler} />
    </section>
  );
}
