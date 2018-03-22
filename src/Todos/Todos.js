import React, { Component } from "react";
import { connect } from "react-redux";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

const mapStateToProps = state => ({
  todos: state.todosReducer.todos
});

class Todos extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        {this.props.todos.map((todo, index) => {
          return <Todo key={index} index={index} todo={todo} />;
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Todos);
