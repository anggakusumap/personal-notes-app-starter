import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotesActionArchivePage from "../components/notes-action-archive-page";
import NotesActionDetailPage from "../components/notes-action-detail-page";
import { showFormattedDate } from "../utils";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/local-data";
import PropTypes from "prop-types";

function NotesDetailPageWrapper() {
  const { id } = useParams();
  const note = getNote(id);
  const navigate = useNavigate();

  return <NotesDetailPage note={note} navigate={navigate} />;
}

class NotesDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: props.note,
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.props.navigate("/");
  }

  onArchiveHandler(id) {
    archiveNote(id);
    this.props.navigate("/");
  }

  onUnarchiveHandler(id) {
    unarchiveNote(id);
    this.props.navigate("/");
  }

  render() {
    return (
      <section className="detail-page">
        <h3 className="detail-page__title">{this.state.note.title}</h3>
        <p className="detail-page__createdAt">
          {showFormattedDate(this.state.note.createdAt)}
        </p>
        <div className="detail-page__body">{this.state.note.body}</div>
        {this.state.note.archived === true && (
          <NotesActionArchivePage
            id={this.props.note.id}
            onDelete={this.onDeleteHandler}
            onUnarchive={this.onUnarchiveHandler}
          />
        )}
        {this.state.note.archived === false && (
          <NotesActionDetailPage
            id={this.props.note.id}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        )}
      </section>
    );
  }
}

NotesDetailPage.propTypes = {
  note: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default NotesDetailPageWrapper;
