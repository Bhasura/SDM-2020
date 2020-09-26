import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Grid } from "@material-ui/core";

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState("5");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid container direction="row">
      <FormControl>
        <RadioGroup
          row
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="5"
            control={<Radio />}
            label="Last 5 years"
          />
          <FormControlLabel
            value="10"
            control={<Radio />}
            label="Last 10 years"
          />
          <FormControlLabel
            value="15"
            control={<Radio />}
            label="Last 15 years"
          />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
}
