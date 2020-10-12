import React from "react";
import { Paper, Grid, TextField } from "@material-ui/core";
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
            multiple
            id="tags-outlined"
            options={props.available_claims}
            getOptionLabel={(option) => option}
            defaultValue={[props.available_claims[0]]}
            filterSelectedOptions
            onChange={(event, newSEPractice) => {
              props.handleSelectedClaims(newSEPractice);
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
            multiple
            id="tags-outlined"
            options={props.available_research_methodologys}
            getOptionLabel={(option) => option}
            defaultValue={[props.available_research_methodologys[0]]}
            filterSelectedOptions
            onChange={(event, newSEPractice) => {
              props.handleSelectMethodologyChange(newSEPractice);
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
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SearchQuery;
