import React, { Component } from "react";
import * as actions from "./Actions";
import { connect } from "react-redux";
import AddTodo from "./AddTodo";

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
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  handleDelete = () => {
    this.props.deleteTodo(this.props.index);
  };

  handleComplete = () => {
    this.props.makeCompleted(this.props.index);
  };

  render() {
    let fill =
      this.props.todo.dateUntil < new Date().toISOString().slice(0, 16)
        ? "red"
        : "white";
    console.log(fill);
    fill = this.props.todo.completed ? "green" : fill;
    console.log(fill);

    return (
      <li style={{ backgroundColor: fill }}>
        <div>
          <span>{this.props.todo.name}</span>
          <span onClick={this.handleComplete}>Y</span>
          <span onClick={this.handleDelete}>X</span>
        </div>
        <div>{this.props.todo.description}</div>
        <div>{this.props.todo.urgency}</div>
        <div>{this.props.todo.dateUntil}</div>
        <div>{this.props.todo.completed ? "completed" : "not completed"}</div>
        <div>{this.props.todo.dateCompleted}</div>
      </li>
    );
  }
}

export default connect(null, mapDispatchToProps)(Todo);
