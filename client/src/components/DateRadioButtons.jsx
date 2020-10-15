import React, {Component} from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Grid, withStyles } from "@material-ui/core";

const GreenRadio = withStyles({
  root: {
    color: "#2D6A4F",
    '&$checked': {
      color: "#2D6A4F",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default class RadioButtonsGroup extends Component {
  constructor() {
    super();
    this.state = {
      value: "0"
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
            value="0"
            control={<GreenRadio />}
            label="This Year"
          />
          <FormControlLabel
            value="5"
            id="last5Years"
            control={<GreenRadio />}
            label="Last 5 Years"
          />
          <FormControlLabel
            value="30"
            control={<GreenRadio />}
            label="All Years"
          />
          </RadioGroup>
        </FormControl>
      </Grid>
    );
  }  
}
