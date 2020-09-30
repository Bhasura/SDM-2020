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
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder"
  ];

  return (
    <Paper className={classes.PaperBack} elevation={7} variant="outlined">
      <Grid container direction="row">
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel
              className={classes.GreenSeer}
              id="demo-simple-select-outlined-label"
            >
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

{/*           <FormControl className={classes.formControl}>
            <InputLabel
              className={classes.GreenSeer}
              id="demo-simple-select-outlined-label"
            >
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
          </FormControl> */}

          <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-chip-label">Value</InputLabel>
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
                    <Chip key={value} label={value}/>
                  ))}
                </div>
              )}
            >
              {props.values.map((p, index) => (
                <MenuItem
                  key={index}
                  value={p.value}
                >
                  {p.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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
