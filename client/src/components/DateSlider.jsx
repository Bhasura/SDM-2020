import React, {Component} from "react";
import { Typography, Slider, Paper, Grid, withStyles } from "@material-ui/core";
import DateRadioButtons from "./DateRadioButtons";

const Title = withStyles({
  root : {
    color: "#52B788",
    paddingLeft: 10
  },
})(Typography)

const CustomPaper = withStyles({
  root : {
    backgroundColor: "#D8F3DC",
    width: 800
  },
})(Paper)

const CustomSlider = withStyles({
  root : {
    color: "#52B788",
    width: 200,
    paddingLeft: 10
  },
})(Slider)

const RadioGrid = withStyles({
  root : {
 
  },
})(Grid)

// const ResetButton = withStyles({
//   root: {
//     backgroundColor: "#40916C",
//     color: "white",
//   },
// })(Button);

export default class RangeSlider extends Component {
  constructor() {
    super();
    this.state = {
      value : [2015,2020]
    };
  }

  valuetext = (value) =>{
    return `${value}`;
  }

  handleChange = (event, newValue) => {
    this.setValue(newValue);
    
  };

  setValue = (newValue) => {
    this.setState({value: newValue}, () => {
      this.props.callbackFromParent(this.state.value);
    });
  }

  dateSliderCallback = (dataFromRadioButtons) => {
    let newValue = [];
    if(dataFromRadioButtons === "5") {
      newValue = [2015, 2020];
    } else if(dataFromRadioButtons === "10") {
      newValue = [2010, 2020];
    } else {
      newValue = [2005, 2020];
    }; 
    this.setValue(newValue)
    this.props.callbackFromParent(this.state.value);
  }

  render() {
    return (
      <CustomPaper elevation={7} variant="outlined" >
        <Grid container direction="row">
          <Grid item>
            <Title
              id="range-slider"
              gutterBottom
            >
              Select Date Range
            </Title>
            <CustomSlider
              id="sliderTest"
              value={this.state.value}
              onChange={this.handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={this.valuetext}
              min={1990}
              max={2020}
            />
          </Grid>
          <RadioGrid item >
            <DateRadioButtons radioButtonCallback={this.dateSliderCallback}/>
          </RadioGrid>
          {/* <Grid item >
            <ResetButton>Reset Date</ResetButton>
          </Grid> */}
        </Grid>
      </CustomPaper>
    );
  }
}
