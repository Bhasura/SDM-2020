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
                  <TableCell>Title</TableCell>
                  <TableCell align="right">Author</TableCell>
                  <TableCell align="right">Year</TableCell>
                  <TableCell align="right">Type</TableCell>
                  <TableCell align="right">Journal</TableCell>
                  <TableCell align="right">SE Practice</TableCell>
                  <TableCell align="right">Claims</TableCell>
                  <TableCell align="right">DOI</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {records.map((p, index) => {

                  var url = 'http://doi.org/' + p.doi;
                  var claims = "";
                  for (var i = 0; i < p.claims.length; i++) {
                    if (i === p.claims.length - 1) {
                      claims += p.claims[i];
                    }
                    else {
                      claims += p.claims[i] + ", ";
                    }
                  }

                  return (
                    <TableRow key={index}>
                  <TableCell align="right">{p.title}</TableCell>
                  <TableCell align="right">{p.author}</TableCell>
                  <TableCell align="right">{p.year}</TableCell>
                  <TableCell align="right">{p.type}</TableCell>
                  <TableCell align="right">{p.journal}</TableCell>
                  <TableCell align="right">{p.se_practice}</TableCell>
                  <TableCell align="right">{claims}</TableCell>
                  <TableCell align="right"><a href={url} target="_blank" rel="noopener noreferrer">{p.doi}</a></TableCell>
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
