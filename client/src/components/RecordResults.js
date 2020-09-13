import React, { Component } from "react";
import PropTypes from "prop-types";
import { GridList, Paper } from "@material-ui/core";

class RecordResults extends Component {
  render() {
    let recordListContent;
    const { records } = this.props;
    if (records) {
      recordListContent = (
        <GridList cols={1}>
          {records.map((rec) => (
            <Paper variant="outlined" elevation={3}>
              title={rec.title}
              author={rec.author}
            </Paper>
          ))}
        </GridList>
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
