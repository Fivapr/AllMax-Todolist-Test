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

    const renderedDate = () => {
      console.log(dateUntil);
      return dateUntil && <p>Up to: {dateUntil.toString().slice(0, 16)}</p>;
    };

    const renderedCompletedDate = () => {
      return (
        completed && <p>Completed: {dateCompleted.toString().slice(0, 16)}</p>
      );
    };

    return (
      <Card style={{ backgroundColor: fill, margin: 10, width: 400 }}>
        <CardHeader
          title={name}
          subtitle={urgency}
          actAsExpander={true}
          showExpandableButton={true}
        />

        <CardActions>
          <FlatButton
            onClick={this.toggleChangeFormVisibility}
            label="Change"
          />
          <FlatButton onClick={this.handleComplete} label="Complete" />
          <FlatButton onClick={this.handleDelete} label="Delete" />
        </CardActions>

        <CardText expandable={true}>
          Description: {description}
          {renderedDate()}
          {renderedCompletedDate()}
        </CardText>

        {this.renderChangeForm()}
      </Card>
    );
  }
}

export default connect(null, mapDispatchToProps)(Todo);
