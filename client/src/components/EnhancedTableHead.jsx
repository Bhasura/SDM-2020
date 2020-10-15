import React from "react";
import PropTypes from "prop-types";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  head: {
    background: "#2D6A4F",
  },
  root: {
    color: "#FFFFFF"
  }
}));

const headCells = [
  {
    id: "title",
    numeric: false,
    disablePadding: false,
    label: "Title",
  },
  { id: "author", numeric: false, disablePadding: false, label: "Author" },
  { id: "year", numeric: false, disablePadding: false, label: "Year" },
  { id: "type", numeric: false, disablePadding: false, label: "Type" },
  { id: "journal", numeric: false, disablePadding: false, label: "Journal" },
  {
    id: "se_practice",
    numeric: false,
    disablePadding: false,
    label: "SE Practice",
  },
  { id: "claims", numeric: false, disablePadding: false, label: "Claims" },
  {
    id: "strength_of_evidence",
    numeric: false,
    disablePadding: false,
    label: "Strength of Evidence",
  },
  {
    id: "research_methodology",
    numeric: false,
    disablePadding: false,
    label: "Research Methodology",
  },
];

export default function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  const row = useStyles();
  
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell className={row.head}
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel className={row.root}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
