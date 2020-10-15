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
    float: "right",
    "&:hover" : {
      backgroundColor: "#4AD293",
    },
    marginBottom: 50,
  },
})(Button);

const CancelButton = withStyles({
  root: {
    backgroundColor: "#40916C",
    color: "white",
    float: "left",
    "&:hover" : {
      backgroundColor: "#4AD293",
    },
    marginBottom: 50,
  },
})(Button);

export default class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      values: [],
      available_se_practices: ["ALL", "TDD", "Agile"],
      available_claims: [
        "ALL",
        "Agile-Increases Productivity",
        "TDD-Improves Code Quality",
        "TDD-Improves Team Confidence",
      ],
      selected_claims: [],
      selected_se_practices: [],
      from_date: 2015,
      to_date: 2020,
      available_research_methodologys: ["ALL", "Case Study", "Survey"],
      selected_research_methodology: [],
      records: [],
      cancelButtonPressed: false,
      submitButtonPressed: false,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
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
          research_methodology: this.state.selected_research_methodology,
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
    var array = [];
    if (this.state.selected_se_practices.includes("ALL")) {
      var values = [
        "ALL",
        "Agile-Increases Productivity",
        "TDD-Improves Code Quality",
        "TDD-Improves Team Confidence",
      ];
      array = array.concat(values);
    }
    if (this.state.selected_se_practices.includes("Agile")) {
      var tdd_values1 = ["ALL", "Agile-Increases Productivity"];
      array = array.concat(tdd_values1);
    }
    if (this.state.selected_se_practices.includes("TDD")) {
      var tdd_values2 = [
        "ALL",
        "TDD-Improves Code Quality",
        "TDD-Improves Team Confidence",
      ];
      array = array.concat(tdd_values2);
    }
    var uniqueSet = new Set(array);
    array = [...uniqueSet];
    this.setAvailableClaims(array);
  }

  setAvailableClaims = (array) => {
    this.setState({ available_claims: array });
  };

  handleSelectMethodologyChange = (selected_methodology) => {
    if (selected_methodology.includes("ALL") && selected_methodology.length !== 1) {
      selected_methodology.shift();
    }
    this.setState({ selected_research_methodology: selected_methodology });
  };

  handleSelectNameChange = (selected_SE_Practice) => {
    if (selected_SE_Practice.includes("ALL") && selected_SE_Practice.length !== 1) {
      selected_SE_Practice.shift();
    }
    this.setState({ selected_se_practices: selected_SE_Practice }, () =>
      this.populateValues()
    );
  };

  handleSelectedClaims = (selected_claim) => {
    console.log(selected_claim);
    if (selected_claim.includes("ALL") && selected_claim.length !== 1) {
      selected_claim.shift();
    }
    this.setState({ selected_claims: selected_claim });
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
      <div style={{ paddingTop: 50, paddingLeft: 100, paddingRight: 100, paddingBottom: 50}}>
        <Grid container direction="row" spacing={0} justify={"center"}>
          <Grid item >
            {/* <Grid item xs={1} sm={2} md={1} /> */}
            {/* <Grid item xs={1} sm={2} /> */}
            {/* <Grid item xs={12} sm={8}> */}
              <form noValidate onSubmit={this.onSubmit} >
                  <SearchQuery
                    handleSelectNameChange={this.handleSelectNameChange}
                    handleSelectedClaims={this.handleSelectedClaims}
                    handleSelectMethodologyChange={
                      this.handleSelectMethodologyChange
                    }
                    available_se_practices={this.state.available_se_practices}
                    available_claims={this.state.available_claims}
                    available_research_methodologys={
                      this.state.available_research_methodologys
                    }
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
