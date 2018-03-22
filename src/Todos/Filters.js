import React, { Component } from "react";
import * as actions from "./Actions";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  setFilter: filter => {
    dispatch(actions.SET_FILTER(filter));
  }
});

class Filters extends Component {
  constructor() {
    super();
    this.state = { filter: "all" };
  }

  handleFilterChange = e => {
    this.setState(
      { filter: e.target.value },
      this.props.setFilter(e.target.value)
    );
  };

  render() {
    return (
      <select value={this.state.filter} onChange={this.handleFilterChange}>
        <option>all</option>
        <option>normal</option>
        <option>urgent</option>
        <option>most urgent</option>
      </select>
    );
  }
}

export default connect(null, mapDispatchToProps)(Filters);
