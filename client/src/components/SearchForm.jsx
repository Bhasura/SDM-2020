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
      se_practice: "",
      from_date: "",
      to_date: "",
      amount: 15,
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

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  myCallback = (datafromDateSlider) => {
    this.setState({from_date:datafromDateSlider[0]});
    this.setState({to_date:datafromDateSlider[1]});
  }

  render() {
    console.log(this.state.records);
    return (
      <div style={{ padding: 150 }}>
        <Grid container direction="column" spacing={3}>
          <Grid item container>
            <Grid item xs={1} sm={2} />
            <Grid item xs={12} sm={8}>
              <form noValidate onSubmit={this.onSubmit}>
                <DateSlider
                  callbackFromParent={this.myCallback}
                />
                <SearchQuery
                  se_practice={this.state.se_practice}
                  handleChange={this.handleChange}
                />
                <Grid item xs={1} sm={2} md={5} />
                <Button type="submit" variant="contained" color="primary">
                  Search
                </Button>
                <Button type="cancel" variant="contained" color="primary">
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
