import React, { Component } from "react";
import { connect } from "react-redux";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import Filters from "./Filters";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "normal":
      return todos.filter(todo => {
        return todo.urgency === "normal";
      });
    case "urgent":
      return todos.filter(todo => {
        return todo.urgency === "urgent";
      });
    case "most urgent":
      return todos.filter(todo => {
        return todo.urgency === "most urgent";
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
        <div style={{ margin: "0 auto", width: 400 }}>
          <Filters />
          <AddTodo />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "flex-start"
          }}
        >
          {this.props.todos.map((todo, index) => {
            return <Todo key={index} index={index} todo={todo} />;
          })}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Todos);
