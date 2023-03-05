/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useSearchParams } from "react-router-dom";
import NotesActionHomePage from "../components/notes-action-home-page";
import NotesList from "../components/notes-list";
import NotesListEmpty from "../components/notes-list-empty";
import NotesSearchBar from "../components/notes-search-bar";
import {
  archiveNote,
  deleteNote,
  getActiveNotes,
  getAllNotes,
} from "../utils/local-data";

function NotesHomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <NotesHomePage
      defaultKeyword={keyword}
      keywordChange={changeSearchParams}
    />
  );
}

class NotesHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  }

  onArchiveHandler(id) {
    archiveNote(id);
    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notesActive = getActiveNotes();
    const notesSearchActive = notesActive.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <section className="homepage">
        <h2>Catatan Aktif</h2>

        <NotesSearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        {this.state.notes.length !== 0 ? (
          <NotesList notes={notesSearchActive} />
        ) : (
          <NotesListEmpty />
        )}
        <NotesActionHomePage />
      </section>
    );
  }
}

export default NotesHomePageWrapper;
