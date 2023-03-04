import React from "react";
import { getArchivedNotes } from "../utils/local-data";
import NotesList from "./notes-list";
import NotesListEmpty from "./notes-list-empty";
import NotesSearchBar from "./notes-search-bar";

export default function NotesArchivesPage() {
  const notesArchived = getArchivedNotes();
  return (
    <section className="archives-page">
      <h2>Catatan Arsip</h2>
      <NotesSearchBar />
      {notesArchived.length !== 0 ? (
        <NotesList notes={notesArchived} />
      ) : (
        <NotesListEmpty />
      )}
    </section>
  );
}
