import React, { Component } from "react";

import SuperTimer from "react-super-timer";

import "index.css";

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

  startTimer(isStarted) {
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
      <section className={"superTimer"}>
        <span className={"timer"}>
          <SuperTimer
            timeStart={10 * 1000}
            started={started}
            paused={paused}
            countdown={countdown}
            interval={1000}
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
        <div className={"actionBlock"}>
          <button type="button" onClick={() => this.startTimer(!started)}>
            {started ? "Stop" : "Start"}
          </button>
          <button type="button" onClick={() => this.toggleTimer(!paused)}>
            {paused ? "Resume" : "Pause"}
          </button>
          <button
            type="button"
            onClick={() => this.toggleCountdown(!countdown)}
          >
            {countdown ? "Count Up" : "Count Down"}
          </button>
        </div>
      </section>
    );
  }
}
