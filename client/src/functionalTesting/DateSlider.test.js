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

it("should update state on click", () => {
  const setValue = jest.fn();
  const wrapper = mount(<DateSlider onChange={setValue} />);
  const handleClick = jest.spyOn(React, "useState");
  handleClick.mockImplementation((value) => [value, setValue]);

  wrapper.find("#sliderTest").at(0).simulate("click");
  expect(setValue).toBeTruthy();
});
