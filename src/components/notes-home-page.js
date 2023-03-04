import React from "react";
import NotesActionHomePage from "./notes-action-home-page";
import NotesList from "./notes-list";
import NotesListEmpty from "./notes-list-empty";
import NotesSearchBar from "./notes-search-bar";

export default function NotesHomePage({ notes }) {
  console.log("notes homepage :>> ", notes);
  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      <NotesSearchBar />
      {notes.length !== 0 ? <NotesList notes={notes} /> : <NotesListEmpty />}
      <NotesActionHomePage />
    </section>
  );
}
