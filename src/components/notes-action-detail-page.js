import React from "react";
import ButtonArchive from "./button-archive";
import ButtonDelete from "./button-delete";
import PropTypes from "prop-types";

export default function NotesActionDetailPage({ id, onDelete, onArchive }) {
  return (
    <div className="detail-page__action">
      <ButtonArchive id={id} onArchive={onArchive} />
      <ButtonDelete id={id} onDelete={onDelete} />
    </div>
  );
}

NotesActionDetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};
