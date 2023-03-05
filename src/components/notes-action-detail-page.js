import React from "react";
import ButtonArchive from "./button-archive";
import ButtonDelete from "./button-delete";

export default function NotesActionDetailPage({ id, onDelete, onArchive }) {
  console.log("onDelete :>> ", onDelete);
  return (
    <div className="detail-page__action">
      <ButtonArchive id={id} onArchive={onArchive} />
      <ButtonDelete id={id} onDelete={onDelete} />
    </div>
  );
}
