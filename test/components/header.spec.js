import { expect } from "chai";
import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import { Header } from "../../src/components/header";
import "../testSetup";

describe("test Header component", function() {
  it("should not invoke addTodo when keyPress enter on the input box and the input value is empty", function() {
    const spy = sinon.spy();
    const props = {
      addTodo: spy
    };
    const component = shallow(<Header {...props} />);
    component
      .find("input")
      .simulate("keyPress", { charCode: 13, target: { value: "" } });
    expect(spy.calledOnce).to.eql(false);
  });

  it("should invoke addTodo when keyPress enter on the input box and the input value is not empty", function() {
    const spy = sinon.spy();
    const props = {
      addTodo: spy
    };
    const component = shallow(<Header {...props} />);
    component
      .find("input")
      .simulate("keyPress", { charCode: 13, target: { value: "Hello" } });
    expect(spy.calledWith('Hello')).to.eql(true);
  });
});
