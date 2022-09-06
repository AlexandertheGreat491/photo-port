// importing packages needed for component testing
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

// calls the cleanup() function using the afterEach global function from Jest
afterEach(cleanup);

// describe function declares the component that will be tested in this particular test suite
describe('Nav component', () => {
    // baseline test

    // snapshot test
})