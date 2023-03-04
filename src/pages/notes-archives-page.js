import React from "react";
import NotesList from "../components/notes-list";
import NotesListEmpty from "../components/notes-list-empty";
import NotesSearchBar from "../components/notes-search-bar";
import { getArchivedNotes } from "../utils/local-data";

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
