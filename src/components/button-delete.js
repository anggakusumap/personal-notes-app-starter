import React from "react";
import { MdDeleteOutline } from "react-icons/md";

export default function ButtonDelete({ id, onDelete }) {
  return (
    <button
      className="action"
      type="button"
      title="Hapus"
      onClick={() => onDelete(id)}
    >
      <MdDeleteOutline />
    </button>
  );
}
