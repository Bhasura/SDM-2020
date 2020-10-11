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
      values: [],
      available_se_practices: ["ALL", "TDD", "Agile"],
      available_claims: ["ALL"],
      selected_claims: [],
      selected_se_practices: [],
      from_date: 2015,
      to_date: 2020,
      research_methodology: [],
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
          se_practice: this.state.selected_se_practices,
          from_date: this.state.from_date,
          to_date: this.state.to_date,
          claims: this.state.selected_claims,
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
    console.log("before array")
    var array = [];
    if (this.state.selected_se_practices.includes("Agile")) {
        var values = [
          {
            label: "Claim 1",
            value: "Claim 1",
          },
          {
            label: "Claim 2",
            value: "Claim 2",
          },
        ];
        array = array.concat(values);
    }
    if (this.state.selected_se_practices.includes("TDD")) {
      console.log("yes TDD");
      /*       axios
      .get("/record_attributes/tdd_claims")
      .then((res) => {
        this.setState({ values: res.data });
      })
      .catch((err) => console.log(err)); */
        var tdd_values = [
          {
            label: "Improves Code Quality",
            value: "Improves Code Quality",
          },
          {
            label: "Improves Team Confidence",
            value: "Improves Team Confidence",
          },
        ];
        var tdd_values2 = ["Improves Code Quality", "Improves Team Confidence"];
        array = array.concat(tdd_values2);
        console.log(array);
    }
    this.setAvailableClaims(array);
  }

  setAvailableClaims = (array) => {
    this.setState({available_claims : array})
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSelectNameChange = (selected_SE_Practice) => {
    this.clearRecords();
    this.clearFields();
    var joinSEPractices = this.state.selected_se_practices.concat(selected_SE_Practice);
    this.setState({ selected_se_practices: joinSEPractices }, () =>
      this.populateValues()
    );
  };

  handleSelectedClaims = (selected_claim) => {
    var joinClaims = this.state.selected_claims.concat(selected_claim);
    this.setState({ selected_claims: joinClaims });
  }

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
      selected_se_practices: [],
      selected_claims: [],
      research_methodology: [],
    });
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
        <Grid container direction="row" spacing={0}>
          <Grid item container>
            {/* <Grid item xs={1} sm={2} md={1} /> */}
            <Grid item xs={1} sm={2} />
            <Grid item xs={12} sm={8}>
              <form noValidate onSubmit={this.onSubmit}>
                <SearchQuery
                  selected_claims={this.state.selected_claims}
                  selected_se_practices={this.state.selected_se_practices}
                  handleChange={this.handleChange}
                  handleSelectNameChange={this.handleSelectNameChange}
                  handleSelectedClaims={this.handleSelectedClaims}
                  available_se_practices={this.state.available_se_practices}
                  available_claims={this.state.available_claims}
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
          <EnhancedTable rows={this.state.records} />
        )}
      </div>
    );
  }
}
