import React, { Component } from "react";
import * as actions from "./Actions";
import { connect } from "react-redux";
import AddTodo from "./AddTodo";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

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

  //сделал так, что работает только в одну сторону, хотя наверное стоило тогглом
  handleComplete = () => {
    this.props.makeCompleted(this.props.index);
  };

  toggleChangeMenu = () => {
    this.setState({ formVisibility: !this.state.formVisibility });
  };

  changeTodo = todo => {
    this.props.changeTodo(todo, this.props.index);
    this.toggleChangeMenu();
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

    // туду просрочен = red, выполнен = green
    let fill = dateUntil && new Date(dateUntil) < new Date() ? "red" : "white";
    fill = completed ? "green" : fill;

    const renderChangeForm = () => {
      if (this.state.formVisibility)
        return <AddTodo changeTodo={this.changeTodo} todo={this.props.todo} />;
    };

    const renderTodoCard = () => {
      return (
        <Card style={{ backgroundColor: fill, margin: 10, width: 400 }}>
          <CardHeader
            title={name}
            subtitle={urgency}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions>
            <FlatButton onClick={this.toggleChangeMenu} label="Change" />
            <FlatButton onClick={this.handleComplete} label="Complete" />
            <FlatButton onClick={this.handleDelete} label="Delete" />
          </CardActions>
          //dateUntil and dateCompleted are put in state as numbers
          <CardText expandable={true}>
            <p>Description: {description}</p>
            {dateUntil && (
              <p>Up to: {new Date(dateUntil).toString().slice(0, 16)}</p>
            )}
            {completed && (
              <p>
                Completed: {new Date(dateCompleted).toString().slice(0, 16)}
              </p>
            )}
          </CardText>
        </Card>
      );
    };

    //change mode on/off
    return this.state.formVisibility ? renderChangeForm() : renderTodoCard();
  }
}

export default connect(null, mapDispatchToProps)(Todo);
