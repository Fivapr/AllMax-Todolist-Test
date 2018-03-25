import React, { Component } from "react";
import * as actions from "./Actions";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import DatePicker from "material-ui/DatePicker";
import TimePicker from "material-ui/TimePicker";
import RaisedButton from "material-ui/RaisedButton";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      urgency: "normal",
      dateUntil: null,
      completed: false,
      dateCompleted: null
    };
  }

  // Если компонент вызван с пропсом туду, то он вызван из существуещего туду и будет менять существующий туду а не добавлять новый
  // Дата в сторе это число (или null), а здесь объект, чтобы его нормально воспринимал датапикер
  componentDidMount() {
    if (this.props.todo) {
      const { dateUntil, dateCompleted } = this.props.todo;
      this.setState({
        ...this.props.todo,
        dateUntil: dateUntil && new Date(dateUntil),
        dateCompleted: dateCompleted && new Date(dateCompleted)
      });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.changeTodo
      ? this.props.changeTodo(this.state)
      : this.props.addTodo(this.state);
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  handleUrgencyChange = (event, index, value) => {
    this.setState({ urgency: value });
  };

  handleDateUntilChange = (e, date) => {
    this.setState({ dateUntil: date });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ margin: 10, width: 400 }}>
        <div style={{ width: 256, margin: "0 auto" }}>
          <TextField
            hintText="todo name"
            value={this.state.name}
            onChange={this.handleNameChange}
            required
          />
          <br />

          <TextField
            hintText="todo description"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
          <br />

          <SelectField
            floatingLabelText="todo urgency"
            value={this.state.urgency}
            onChange={this.handleUrgencyChange}
          >
            <MenuItem value={"normal"} primaryText="normal" />
            <MenuItem value="urgent" primaryText="urgent" />
            <MenuItem value={"most urgent"} primaryText="most urgent" />
          </SelectField>
          <br />

          <DatePicker
            hintText="date to do"
            value={this.state.dateUntil}
            onChange={this.handleDateUntilChange}
          />

          <TimePicker
            format="24hr"
            hintText="hour to do"
            value={this.state.dateUntil}
            onChange={this.handleDateUntilChange}
          />

          <RaisedButton label="Submit" type="submit" fullWidth={true} />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: todo => {
    dispatch(actions.ADD_TODO(todo));
  }
});

export default connect(null, mapDispatchToProps)(AddTodo);
