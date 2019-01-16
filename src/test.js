import React from "react";
import TimerMachine from "./";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe("TimerMachine", () => {
  test("is truthy", () => {
    expect(TimerMachine).toBeTruthy();
  });

  test("renders correctly", () => {
    const wrapper = shallow(<TimerMachine timeStart={10 * 1000} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders custom timer format", () => {
    const wrapper = shallow(
      <TimerMachine
        timeStart={70 * 1000} // 1 min 10 seconds
        formatTimer={timer => `${timer.m} min ${timer.s} seconds`}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("start timer", () => {
    const spy = jest.spyOn(TimerMachine.prototype, "startTimer");
    const wrapper = mount(<TimerMachine timeStart={10 * 1000} />);

    wrapper.setProps({ started: true });
    expect(spy).toBeCalled();
  });

  test("stop timer", () => {
    const spy = jest.spyOn(TimerMachine.prototype, "stopTimer");
    const wrapper = mount(<TimerMachine timeStart={10 * 1000} started />);

    wrapper.setProps({ started: false });
    expect(spy).toBeCalled();
  });

  test("pause timer", () => {
    const spy = jest.spyOn(TimerMachine.prototype, "pauseTimer");
    const wrapper = mount(<TimerMachine timeStart={10 * 1000} started />);

    wrapper.setProps({ paused: true });
    expect(spy).toBeCalled();
  });

  test("resume timer", () => {
    const spy = jest.spyOn(TimerMachine.prototype, "resumeTimer");
    const wrapper = mount(
      <TimerMachine timeStart={10 * 1000} started paused />
    );

    wrapper.setProps({ paused: false });
    expect(spy).toBeCalled();
  });

  test("stop timer on unmount", () => {
    const spy = jest.spyOn(TimerMachine.prototype, "stopTimer");
    const wrapper = mount(<TimerMachine timeStart={10 * 1000} />);

    wrapper.unmount();
    expect(spy).toBeCalled();
  });
});
