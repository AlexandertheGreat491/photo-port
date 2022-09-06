// importing packages needed for component testing
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

// calls the cleanup() function using the afterEach global function from Jest
afterEach(cleanup);

// describe function declares the component that will be tested in this particular test suite
describe("Nav component", () => {
  // baseline test
  it("renders", () => {
    render(<Nav />);
  });
  // snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(<Nav />);
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

// describe function declares that the links are visible
describe('links are visible', () => {
    it('inserts text into the links', () => {
        // Arrange

        // Assert
    })
})
