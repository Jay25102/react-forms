import React from "react";
import {fireEvent, render} from "@testing-library/react";
import Todo from "./Todo";

it("renders without crashing", function() {
    render(<Todo/>);
});

it("matches snapshot", function() {
    const {asFragment} = render(<Todo/>);
    expect(asFragment()).toMatchSnapshot();
});

it("deletes todo when button is clicked", function() {
    const removeMock = jest.fn();
    const {getByText} = render(<Todo handleRemove={removeMock} />);
    const deleteBtn = getByText("X");
    fireEvent.click(deleteBtn);
    expect(removeMock).toHaveBeenCalled();
});