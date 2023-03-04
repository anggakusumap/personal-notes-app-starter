import React from "react";
import { Link } from "react-router-dom";

export default function NotesItem({ id, title, body, createdAt, archived }) {
  console.log("id :>> ", id);
  return (
    <article className="note-item" key={id}>
      <h3 className="note-item__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__createdAt">{createdAt}</p>
      <p className="note-item__body">{body}</p>
    </article>
  );
}
