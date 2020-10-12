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

  const [claim, setClaim] = React.useState(props.available_claims[0]);
  const [inputClaim, setInputClaim] = React.useState(props.selected_claims);

  return (
    <Paper className={classes.PaperBack} elevation={7} variant="outlined">
      <Grid container direction="row">
        <Grid item>
          <Autocomplete
            className={classes.formControl}
            multiple
            id="tags-outlined"
            options={props.available_se_practices}
            getOptionLabel={(option) => option}
            defaultValue={[props.available_se_practices[0]]}
            filterSelectedOptions
            onChange={(event, newSEPractice) => {
              props.handleSelectNameChange(newSEPractice);
              console.log(newSEPractice);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="SE Practices"
                placeholder="Favorites"
              />
            )}
          />
          <Autocomplete
            className={classes.formControl}
            id="combo-box-demo"
            options={props.available_claims}
            style={{ width: 150 }}
            value={claim}
            inputValue={inputClaim}
            onChange={(event, newClaim) => {
              props.handleSelectedClaims(newClaim);
              setClaim(newClaim);
            }}
            onInputChange={(event, newClaimInputValue) => {
              setInputClaim(newClaimInputValue);
            }}
            name="claims"
            renderInput={(params) => (
              <TextField
                {...params}
                label="Claim Benefits"
                variant="outlined"
              />
            )}
          />

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
