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
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";

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

  const SE_Practices = ["ALL", "TDD", "Agile"];
  const [value, setValue] = React.useState(SE_Practices[0]);
  const [inputValue, setInputValue] = React.useState("");
  return (
    <Paper className={classes.PaperBack} elevation={7} variant="outlined">
      <Grid container direction="row">
        <Grid item>
          <Autocomplete
            className={classes.formControl}
            id="combo-box-demo"
            options={SE_Practices}
            style={{ width: 150 }}
            value={value}
            inputValue={inputValue}
            onChange={(event, newValue) => {
              props.handleSelectNameChange(newValue);
              setValue(newValue);
            }}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            name="name_of_field"
            renderInput={(params) => (
              <TextField {...params} label="SE Practice" variant="outlined" />
            )}
          />

          <Autocomplete
            className={classes.formControl}
            id="combo-box-demo"
            options={props.available_claims}
            style={{ width: 150 }}
            value={value}
            inputValue={inputValue}
            onChange={(event, newValue) => {
              props.handleSelectedClaims(newValue);
              setValue(newValue);
            }}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            name="claims"
            renderInput={(params) => (
              <TextField {...params} label="Claims" variant="outlined" />
            )}
          />

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
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SearchQuery;
