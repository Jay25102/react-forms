import React from "react";
import BoxList from "./BoxList";
import { fireEvent, render } from "@testing-library/react";
import '@testing-library/jest-dom'

function addTestBox(boxList, backgroundColor = "red", height = 150, width = 150) {
    fireEvent.change(boxList.getByLabelText("Box Color:"), {target: {value: backgroundColor}});
    fireEvent.change(boxList.getByLabelText("Box Width:"), {target: {value: width}});
    fireEvent.change(boxList.getByLabelText("Box Height:"), {target: {value: height}});
    fireEvent.click(boxList.getByText("Add"));
}

describe("box functions and snapshot", function() {
    it("renders without crashing", function() {
        render(<BoxList/>);
    });

    it ("matches snapshot", function() {
        const { asFragment } = render(<BoxList/>);
        expect(asFragment()).toMatchSnapshot();
    });;

    it("successfully adds a box", function() {
        const testBoxList = render(<BoxList/>);

        expect(testBoxList.queryByText("Remove")).not.toBeInTheDocument();
        addTestBox(testBoxList);
        const btn = testBoxList.queryByText("Remove");
        expect(btn).toBeInTheDocument();
        expect(btn.previousSibling).toHaveStyle(`
            background-color: red;
            width: 150px;
            height: 150px;    
        `);
    });

    it("successfully removes a box", function() {
        const testBoxList = render(<BoxList/>);
        addTestBox(testBoxList);
        const removeBtn = testBoxList.getByText("Remove");

        fireEvent.click(removeBtn);
        expect(removeBtn).not.toBeInTheDocument();
    });
});