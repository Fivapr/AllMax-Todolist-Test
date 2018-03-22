import React, { Component } from "react";
import { connect } from "react-redux";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import Filters from "./Filters";

const getVisibleTodos = (todos, filter) => {
  console.log(todos, filter);
  switch (filter) {
    case "normal":
      return todos.filter(todo => {
        return todo.urgency == "normal";
      });
    case "urgent":
      return todos.filter(todo => {
        return todo.urgency == "urgent";
      });
    case "most urgent":
      return todos.filter(todo => {
        return todo.urgency == "most urgent";
      });
    case "all":
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todosReducer.todos, state.todosReducer.filter)
});

class Todos extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <Filters />
        {this.props.todos.map((todo, index) => {
          return <Todo key={index} index={index} todo={todo} />;
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Todos);
