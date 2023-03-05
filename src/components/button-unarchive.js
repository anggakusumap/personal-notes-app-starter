import React from "react";
import { MdUnarchive } from "react-icons/md";

export default function ButtonUnarchive({ id, onUnarchive }) {
  return (
    <button
      className="action"
      type="button"
      title="Arsipkan"
      onClick={() => onUnarchive(id)}
    >
      <MdUnarchive />
    </button>
  );
}
