import React from 'react';
import {render} from "@testing-library/react";
import NewBoxForm from './NewBoxForm';

describe("App smoke and snapshot", function() {
    it("renders without crashing", function() {
        render(<NewBoxForm/>)
    });

    it("matches snapshot", function() {
        const {asFragment} = render(<NewBoxForm/>);
        expect(asFragment()).toMatchSnapshot();
    });
});