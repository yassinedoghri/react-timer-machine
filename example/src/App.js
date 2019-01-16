import React, { Component } from "react";

import TimerMachine from "react-timer-machine";

import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

import "index.css";

momentDurationFormatSetup(moment);

export default class App extends Component {
  static renderPlayerBtn(toggleFunc, stateProp, label) {
    return (
      <button type="button" onClick={() => toggleFunc(!stateProp)}>
        {stateProp ? label.true : label.false}
      </button>
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      paused: false,
      started: false,
      countdown: false
    };

    this.toggleStartTimer = this.toggleStartTimer.bind(this);
    this.toggleTimer = this.toggleTimer.bind(this);
    this.toggleCountdown = this.toggleCountdown.bind(this);
  }

  toggleStartTimer(isStarted) {
    this.setState({
      started: isStarted
    });
  }

  toggleTimer(isPaused) {
    this.setState({
      paused: isPaused
    });
  }

  toggleCountdown(isCountdown) {
    this.setState({
      countdown: isCountdown
    });
  }

  render() {
    const { started, paused, countdown } = this.state;

    return (
      <section className="timerMachine">
        <a href="https://github.com/yassinedoghri/react-timer-machine">
          <img
            className="githubFork"
            src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
            alt="Fork me on GitHub"
          />
        </a>
        <h1>React Timer Machine</h1>
        <span className="timer">
          <TimerMachine
            timeStart={60 * 1000}
            started={started}
            paused={paused}
            countdown={countdown}
            interval={1000}
            formatTimer={(time, ms) =>
              moment.duration(ms, "milliseconds").format("h:mm:ss")
            }
            onStart={time =>
              console.info(`Timer started: ${JSON.stringify(time)}`)
            }
            onStop={time =>
              console.info(`Timer stopped: ${JSON.stringify(time)}`)
            }
            onTick={time =>
              console.info(`Timer ticked: ${JSON.stringify(time)}`)
            }
            onPause={time =>
              console.info(`Timer paused: ${JSON.stringify(time)}`)
            }
            onResume={time =>
              console.info(`Timer resumed: ${JSON.stringify(time)}`)
            }
            onComplete={time =>
              console.info(`Timer completed: ${JSON.stringify(time)}`)
            }
          />
        </span>
        <div className="typeBlock">
          <label htmlFor="countup">
            <input
              id="countup"
              type="radio"
              name="type"
              defaultChecked={!countdown}
              onClick={() => this.toggleCountdown(false)}
            />{" "}
            Count Up
          </label>
          <label htmlFor="countdown">
            <input
              id="countdown"
              type="radio"
              name="type"
              defaultChecked={countdown}
              onClick={() => this.toggleCountdown(true)}
            />{" "}
            Count Down
          </label>
        </div>
        <div className="player">
          {App.renderPlayerBtn(this.toggleStartTimer, started, {
            true: "Stop",
            false: "Start"
          })}
          {App.renderPlayerBtn(this.toggleTimer, paused, {
            true: "Resume",
            false: "Pause"
          })}
        </div>
      </section>
    );
  }
}
