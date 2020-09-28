import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
import DateSlider from "../components/DateSlider";
//import DateRadioButtons from "../components/DateRadioButtons";

configure({ adapter: new Adapter() });

describe("DateSlider", () => {
  it("renders correctly", () => {
    shallow(<DateSlider />);
  });
});
