import React from "react";
import { IoMdArchive } from "react-icons/io";

export default function ButtonArchive({ id, onArchive }) {
  return (
    <button
      className="action"
      type="button"
      title="Arsipkan"
      onClick={() => onArchive(id)}
    >
      <IoMdArchive />
    </button>
  );
}
