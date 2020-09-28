import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

class RecordResults extends Component {
  render() {
    let recordListContent;
    const { records } = this.props;
    console.log(records);
    if (records) {
      recordListContent = (
        <Grid container direction="column" spacing={3}>
          <TableContainer component={Paper}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Title</TableCell>
                  <TableCell align="left">Author</TableCell>
                  <TableCell align="left">Year</TableCell>
                  <TableCell align="left">Type</TableCell>
                  <TableCell align="left">Journal</TableCell>
                  <TableCell align="left">SE Practice</TableCell>
                  <TableCell align="left">Claims</TableCell>
                  <TableCell align="left">Strength of Evidence</TableCell>
                  <TableCell align="left">DOI</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {records.map((p, index) => {
                  var url = "http://doi.org/" + p.doi;

                  var claims = "";
                  var strength = "";

                  for (var i = 0; i < p.claims.length; i++) {
                    if (i === p.claims.length - 1) {
                      claims += p.claims[i];
                      strength += p.strength_of_evidence[i];
                    } else {
                      claims += p.claims[i] + ", ";
                      strength += p.strength_of_evidence[i] + ", ";
                    }
                  }

                  return (
                    <TableRow key={index}>
                      <TableCell align="left">{p.title}</TableCell>
                      <TableCell align="left">{p.author}</TableCell>
                      <TableCell align="left">{p.year}</TableCell>
                      <TableCell align="left">{p.type}</TableCell>
                      <TableCell align="left">{p.journal}</TableCell>
                      <TableCell align="left">{p.se_practice}</TableCell>
                      <TableCell align="left">{claims}</TableCell>
                      <TableCell align="left">{strength}</TableCell>
                      <TableCell align="left">
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          {p.doi}
                        </a>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      );
    } else {
      recordListContent = null;
    }
    console.log(recordListContent);
    return <div>{recordListContent}</div>;
  }
}
RecordResults.propTypes = {
  records: PropTypes.array.isRequired,
};
export default RecordResults;
