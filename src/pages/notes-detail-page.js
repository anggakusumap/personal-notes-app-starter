import React from "react";
import { useParams } from "react-router-dom";
import NotesActionDetailPage from "../components/notes-action-detail-page";
import { showFormattedDate } from "../utils";
import { getNote } from "../utils/local-data";

export default function NotesDetailPage() {
  const { id } = useParams();
  const note = getNote(id);

  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{note.title}</h3>
      <p className="detail-page__createdAt">
        {showFormattedDate(note.createdAt)}
      </p>
      <div className="detail-page__body">{note.body}</div>
      <NotesActionDetailPage />
    </section>
  );
}
