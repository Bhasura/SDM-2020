import React from "react";
import { Component } from "react";
import { Grid, Button, withStyles } from "@material-ui/core";
import axios from "axios";
import RecordResults from "../components/RecordResults";
import SearchQuery from "./SearchQuery";
import DateSlider from "./DateSlider";
//import DateRadioButtons from "./DateRadioButtons";

const SearchButton = withStyles({
  root: {
    backgroundColor: "#2D6A4F",
    color: "white",
  },
})(Button);
const CancelButton = withStyles({
  root: {
    backgroundColor: "#40916C",
    color: "white",
  },
})(Button);

export default class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      se_practice: "",
      operators: [],
      values: [],
      selected_value: "",
      selected_operator: "",
      name_of_field: "",
      from_date: 2015,
      to_date: 2020,
      claims: "",
      records: [],
      cancelButtonPressed: false,
      submitButtonPressed: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.handleChange(e);
    this.fillRecords();
    this.submitButtonPress();
  };

  submitButtonPress = () => {
    this.setState({
      submitButtonPressed: true,
      cancelButtonPressed: false,
    });
  };

  fillRecords = () => {
    return axios
      .get("/records", {
        params: {
          se_practice: this.state.selected_value,
          from_date: this.state.from_date,
          to_date: this.state.to_date,
          claims: this.state.selected_value,
          selected_operator: this.state.selected_operator,
        },
      })
      .then((res) => {
        this.setState({
          records: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  populateValues() {
    if (this.state.name_of_field === "SE Practice") {
      this.setState({
        values: [
          {
            label: "TDD",
            value: "TDD",
          },
          {
            label: "Agile",
            value: "Agile",
          },
        ],
      });
    }
    if (this.state.name_of_field === "TDD Claims") {
      /*       axios
      .get("/record_attributes/tdd_claims")
      .then((res) => {
        this.setState({ values: res.data });
      })
      .catch((err) => console.log(err)); */
      this.setState({
        values: [
          {
            label: "Improves Code Quality",
            value: "Improves Code Quality",
          },
          {
            label: "Improves Team Confidence",
            value: "Improves Team Confidence",
          },
        ],
      });
    }
  }

  populateOperator() {
    if (
      this.state.name_of_field === "SE Practice" ||
      this.state.name_of_field === "TDD Claims"
    ) {
      this.setState({
        operators: [
          {
            label: "Is Equal To",
            value: "Is Equal To",
          },
        ],
      });
      this.populateValues();
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFieldNameChange = (e) => {
    this.setState(
      { [e.target.name]: e.target.value },
      () => this.populateOperator()
      //this.populateValues(),
    );
  };

  myCallback = (datafromDateSlider) => {
    this.setState({ from_date: datafromDateSlider[0] }, () => {
      console.log(datafromDateSlider[0]);
    });
    this.setState({ to_date: datafromDateSlider[1] });
  };

  onCancel = (e) => {
    this.clearRecords();
    this.cancelButtonPress();
  };

  clearRecords = () => {
    return this.setState({ records: [] });
  };

  cancelButtonPress = () => {
    this.setState({
      cancelButtonPressed: true,
      submitButtonPressed: false,
    });
  };

  render() {
    return (
      <div style={{ padding: 100 }}>
        <Grid container direction="column" spacing={3}>
          <Grid item container>
            <Grid item xs={1} sm={2} md={1} />
            <Grid item xs={1} sm={2} />
            <Grid item xs={12} sm={8}>
              <form noValidate onSubmit={this.onSubmit}>
                <SearchQuery
                  operators={this.state.operators}
                  values={this.state.values}
                  selected_value={this.state.selected_value}
                  selected_operator={this.state.selected_operator}
                  name_of_field={this.state.name_of_field}
                  handleChange={this.handleChange}
                  handleFieldNameChange={this.handleFieldNameChange}
                />
                <DateSlider
                  callbackFromParent={this.myCallback}
                  from_date={this.state.from_date}
                  to_date={this.state.to_date}
                />
                <Grid item xs={1} sm={2} md={5} />
                <SearchButton type="submit" variant="contained">
                  Search
                </SearchButton>
              </form>
              <Grid item>
                <CancelButton
                  data-testid="testID1"
                  type="cancel"
                  variant="contained"
                  onClick={this.onCancel}
                  className="cancel_button"
                >
                  Cancel
                </CancelButton>
              </Grid>
            </Grid>
            <Grid item xs={1} sm={2} />
          </Grid>
        </Grid>

        {this.state.submitButtonPressed && !this.state.cancelButtonPressed && (
          <RecordResults records={this.state.records} />
        )}
      </div>
    );
  }
}
