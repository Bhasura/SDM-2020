import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Slider, Paper, Grid, RadioGroup, FormControlLabel, Radio, FormControl } from "@material-ui/core";

export default function DateRadioButtons(props) {
    return(
        <FormControl component="fieldset">
    <RadioGroup aria-label="gender" name="gender1"  >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
    </RadioGroup>
    </FormControl>
    );
}
  