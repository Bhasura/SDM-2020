import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Slider, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    height: 70,
    padding: 10,
    backgroundColor: "#D8F3DC",
  },
  GreenSeer: {
    color: "#52B788",
  },
}));

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState([props.from_date, props.to_date]);
  let dates = value;

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dates = newValue;
    props.callbackFromParent(dates);
  };

  return (
    <Paper elevation={7} variant="outlined" className={classes.root}>
      <Typography className={classes.GreenSeer} id="range-slider" gutterBottom>
        Select Date Range
      </Typography>
      <Slider
        className={classes.GreenSeer}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={1990}
        max={2020}
      />
    </Paper>
  );
}
