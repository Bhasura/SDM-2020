import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
import SearchForm from "../components/SearchForm";
import axios from "axios";

configure({ adapter: new Adapter() });
jest.mock("axios");

const resp = {
  data: [
    {
      claims: ["Improves Code Quality"],
      _id: "5f5af358e784114c07c52656",
      type: "article",
      author: "Aniche, M F",
      title:
        "Most common mistakes in test-driven development practice: Results from an online survey with developers",
      journal: "ieeexplore.ieee.org",
      year: 2010,
      se_practice: "TDD",
      strength_of_evidence: ["Strongly Supports"],
      doi: "10.1109/ICSTW.2010.16",
    },
    {
      claims: ["Improves Code Quality", "Improves Team Confidence"],
      _id: "5f5c46d053eac249873d1e9f",
      type: "proceedings",
      author: "Vu",
      title:
        "Evaluating Test-Driven Development in an Industry-Sponsored Capstone Project",
      journal: "IEEE",
      year: 2009,
      se_practice: "TDD",
      strength_of_evidence: ["Moderately Opposes", "Strongly Opposes"],
      doi: "10.1109/ITNG.2009.11",
    },
  ],
};

let wrapper;
let mockSubmit;

beforeEach(() => {
  mockSubmit = jest.fn();
  wrapper = shallow(<SearchForm submit={mockSubmit} />);
});

describe("handleChange", () => {
  it("should call setState on se_practice", () => {
    const mockEvent = {
      target: {
        name: "se_practice",
        value: "TDD",
      },
    };
    const expected = {
      se_practice: "TDD",
      values: [],
      selected_value: [],
      name_of_field: "",
      from_date: 2015,
      to_date: 2020,
      claims: "",
      records: [],
      cancelButtonPressed: false,
      submitButtonPressed: false,
    };
    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state()).toEqual(expected);
  });
});

describe("onSubmit", () => {
  it("should get records on submit", () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(resp));
    wrapper
      .instance()
      .fillRecords()
      .then((resp) => {
        expect(wrapper.state("records")).toEqual(resp.data);
      });
  });

  it("should set submitButtonPressed state to true", () => {
    wrapper.instance().submitButtonPress();
    expect(wrapper.state("submitButtonPressed")).toEqual(true);
  });

  it("should set cancelButtonPressed state to false", () => {
    wrapper.instance().submitButtonPress();
    expect(wrapper.state("cancelButtonPressed")).toEqual(false);
  });
});

describe("onCancel", () => {
  it("should clear records on cancel", () => {
    wrapper.setState({ records: resp.data });
    wrapper.instance().clearRecords();
    expect(wrapper.state("records")).toEqual([]);
  });

  it("should set submitButtonPressed state to false", () => {
    wrapper.instance().cancelButtonPress();
    expect(wrapper.state("submitButtonPressed")).toEqual(false);
  });

  it("should set cancelButtonPressed state to true", () => {
    wrapper.instance().cancelButtonPress();
    expect(wrapper.state("cancelButtonPressed")).toEqual(true);
  });

  it("should clear fields on cancel", () => {
    const expected = {
      se_practice: "",
      values: [],
      selected_value: [],
      name_of_field: "",
      from_date: 2015,
      to_date: 2020,
      claims: "",
      records: [],
      cancelButtonPressed: true,
      submitButtonPressed: false,
    };
    wrapper.instance().cancelButtonPress();
    expect(wrapper.state()).toEqual(expected);
  });
});
