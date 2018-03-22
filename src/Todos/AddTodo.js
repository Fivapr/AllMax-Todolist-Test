import React, { Component } from "react";
import * as actions from "./Actions";
import { connect } from "react-redux";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      urgency: "normal",
      dateUntil: "",
      completed: false,
      dateCompleted: null
    };
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  handleUrgencyChange = e => {
    this.setState({ urgency: e.target.value });
  };

  handleDateUntilChange = e => {
    this.setState({ dateUntil: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.name}
          onChange={this.handleNameChange}
          placeholder="todo name"
        />

        <input
          value={this.state.description}
          onChange={this.handleDescriptionChange}
          placeholder="todo description"
        />

        <select
          value={this.state.urgency}
          onChange={this.handleUrgencyChange}
          name="todo urgency"
        >
          <option>normal</option>
          <option>urgent</option>
          <option>most urgent</option>
        </select>

        <input
          value={this.state.DateUntil}
          onChange={this.handleDateUntilChange}
          type="datetime-local"
          name="dateUntil"
        />

        <input type="submit" value="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: todo => {
    dispatch(actions.ADD_TODO(todo));
  }
});

export default connect(null, mapDispatchToProps)(AddTodo);
