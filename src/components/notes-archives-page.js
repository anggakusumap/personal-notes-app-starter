import React from "react";
import NotesList from "./notes-list";
import NotesSearchBar from "./notes-search-bar";

export default function NotesArchivesPage({ notes }) {
  console.log("notes archive :>> ", notes);
  return (
    <section className="archives-page">
      <h2>Catatan Arsip</h2>
      <NotesSearchBar />
      <NotesList notes={notes} />
    </section>
  );
}
