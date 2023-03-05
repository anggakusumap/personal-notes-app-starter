import React from "react";
import { IoMdArchive } from "react-icons/io";
import PropTypes from "prop-types";

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

ButtonArchive.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
};
