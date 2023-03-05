import React from "react";
import { showFormattedDate } from "../utils";
import NotesItem from "./notes-item";

export default function NotesList({ notes }) {
  return (
    <section className="notes-list">
      {notes.map((note) => (
        <NotesItem
          key={note.id}
          id={note.id}
          title={note.title}
          body={note.body}
          createdAt={showFormattedDate(note.createdAt)}
          archived={note.archived}
        />
      ))}
    </section>
  );
}
