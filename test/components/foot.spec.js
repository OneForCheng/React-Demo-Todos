import { expect } from "chai";
import React from "react";
import { shallow } from "enzyme";
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
