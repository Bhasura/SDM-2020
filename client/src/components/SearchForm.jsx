import React from "react";
import { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import axios from "axios";
import RecordResults from "../components/RecordResults";
import SearchQuery from "./SearchQuery";
import DateSlider from "./DateSlider";

export default class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      se_practice: '',
      operators: [],
      selected_operator: '',
      name_of_field: '',
      from_date: 2015,
      to_date: 2020,
      records: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value }, () => {
      axios
        .get("/records", {
          params: {
            se_practice: this.state.se_practice,
            from_date: this.state.from_date,
            to_date: this.state.to_date
          },
        })
        .then((res) => {
          this.setState({ records: res.data });
        })
        .catch((err) => console.log(err));
    });
  };

  populateOperator() {
    if(this.state.name_of_field === "SE Practice") {
      this.setState({operators:[
        {
          label: "Is Equal To",
          value: "Is Equal To"
        },
        {
          label: "Is Not Equal To",
          value: "Is Not Equal To"
        }]})
      console.log("working");
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFieldNameChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () =>
      this.populateOperator(),
    );
  }

  myCallback = (datafromDateSlider) => {
    this.setState({from_date:datafromDateSlider[0]});
    this.setState({to_date:datafromDateSlider[1]});
  }

  onCancel = (e) => {
    this.setState({se_practice:""});
    this.setState({from_date:2015});
    this.setState({to_date:2020});
  }

  render() {
    return (
      <div style={{ padding: 150 }}>
        <Grid container direction="column" spacing={3}>
          <Grid item container>
            <Grid item xs={1} sm={2} />
            <Grid item xs={12} sm={8}>
              <form noValidate onSubmit={this.onSubmit}>
                <DateSlider
                  callbackFromParent={this.myCallback}
                  from_date={this.state.from_date}
                  to_date={this.state.to_date}
                />
                <SearchQuery
                  se_practice={this.state.se_practice}
                  operators={this.state.operators}
                  name_of_field={this.state.name_of_field}
                  handleChange={this.handleChange}
                  handleFieldNameChange={this.handleFieldNameChange}
                />
                <Grid item xs={1} sm={2} md={5} />
                <Button type="submit" variant="contained" color="primary">
                  Search
                </Button>
                <Button type="cancel" variant="contained" color="primary" onClick={this.onCancel}>
                  Cancel
                </Button>
              </form>
            </Grid>
            <Grid item xs={1} sm={2} />
          </Grid>
        </Grid>

        {this.state.records.length > 0 ? (
          <RecordResults records={this.state.records} />
        ) : null}
      </div>
    );
  }
}
