import React from "react";
import ButtonDelete from "./button-delete";
import ButtonUnarchive from "./button-unarchive";
import PropTypes from "prop-types";

export default function NotesActionArchivePage({ id, onDelete, onUnarchive }) {
  return (
    <div className="detail-page__action">
      <ButtonUnarchive id={id} onUnarchive={onUnarchive} />
      <ButtonDelete id={id} onDelete={onDelete} />
    </div>
  );
}

NotesActionArchivePage.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};
