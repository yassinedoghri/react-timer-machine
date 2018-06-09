import React, { Component } from "react";

import TimerMachine from "react-timer-machine";

import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

import "index.css";

momentDurationFormatSetup(moment);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paused: false,
      started: false,
      countdown: false
    };
  }

  toggleTimer(isPaused) {
    this.setState({
      paused: isPaused
    });
  }

  toggleStartTimer(isStarted) {
    this.setState({
      started: isStarted
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
      <section className={"timerMachine"}>
        <h1>React Timer Machine</h1>
        <span className={"timer"}>
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
        <div className={"typeBlock"}>
          <label>
            <input
              type="radio"
              name="type"
              defaultChecked={!countdown}
              onClick={() => this.toggleCountdown(false)}
            />{" "}
            Count Up
          </label>
          <label>
            <input
              type="radio"
              name="type"
              checked={countdown}
              onClick={() => this.toggleCountdown(true)}
            />{" "}
            Count Down
          </label>
        </div>
        <div className={"player"}>
          <button type="button" onClick={() => this.toggleStartTimer(!started)}>
            {started ? "Stop" : "Start"}
          </button>
          <button type="button" onClick={() => this.toggleTimer(!paused)}>
            {paused ? "Resume" : "Pause"}
          </button>
        </div>
      </section>
    );
  }
}
