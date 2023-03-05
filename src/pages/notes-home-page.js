/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useSearchParams } from "react-router-dom";
import NotesActionHomePage from "../components/notes-action-home-page";
import NotesList from "../components/notes-list";
import NotesListEmpty from "../components/notes-list-empty";
import NotesSearchBar from "../components/notes-search-bar";
import { getActiveNotes } from "../utils/local-data";

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

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
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
    const notesSearchActive = this.state.notes.filter((note) => {
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
        <NotesActionHomePage
          onArchive={this.onArchiveHandler}
          onDelete={this.onDeleteHandler}
        />
      </section>
    );
  }
}

export default NotesHomePageWrapper;
