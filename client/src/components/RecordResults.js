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
                </TableRow>
              </TableHead>
              <TableBody>
                {records.map((p, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell align="right">{p.title}</TableCell>
                      <TableCell align="right">{p.author}</TableCell>
                      <TableCell align="right">{p.year}</TableCell>
                      <TableCell align="right">{p.type}</TableCell>
                      <TableCell align="right">{p.journal}</TableCell>
                      <TableCell align="right">{p.se_practice}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          )
        </Grid>
      );
    } else {
      recordListContent = null;
    }
    return <div>{recordListContent}</div>;
  }
}
RecordResults.propTypes = {
  records: PropTypes.array.isRequired,
};
export default RecordResults;
