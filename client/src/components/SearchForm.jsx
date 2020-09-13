import React from "react";
import { Component } from "react";
import { TextField, Grid } from "@material-ui/core";
import axios from "axios";
import RecordResults from "../components/RecordResults";

const styles = {
  input: {
    backgroundColor: "white",
  },
};

export default class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      search_description: "",
      amount: 15,
      records: [],
    };
  }

  onTextChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      axios
        .get("/records", {
          params: {
            search_description: this.state.search_description,
          },
        })
        .then((res) => {
          this.setState({ records: res.data });
        })
        .catch((err) => console.log(err));
    });
  };

  render() {
    console.log(this.state.records);
    return (
      <div style={{ padding: 150 }}>
        <Grid container direction="column" spacing={3}>
          <Grid item container>
            <Grid item xs={1} sm={2} />
            <Grid item xs={12} sm={8}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                autoFocus
                id="search_description"
                label="Search Description"
                name="search_description"
                value={this.state.search_description}
                onChange={this.onTextChange}
                InputProps={{ style: styles.input }}
              ></TextField>
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
