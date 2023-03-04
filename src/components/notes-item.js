import React from "react";

export default function NotesItem({ id, title, body, createdAt, archived }) {
  console.log("id :>> ", id);
  return (
    <article className="note-item" key={id}>
      <h3 className="note-item__title">
        <a>{title}</a>
      </h3>
      <p className="note-item__createdAt">{createdAt}</p>
      <p className="note-item__body">{body}</p>
    </article>
  );
}
