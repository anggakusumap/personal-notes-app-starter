import React from "react";
import NotesActionHomePage from "../components/notes-action-home-page";
import NotesList from "../components/notes-list";
import NotesListEmpty from "../components/notes-list-empty";
import NotesSearchBar from "../components/notes-search-bar";

export default function NotesHomePage({ notes }) {
  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      <NotesSearchBar />
      {notes.length !== 0 ? <NotesList notes={notes} /> : <NotesListEmpty />}
      <NotesActionHomePage />
    </section>
  );
}
