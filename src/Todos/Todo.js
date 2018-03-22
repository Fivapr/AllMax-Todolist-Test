import React, { Component } from "react";
import * as actions from "./Actions";
import { connect } from "react-redux";
import AddTodo from "./AddTodo";

const mapDispatchToProps = dispatch => ({
  deleteTodo: index => {
    dispatch(actions.DELETE_TODO(index));
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

  render() {
    return (
      <div>
        {this.props.todo}
        <span onClick={this.handleDelete}>X</span>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Todo);
