import React, { Component } from "react";
import * as actions from "./Actions";
import { connect } from "react-redux";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

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

  handleFilterChange = (event, index, value) => {
    this.setState({ filter: value }, this.props.setFilter(value));
  };

  render() {
    return (
      <div>
        <SelectField
          style={{ margin: 10 }}
          floatingLabelText="filter todos by urgency"
          value={this.state.filter}
          onChange={this.handleFilterChange}
        >
          <MenuItem value={"all"} primaryText="all" />
          <MenuItem value={"normal"} primaryText="normal" />
          <MenuItem value={"urgent"} primaryText="urgent" />
          <MenuItem value={"most urgent"} primaryText="most urgent" />
        </SelectField>
        <br />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Filters);
