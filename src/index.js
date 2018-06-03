/**
 * @class SuperTimer
 */

import PropTypes from "prop-types";
import React, { Component } from "react";

class SuperTimer extends Component {
  static msToTime(ms) {
    const milliseconds = ms % 1000;
    ms = (ms - milliseconds) / 1000;
    const seconds = ms % 60;
    ms = (ms - seconds) / 60;
    const minutes = ms % 60;
    const hours = (ms - minutes) / 60;

    return {
      h: hours,
      m: minutes,
      s: seconds,
      ms: milliseconds
    };
  }

  static formatTime(time) {
    const pad = (n, z = 2) => ("00" + n).slice(-z);
    return (
      pad(time.h) +
      ":" +
      pad(time.m) +
      ":" +
      pad(time.s) +
      "." +
      pad(time.ms, 3)
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      time: SuperTimer.msToTime(props.timeStart),
      milliseconds: props.timeStart
    };
    this.timer = 0;
    this.every = props.interval;
    this.internalState = 0; //  0 = idle, 1 = running, 2 = paused, 3 = resumed
    this.remaining = 0;
    this.startTime = 0;

    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resumeTimer = this.resumeTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.timeoutCallback = this.timeoutCallback.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidUpdate() {
    const { timeStart, countdown, started, paused, interval } = this.props;
    const { milliseconds } = this.state;

    this.every = countdown ? -interval : interval;

    if (started) {
      // start timer if not started already
      if (this.internalState === 0) {
        this.resetTimer();
        this.startTimer();
      }
      if (paused) {
        this.pauseTimer();
      } else {
        this.resumeTimer();
      }
    } else {
      if (timeStart !== milliseconds) {
        this.stopTimer();
      }
    }
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer() {
    const { onStart } = this.props;

    onStart(this.state.time);
    this.startTime = new Date();
    this.timer = setInterval(this.tick, this.props.interval);
    this.internalState = 1;
  }

  stopTimer() {
    const { onStop } = this.props;

    onStop(this.state.time);
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = 0;
    this.internalState = 0;
  }

  pauseTimer() {
    if (this.internalState !== 1) return;

    const { interval, onPause } = this.props;

    onPause(this.state.time);
    this.remaining = interval - (new Date() - this.startTime);
    clearInterval(this.timer);
    this.internalState = 2;
  }

  resumeTimer() {
    if (this.internalState !== 2) return;
    const { onResume } = this.props;

    onResume(this.state.time);
    window.setTimeout(this.timeoutCallback, this.remaining);
    this.internalState = 3;
  }

  resetTimer() {
    const { timeStart } = this.props;
    this.setState({
      time: SuperTimer.msToTime(timeStart),
      milliseconds: timeStart
    });
  }

  timeoutCallback() {
    if (this.internalState !== 3) return;

    this.tick();

    this.startTime = new Date();
    this.timer = setInterval(this.tick, this.props.interval);
    this.internalState = 1;
  }

  tick() {
    // Remove interval, set state so a re-render happens.
    const { onComplete, onTick, timeEnd, countdown } = this.props;
    const { time, milliseconds } = this.state;

    const remaining = milliseconds + this.every;
    this.setState({
      time: SuperTimer.msToTime(remaining),
      milliseconds: remaining
    });
    onTick(time);

    // Check if timer completed.
    if (
      (countdown && remaining <= timeEnd) ||
      (!countdown && (timeEnd && remaining >= timeEnd))
    ) {
      this.stopTimer();
      onComplete(time);
    }
  }

  render() {
    const { time } = this.state;
    const timer = SuperTimer.formatTime(time);

    return <React.Fragment>{timer}</React.Fragment>;
  }
}

SuperTimer.propTypes = {
  timeStart: PropTypes.number.isRequired,
  timeEnd: PropTypes.number,
  countdown: PropTypes.bool,
  interval: PropTypes.number,
  started: PropTypes.bool,
  paused: PropTypes.bool,
  onTick: PropTypes.func,
  onStart: PropTypes.func,
  onPause: PropTypes.func,
  onResume: PropTypes.func,
  onStop: PropTypes.func,
  onComplete: PropTypes.func
};

SuperTimer.defaultProps = {
  timeEnd: 0,
  countdown: false,
  interval: 1000,
  started: false,
  paused: false,
  onTick: time => {},
  onStart: time => {},
  onPause: time => {},
  onResume: time => {},
  onStop: time => {},
  onComplete: time => {}
};

export default SuperTimer;
