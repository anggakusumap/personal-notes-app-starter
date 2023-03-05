import React from "react";
import PropTypes from "prop-types";

export default function NotesSearchBar({ keyword, keywordChange }) {
  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Cari berdasarkan judul..."
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </section>
  );
}

NotesSearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
