import React from "react";
import NotesActionNewPage from "./notes-action-new-page";
import PropTypes from "prop-types";

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
    const inputBody = event.currentTarget.textContent;
    this.setState(() => {
      return {
        body: inputBody,
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
              value={this.state.title}
              onChange={this.onTitleChangeEventHandler}
            />
            <div
              className="add-new-page__input__body"
              contentEditable="true"
              data-placeholder="Sebenarnya saya adalah..."
              value={this.state.body}
              onInput={this.onBodyChangeEventHandler}
            ></div>
            <NotesActionNewPage />
          </div>
        </form>
      </>
    );
  }
}

NotesInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NotesInput;
