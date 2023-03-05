import React from "react";
import ButtonDelete from "./button-delete";
import ButtonUnarchive from "./button-unarchive";

export default function NotesActionArchivePage({ id, onDelete, onUnarchive }) {
  return (
    <div className="detail-page__action">
      <ButtonUnarchive id={id} onUnarchive={onUnarchive} />
      <ButtonDelete id={id} onDelete={onDelete} />
    </div>
  );
}
