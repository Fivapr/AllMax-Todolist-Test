import React, { Component } from "react";
import * as actions from "./Actions";
import { connect } from "react-redux";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: value => {
    dispatch(actions.ADD_TODO(value));
  }
});

export default connect(null, mapDispatchToProps)(AddTodo);
