import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotesActionDetailPage from "../components/notes-action-detail-page";
import { showFormattedDate } from "../utils";
import { archiveNote, deleteNote, getNote } from "../utils/local-data";

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
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.props.navigate("/");
  }

  onArchiveHandler(id) {
    archiveNote(id);
    this.props.navigate("/");
  }

  render() {
    console.log("this.props.note :>> ", this.props.note);
    return (
      <section className="detail-page">
        <h3 className="detail-page__title">{this.state.note.title}</h3>
        <p className="detail-page__createdAt">
          {showFormattedDate(this.state.note.createdAt)}
        </p>
        <div className="detail-page__body">{this.state.note.body}</div>
        <NotesActionDetailPage
          id={this.props.note.id}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </section>
    );
  }
}

export default NotesDetailPageWrapper;
