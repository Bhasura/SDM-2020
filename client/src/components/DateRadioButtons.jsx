import React, {Component} from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Grid } from "@material-ui/core";

export default class RadioButtonsGroup extends Component {
  constructor() {
    super();
    this.state = {
      value: "5"
    };
  }

  handleChange = (event, newValue) => {
    this.setValue(newValue);
  };

  setValue = (newValue) => {
    this.setState({value: newValue}, () => {
      this.props.radioButtonCallback(this.state.value);
    }); 
  }

  render() {
    return (
      <Grid container direction="row">
        <FormControl>
          <RadioGroup
            row
            aria-label="gender"
            name="gender1"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="5"
              id="last5Years"
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
  
}
