import { expect } from "chai";
import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import { Todo } from "../../src/components/todo";
import "../testSetup";

describe("test Todo component", function() {
  it("should correctly render Todo component", function() {
    const props = {
      id: 1,
      label: "JS",
      completed: true,
      toggleTodo: () => {},
      removeTodo: () => {},
      updateTodo: () => {}
    };
    const component = shallow(<Todo {...props} />);
    expect(component.find("li").prop("className")).to.eql("completed");
    expect(component.find("input[type='checkbox']").prop("checked")).to.eql(
      true
    );
    expect(component.find("label").text()).to.eql("JS");
  });

  it("should invoke toggleTodo when the checkbox change checked state", function() {
    const spy = sinon.spy();
    const props = {
      id: 1,
      label: "JS",
      completed: true,
      toggleTodo: spy,
      removeTodo: () => {},
      updateTodo: () => {}
    };
    const component = shallow(<Todo {...props} />);
    component
      .find("input[type='checkbox']")
      .simulate("change", { target: { checked: true } });
    expect(spy.calledWith(1)).to.eql(true);
  });

  it("should invoke removeTodo when click the button", function() {
    const spy = sinon.spy();
    const props = {
      id: 1,
      label: "JS",
      completed: true,
      toggleTodo: () => {},
      removeTodo: spy,
      updateTodo: () => {}
    };
    const component = shallow(<Todo {...props} />);
    component.find("button").simulate("click");
    expect(spy.calledWith(1)).to.eql(true);
  });

  it("should invoke removeTodo when keyPress enter on the input box and the input value is empty", function() {
    const spy = sinon.spy();
    const props = {
      id: 1,
      label: "JS",
      completed: true,
      toggleTodo: () => {},
      removeTodo: spy,
      updateTodo: () => {}
    };
    const component = shallow(<Todo {...props} />);
    component
      .find("input.edit")
      .simulate("keyPress", { charCode: 13, target: { value: "" } });
    expect(spy.calledWith(1)).to.eql(true);
  });

  it("should invoke updateTodo when keyPress enter on the input box and the input value is not empty", function() {
    const spy = sinon.spy();
    const props = {
      id: 1,
      label: "JS",
      completed: true,
      toggleTodo: () => {},
      removeTodo: () => {},
      updateTodo: spy
    };
    const component = shallow(<Todo {...props} />);
    component
      .find("input.edit")
      .simulate("keyPress", { charCode: 13, target: { value: "Hello" } });
    expect(spy.calledWith(1, "Hello")).to.eql(true);
  });

  it("should have editing className when double click the label", function() {
    const spy = sinon.spy();
    const props = {
      id: 1,
      label: "JS",
      completed: true,
      toggleTodo: () => {},
      removeTodo: () => {},
      updateTodo: spy
    };
    const component = shallow(<Todo {...props} />);
    component.find("label").simulate("doubleClick");
    expect(component.find("li").prop("className")).to.eql("completed editing");
  });
});
