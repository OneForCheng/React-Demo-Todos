import { expect } from "chai";
import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import { TodoList } from "../../src/components/todolist";
import "../testSetup";

describe("test TodoList component", function() {
  it("should correctly render TodoList component", function() {
    const props = {
      todos: [
        {
          id: 1,
          label: "JS",
          completed: false
        },
        {
          id: 2,
          label: "React",
          completed: true
        }
      ],
      allCompleted: true,
      toggleAll: () => {}
    };
    const component = shallow(<TodoList {...props} />);
    expect(component.find("input").prop("checked")).to.eql(true);
    expect(component.find("Connect(ReduxContainer)").length).to.eql(2);
  });

  it("should invoke toggleAll when the checkbox change checked state", function() {
    const spy = sinon.spy();
    const props = {
      todos: [],
      allCompleted: false,
      toggleAll: spy
    };
    const component = shallow(<TodoList {...props} />);
    component.find("input").simulate("change", { target: { checked: true } });
    expect(spy.calledWith(true)).to.eql(true);
  });
  
});
