import React from "react";
import {fireEvent, render} from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "./TodoList";

function addTodo(testList) {
    const taskInput = testList.getByLabelText("New Task:");
    fireEvent.change(taskInput, {target: {value: "testing"}});
    const submitBtn = testList.getByText("Add");
    fireEvent.click(submitBtn);
}

it("renders without crashing", function() {
    render(<TodoList/>);
});

it("matches snapshot", function() {
    const {asFragment} = render(<TodoList/>);
    expect(asFragment()).toMatchSnapshot();
});

it("successfully adds a todo", function() {
    const testList = render(<TodoList/>);

    addTodo(testList);

    expect(testList.getByLabelText("New Task:")).toHaveValue("");
    expect(testList.getByText("testing")).toBeInTheDocument();
    expect(testList.getByText("X")).toBeInTheDocument();
});

it("successfully deletes a todo", function() {
    const testList = render(<TodoList/>);

    addTodo(testList);

    expect(testList.getByLabelText("New Task:")).toHaveValue("");
    expect(testList.getByText("testing")).toBeInTheDocument();
    expect(testList.getByText("X")).toBeInTheDocument();

    const deleteBtn = testList.getByText("X");
    fireEvent.click(deleteBtn);

    expect(testList.queryByText("testing")).not.toBeInTheDocument();
    expect(testList.queryByText("X")).not.toBeInTheDocument();
});