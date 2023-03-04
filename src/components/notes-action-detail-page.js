import React from "react";
import ButtonArchive from "./button-archive";
import ButtonDelete from "./button-delete";

export default function NotesActionDetailPage() {
  return (
    <div className="detail-page__action">
      <ButtonArchive />
      <ButtonDelete />
    </div>
  );
}
