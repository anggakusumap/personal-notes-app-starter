import React from "react";
import NotesAction from "./notes-action";
import NotesList from "./notes-list";
import NotesSearchBar from "./notes-search-bar";

export default function NotesHomePage({ notes }) {
  console.log("notes homepage :>> ", notes);
  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      {/* Search Bar */}
      <NotesSearchBar />
      {/* Notes List */}
      <NotesList notes={notes} />
      {/* Home Page Action */}
      <NotesAction />
    </section>
  );
}
