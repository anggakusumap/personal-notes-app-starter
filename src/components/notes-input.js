import React from "react";
import NotesActionNewPage from "./notes-action-new-page";

export default function NotesInput() {
  return (
    <section className="add-new-page">
      <div className="add-new-page__input">
        <input
          className="add-new-page__input__title"
          placeholder="Catatan rahasia"
        />
        <div
          className="add-new-page__input__body"
          contentEditable="true"
          data-placeholder="Sebenarnya saya adalah..."
        ></div>
      </div>
      <NotesActionNewPage />
    </section>
  );
}
