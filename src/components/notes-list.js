import React from "react";
import { showFormattedDate } from "../utils";
import NotesItem from "./notes-item";
import PropTypes from "prop-types";

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

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
