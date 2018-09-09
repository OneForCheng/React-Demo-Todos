import { expect } from "chai";
import React from "react";
import { shallow } from "enzyme";
import sinon from 'sinon';
import { Footer, Filters, ClearBtn } from "../../src/components/footer";
import "../testSetup";

describe("test Footer component", function() {

  it("should correctly render Footer component", function() {
    const props = {
      filters: {},
      activeCount: 0,
      isShowClearBtn: false
    };
    const component = shallow(<Footer {...props} />);
    expect(component.find("strong").text()).to.eql("0");
    expect(component.find("ClearBtn").exists()).to.eql(true);
    expect(component.find("Filters").exists()).to.eql(true);
  });

});


describe("test ClearBtn component", function() {

  it("should be empty render when isShowClearBtn given false", function() {
    const props = {
      isShowClearBtn: false,
      clearCompleted: () =>{}
    };
    const component = shallow(<ClearBtn {...props} />);
    expect(component.isEmptyRender()).to.eql(true);
  });

  it("should invoke clearCompleted when click the clearCompleted button", function() {
    const clickSpy = sinon.spy();
    const props = {
      isShowClearBtn: true,
      clearCompleted: clickSpy
    };
    
    const component = shallow(<ClearBtn {...props} />);
    component.find('button').simulate('click');
    expect(clickSpy.calledOnce).to.eql(true);

  });

});
