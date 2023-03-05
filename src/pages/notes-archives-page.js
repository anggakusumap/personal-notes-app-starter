import React from "react";
import { useSearchParams } from "react-router-dom";
import NotesList from "../components/notes-list";
import NotesListEmpty from "../components/notes-list-empty";
import NotesSearchBar from "../components/notes-search-bar";
import { getArchivedNotes } from "../utils/local-data";

function NotesArchivesPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <NotesArchivesPage
      defaultKeyword={keyword}
      keywordChange={changeSearchParams}
    />
  );
}

class NotesArchivesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getArchivedNotes(),
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
    const notesSearchArchives = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <section className="archives-page">
        <h2>Catatan Arsip</h2>
        <NotesSearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        {notesSearchArchives.length !== 0 ? (
          <NotesList notes={notesSearchArchives} />
        ) : (
          <NotesListEmpty />
        )}
      </section>
    );
  }
}

export default NotesArchivesPageWrapper;
