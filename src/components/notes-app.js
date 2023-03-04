import React from "react";
import { getAllNotes } from "../utils/local-data";
import NotesHeader from "./notes-header";
import NotesMain from "./notes-main";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
      keyword: "",
    };
  }

  render() {
    return (
      <div className="app-container">
        <NotesHeader />
        <NotesMain notes={this.state.notes} />
      </div>
    );
  }
}

export default NotesApp;
