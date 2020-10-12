import React, {Component} from "react";
import { Typography, Slider, Paper, Grid, withStyles, Container } from "@material-ui/core";
import DateRadioButtons from "./DateRadioButtons";

const Title = withStyles({
  root : {
    color: "#52B788",
    marginTop: 5
  },
})(Typography)

const CustomPaper = withStyles({
  root : {
    backgroundColor: "#D8F3DC",
    //width: 800
    width: 700,
    marginBottom: 10
  },
})(Paper)

const CustomSlider = withStyles({
  root : {
    color: "#52B788",
    width: 200,
    marginTop: 28
  }
})(Slider)

const RadioGrid = withStyles({
  root : {
    // paddingLeft: 50,
    // paddingTop: 10
  },
})(Grid)

// const ResetButton = withStyles({
//   root: {
//     backgroundColor: "#40916C",
//     color: "white",
//   },
// })(Button);

const DateWrapper = withStyles({
  root : {
    maxWidth: 700, 
    padding: 0,
    marginLeft: 10
  }
})(Container)

const RadioButtonWrapper = withStyles({
  root : {
    marginLeft: 30,
    marginTop: 30,
    color: "#52B788"
  }
})(Container)

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
    if(dataFromRadioButtons === "0") {
      newValue = [2020, 2020];
    } else if(dataFromRadioButtons === "5") {
      newValue = [2015, 2020];
    } else {
      newValue = [1990, 2020];
    }; 
    this.setValue(newValue)
    this.props.callbackFromParent(this.state.value);
  }

  render() {

    return (
      <CustomPaper elevation={7} variant="outlined" >
        <Grid container direction="row">
          <Grid item>
            <DateWrapper>
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
                valueLabelDisplay="on"
                aria-labelledby="range-slider"
                getAriaValueText={this.valuetext}
                min={1990}
                max={2020}
              />
            </DateWrapper>
          </Grid>
          <RadioGrid item >         
            <RadioButtonWrapper>
              <DateRadioButtons radioButtonCallback={this.dateSliderCallback}/>
            </RadioButtonWrapper>
          </RadioGrid>
          {/* <Grid item >
            <ResetButton>Reset Date</ResetButton>
          </Grid> */}
        </Grid>
      </CustomPaper>
    );
  }
}
