import React from "react";
import App from "./App";
import { shallow } from "enzyme";

it("renders correct", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<h1>Test</h1>)).toBe(true);
});
