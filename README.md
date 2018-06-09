# react-timer-machine

> React Timer Machine is a fully controllable and customizable timer component for react

[![NPM](https://img.shields.io/npm/v/react-timer-machine.svg)](https://www.npmjs.com/package/react-timer-machine) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.org/yassinedoghri/react-timer-machine.svg?branch=master)](https://travis-ci.org/yassinedoghri/react-timer-machine "Master Build") [![Build Status](https://travis-ci.org/yassinedoghri/react-timer-machine.svg?branch=development)](https://travis-ci.org/yassinedoghri/react-timer-machine "Development Build") [![Maintainability](https://api.codeclimate.com/v1/badges/67abb76788a89f4805fc/maintainability)](https://codeclimate.com/github/yassinedoghri/react-timer-machine/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/67abb76788a89f4805fc/test_coverage)](https://codeclimate.com/github/yassinedoghri/react-timer-machine/test_coverage)

## Install

```bash
npm install --save react-timer-machine
```
or
```
yarn add react-timer-machine
```

## Usage

```jsx
import React, { Component } from 'react'

import TimerMachine from 'react-timer-machine'

import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

class Example extends Component {
  render () {
    return (
      <TimerMachine
        timeStart={10 * 1000} // start at 10 seconds
        timeEnd={20 * 1000} // end at 20 seconds
        started={true}
        paused={false}
        countdown={false} // use as stopwatch
        interval={1000} // tick every 1 second
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
    )
  }
}
```

## User guide

### TimerMachine

Renders a [React Fragment](https://reactjs.org/docs/fragments.html) to be fully customized.
You can easily style the timer states thanks to the provided function callbacks.

By default, TimerMachine displays the time formatted as: `hh:mm:ss.SSS`.
The format can be changed using the `formatTimer` property. [See usage example](#usage) above.

### Props

| Name                 	| Type       	| Default                  	                    | Description                                                         	                                            |
|----------------------	|------------	|---------------------------------------------- |------------------------------------------------------------------------------------------------------------------ |
| timeStart `required` 	| `number`   	| -                        	                    | The initial time on which the timer is set (in ms)                  	                                            |
| timeEnd              	| `number`   	| `0`                      	                    | The time on which the timer will complete (in ms)                   	                                            |
| countdown            	| `boolean`  	| `false`                  	                    | When `true`, sets the timer to countdown instead of counting up     	                                            |
| interval             	| `number`   	| `1000`                   	                    | The time between each ticks (in ms)                                 	                                            |
| started              	| `boolean`  	| `false`                  	                    | Starts the timer when set to `true`, stops it when set to `false`   	                                            |
| paused               	| `boolean`  	| `false`                  	                    | Pauses the timer when set to `true`, resumes it when set to `false` 	                                            |
| formatTimer           | `function` 	| `(timer: Timer, ms: number) => 'hh:mm:ss.SSS'`| Function to format the timer before it renders. You can use [moment-duration] as shown above or write your own    |
| onStart              	| `function` 	| `(timer: Timer) => void` 	                    | Callback function called on timer start                             	                                            |
| onTick               	| `function` 	| `(timer: Timer) => void` 	                    | Callback function called on each timer tick                         	                                            |
| onPause              	| `function` 	| `(timer: Timer) => void` 	                    | Callback function called on timer pause                             	                                            |
| onResume             	| `function` 	| `(timer: Timer) => void` 	                    | Callback function called when timer resumes                         	                                            |
| onStop               	| `function` 	| `(timer: Timer) => void` 	                    | Callback function called on timer stop                              	                                            |
| onComplete           	| `function` 	| `(timer: Timer) => void` 	                    | Callback function called on timer complete                          	                                            |

[moment-duration]: https://github.com/jsmreese/moment-duration-format

### Types

| Name           | Example values                    |
|----------------|-----------------------------------|
| Timer `object` | ` { h: 1, m: 30, s: 30, ms: 0 } ` |

## Versioning

react-timer-machine is maintained under [the Semantic Versioning guidelines](http://semver.org/).

## Contributing

Love react-timer-machine and would like to help? Check out the [contribution guidelines for this project](./CONTRIBUTING.md), everything should be there!

## Contributors

**Yassine Doghri** _(creator)_

* [https://yassine.doghri.fr](https://yassine.doghri.fr)
* [https://twitter.com/yassinedoghri](https://twitter.com/yassinedoghri)
* [https://github.com/yassinedoghri](https://github.com/yassinedoghri)

## Copyright and licence

Code and documentation copyright 2018, [Yassine Doghri](https://github.com/yassinedoghri). Code released under the MIT License.
