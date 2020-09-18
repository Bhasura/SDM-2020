import React from "react";
import {
  Select,
  MenuItem,
  Paper,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  IfTypography:{
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(6),
    fontSize: 25,
  },
  PlusMinusButton:{
    blockSize: 50,
  }
}));

const SearchQuery = (props) => {
  const classes = useStyles();

  return (
    <Paper elevation={7} variant="outlined">
      <Grid container direction="row">
        <Grid item xs={1} sm={2}>
          <Typography className={classes.IfTypography}>IF</Typography>
        </Grid>
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Name of Field
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={props.name_of_field || ""}
              onClick={props.handleFieldNameChange}
              label="Name of Field"
              name="name_of_field"
            >
              <MenuItem value={"SE Practice"}>SE Practice</MenuItem>
              <MenuItem value={"TDD Claims"}>TDD Claims</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Operator
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={props.selected_operator}
              onChange={props.handleChange}
              label="Operator"
              name="selected_operator"
            >
              {props.operators.map((p, index) => {
                return (
                  <MenuItem key={index} value={p.value}>
                    {p.label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Value
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={props.selected_value}
              onChange={props.handleChange}
              label="Value"
              name="selected_value"
            >
              {props.values.map((p, index) => {
                return (
                  <MenuItem key={index} value={p.value}>
                    {p.label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <IconButton className={classes.PlusMinusButton} aria-label="add">
            <AddCircleOutlineIcon />
          </IconButton>

          <IconButton className={classes.PlusMinusButton} aria-label="remove">
            <RemoveCircleOutlineIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SearchQuery;
