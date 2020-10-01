import React from "react";
import { Component } from "react";
import { Grid, Button, withStyles } from "@material-ui/core";
import axios from "axios";
import SearchQuery from "./SearchQuery";
import DateSlider from "./DateSlider";
import EnhancedTable from "./EnhancedTable";

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
      values: [],
      //selected_value: "",
      selected_value: [],
      name_of_field: "",
      from_date: 2015,
      to_date: 2020,
      claims: "",
      research_methodology: "",
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
          research_methodology: this.state.research_methodology,
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
    //not sure if claims is generic across all se_practices?
    if (this.state.name_of_field === "Agile") {
      this.setState({
        values: [
          {
            label: "Claim 1",
            value: "Claim 1",
          },
          {
            label: "Claim 2",
            value: "Claim 2",
          },
        ],
      });
    }
    if (this.state.name_of_field === "TDD") {
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


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFieldNameChange = (e) => {
    this.setState(
      { [e.target.name]: e.target.value },
      () => this.populateValues()
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
    this.clearFields();
  };

  clearRecords = () => {
    return this.setState({ records: [] });
  };

  clearFields = () => {
    return this.setState({
      name_of_field: "",
      claims: "",
      selected_value: [],
      research_methodology: "",
    })
  }

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
                  values={this.state.values}
                  selected_value={this.state.selected_value}
                  name_of_field={this.state.name_of_field}
                  handleChange={this.handleChange}
                  handleFieldNameChange={this.handleFieldNameChange}
                  research_methodology={this.state.research_methodology}
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
                  Reset
                </CancelButton>
              </Grid>
            </Grid>
            <Grid item xs={1} sm={2} />
          </Grid>
        </Grid>

        {this.state.submitButtonPressed && !this.state.cancelButtonPressed && (
          <EnhancedTable rows={this.state.records}/>
        )}
      </div>
    )}
  }
