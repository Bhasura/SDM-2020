import React from "react";
import {
  Select,
  MenuItem,
  Paper,
  Grid,
  FormControl,
  InputLabel,
  Input,
  Chip,
  //IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
// import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  IfTypography: {
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(6),
    fontSize: 25,
    color: "#52B788",
  },
  GreenSeer: {
    color: "#52B788",
  },
  PlusMinusButton: {
    blockSize: 50,
  },
  PaperBack: {
    backgroundColor: "#D8F3DC",
    width: 600,
  },
}));

const SearchQuery = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.PaperBack} elevation={7} variant="outlined">
      <Grid container direction="row">
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel
              className={classes.GreenSeer}
              id="demo-simple-select-outlined-label"
            >
              SE Practice
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={props.name_of_field || ""}
              onClick={props.handleFieldNameChange}
              label="Name of Field"
              name="name_of_field"
            >
              <MenuItem value={"TDD"}>TDD</MenuItem>
              <MenuItem value={"Agile"}>Agile</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel
              id="demo-mutiple-chip-label"
              className={classes.GreenSeer}
            >
              Claims
            </InputLabel>
            <Select
              labelId="demo-mutiple-chip-label"
              id="demo-mutiple-chip"
              multiple
              value={props.selected_value}
              onChange={props.handleChange}
              name="selected_value"
              input={<Input id="select-multiple-chip" />}
              renderValue={(selected) => (
                <div>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {props.values.map((p, index) => (
                <MenuItem key={index} value={p.value}>
                  {p.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel
              id="demo-mutiple-chip-label"
              className={classes.GreenSeer}
            >
              Methodology
            </InputLabel>
            <Select
              labelId="demo-mutiple-chip-label"
              id="demo-mutiple-chip"
              multiple
              value={props.research_methodology}
              onChange={props.handleChange}
              name="research_methodology"
              input={<Input id="select-multiple-chip" />}
              renderValue={(selected) => (
                <div>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              <MenuItem value={"Case Study"}>Case Study</MenuItem>
              <MenuItem value={"Survey"}>Survey</MenuItem>
            </Select>
          </FormControl>

          {/* <FormControl className={classes.formControl}>
            <InputLabel
              className={classes.GreenSeer}
              id="demo-simple-select-outlined-label"
            >
              Methodology
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={props.research_methodology}
              onClick={props.handleChange}
              label="Research Methodology"
              name="research_methodology"
            >
              <MenuItem value={"Case Study"}>Case Study</MenuItem>
              <MenuItem value={"Survey"}>Survey</MenuItem>
            </Select>
          </FormControl> */}

          {/* <IconButton className={classes.PlusMinusButton} aria-label="add">
            <AddCircleOutlineIcon />
          </IconButton>

          <IconButton className={classes.PlusMinusButton} aria-label="remove">
            <RemoveCircleOutlineIcon />
          </IconButton> */}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SearchQuery;
