import React, { Component } from "react";
import * as actions from "./Actions";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  deleteTodo: index => {
    dispatch(actions.DELETE_TODO(index));
  },
  changeTodo: index => {
    dispatch(actions.CHANGE_TODO(index));
  },
  makeCompleted: index => {
    dispatch(actions.MAKE_COMPLETED(index));
  }
});

class Todo extends Component {
  handleDelete = () => {
    this.props.deleteTodo(this.props.index);
  };

  handleComplete = () => {
    this.props.makeCompleted(this.props.index);
  };

  render() {
    const {
      name,
      description,
      urgency,
      dateUntil,
      completed,
      dateCompleted
    } = this.props.todo;

    let fill =
      dateUntil && dateUntil < new Date().toISOString().slice(0, 16)
        ? "red"
        : "white";
    fill = completed ? "green" : fill;

    return (
      <li style={{ backgroundColor: fill }}>
        <div>
          <span>{name}</span>
          <span onClick={this.handleComplete}>Y</span>
          <span onClick={this.handleDelete}>X</span>
        </div>
        <div>{description}</div>
        <div>{urgency}</div>
        <div>{dateUntil}</div>
        <div>{completed ? "completed" : "not completed"}</div>
        <div>{dateCompleted}</div>
      </li>
    );
  }
}

export default connect(null, mapDispatchToProps)(Todo);
