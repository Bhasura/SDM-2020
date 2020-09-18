import SearchQuery from "../components/SearchQuery";
import SearchForm from "../components/SearchForm";
import { shallow, mount } from "enzyme";
import React from "react";
import { render, cleanup, fireEvent, wait } from "@testing-library/react";

afterEach(cleanup);

it("cancelling search query will reset value dropdown with empty string", () => {
  let wrapper;
  wrapper = mount(<SearchForm />);
  const { getByText, getByTestId } = render(<SearchForm />);
  const add = getByTestId(`testID1`);

  wrapper.setProps({ values: [] });
  setTimeout(() => {
    fireEvent.click(add);
    wrapper.update();
    expect(wrapper.state().values).toEqual([
      {
        label: "",
        value: "",
      },
    ]);
  }, 5000);
});
