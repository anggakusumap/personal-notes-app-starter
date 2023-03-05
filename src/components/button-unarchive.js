import React from "react";
import { MdUnarchive } from "react-icons/md";
import PropTypes from "prop-types";

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

ButtonUnarchive.propTypes = {
  id: PropTypes.number.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};
