import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import PropTypes from "prop-types";

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

ButtonDelete.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};
