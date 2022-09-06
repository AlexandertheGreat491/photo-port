import React from "react";
// Jest creates a simulated DOM & removes components from the DOM to prevent memory leaking
import { render, cleanup } from "@testing-library/react";
// offers custom matchers that are used to test DOM elements
import '@testing-library/jest-dom/extend-expect';
// imports the About component
import About from '..';

// calls the cleanup() function using the afterEach global function from Jest
afterEach(cleanup);

// describe function declares the component being tested
describe('About component', () => {
    //renders About test

    // first test
    it('renders', () => {
        render(<About />);
      });
    

    // second test
  })