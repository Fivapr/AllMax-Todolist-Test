import React, { Component } from "react";
import * as actions from "./Actions";
import { connect } from "react-redux";
import AddTodo from "./AddTodo";

const mapDispatchToProps = dispatch => ({
  deleteTodo: index => {
    dispatch(actions.DELETE_TODO(index));
  },
  changeTodo: (todo, index) => {
    dispatch(actions.CHANGE_TODO(todo, index));
  },
  makeCompleted: index => {
    dispatch(actions.MAKE_COMPLETED(index));
  }
});

class Todo extends Component {
  constructor() {
    super();
    this.state = { formVisibility: false };
  }

  handleDelete = () => {
    this.props.deleteTodo(this.props.index);
  };

  handleComplete = () => {
    this.props.makeCompleted(this.props.index);
  };

  toggleChangeFormVisibility = () => {
    this.setState({ formVisibility: !this.state.formVisibility });
  };

  renderChangeForm = () => {
    if (this.state.formVisibility)
      return <AddTodo changeTodo={this.changeTodo} todo={this.props.todo} />;
  };

  changeTodo = todo => {
    this.props.changeTodo(todo, this.props.index);
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

    let fill = dateUntil && dateUntil < new Date() ? "red" : "white";
    fill = completed ? "green" : fill;

    const renderedDate = dateUntil.toString();

    return (
      <li style={{ backgroundColor: fill }}>
        <div>
          {this.renderChangeForm()}
          <span>{name}</span>
          <span onClick={this.handleComplete}>Y</span>
          <span onClick={this.handleDelete}>X</span>
          <span onClick={this.toggleChangeFormVisibility}>C</span>
        </div>
        <div>{description}</div>
        <div>{urgency}</div>
        <div>{renderedDate}</div>
        <div>{completed ? "completed" : "not completed"}</div>
        <div>{dateCompleted}</div>
      </li>
    );
  }
}

export default connect(null, mapDispatchToProps)(Todo);
