import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount} from "enzyme";
import SearchForm from '../components/SearchForm';

configure({ adapter: new Adapter() });

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
          value: "TDD"
        }
      };
      const expected = {
        se_practice: "TDD",
        operators: [],
        values: [],
        selected_value: "",
        selected_operator: "",
        name_of_field: "",
        from_date: 2015,
        to_date: 2020,
        claims: "",
        records: null,
        cancelButtonPressed: false,
      };
      wrapper.instance().handleChange(mockEvent);
  
      expect(wrapper.state()).toEqual(expected);
    });
  });