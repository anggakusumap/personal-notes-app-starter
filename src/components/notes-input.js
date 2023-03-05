import React from "react";
import NotesActionNewPage from "./notes-action-new-page";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <>
        <form onSubmit={this.onSubmitEventHandler}>
          <div className="add-new-page__input">
            <input
              type="text"
              className="add-new-page__input__title"
              placeholder="Catatan rahasia"
              defaultValue={this.state.title}
              onChange={this.onTitleChangeEventHandler}
            />
            <div
              className="add-new-page__input__body"
              contentEditable="true"
              data-placeholder="Sebenarnya saya adalah..."
              defaultValue={this.state.body}
              onChange={this.onBodyChangeEventHandler}
            ></div>
            <NotesActionNewPage />
          </div>
        </form>
      </>
    );
  }
}
export default NotesInput;
