# react-super-timer

> React Super Timer is a fully controllable and customizable timer component for react

[![NPM](https://img.shields.io/npm/v/react-super-timer.svg)](https://www.npmjs.com/package/react-super-timer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.org/yassinedoghri/react-super-timer.svg?branch=master)](https://travis-ci.org/yassinedoghri/react-super-timer "Master Build") [![Build Status](https://travis-ci.org/yassinedoghri/react-super-timer.svg?branch=development)](https://travis-ci.org/yassinedoghri/react-super-timer "Development Build") [![Maintainability](https://api.codeclimate.com/v1/badges/c56b244c71ff213031ff/maintainability)](https://codeclimate.com/github/yassinedoghri/react-super-timer/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/c56b244c71ff213031ff/test_coverage)](https://codeclimate.com/github/yassinedoghri/react-super-timer/test_coverage)

## Install

```bash
npm install --save react-super-timer
```
or
```
yarn add react-super-timer
```

## Usage

```jsx
import React, { Component } from 'react'

import SuperTimer from 'react-super-timer'

class Example extends Component {
  render () {
    return (
      <SuperTimer
        timeStart={10 * 1000} // start at 10 seconds
        timeEnd={20 * 1000} // end at 20 seconds
        started={true}
        paused={false}
        countdown={false} // use as stopwatch
        interval={1000} // tick every 1 second
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

### SuperTimer

Renders a [React Fragment](https://reactjs.org/docs/fragments.html) to be fully customized.
You can easily style the timer states thanks to the provided function callbacks.

SuperTimer displays the time formatted as: `HH:MM:SS.SSS`

### Props

| Name                 	| Type       	| Default                  	| Description                                                         	|
|----------------------	|------------	|--------------------------	|---------------------------------------------------------------------	|
| timeStart `required` 	| `number`   	| -                        	| The initial time on which the timer is set (in ms)                  	|
| timeEnd              	| `number`   	| `0`                      	| The time on which the timer will complete (in ms)                   	|
| countdown            	| `boolean`  	| `false`                  	| When `true`, sets the timer to countdown instead of counting up     	|
| interval             	| `number`   	| `1000`                   	| The time between each ticks (in ms)                                 	|
| started              	| `boolean`  	| `false`                  	| Starts the timer when set to `true`, stops it when set to `false`   	|
| paused               	| `boolean`  	| `false`                  	| Pauses the timer when set to `true`, resumes it when set to `false` 	|
| onStart              	| `function` 	| `(timer: Timer) => void` 	| Callback function called on timer start                             	|
| onTick               	| `function` 	| `(timer: Timer) => void` 	| Callback function called on each timer tick                         	|
| onPause              	| `function` 	| `(timer: Timer) => void` 	| Callback function called on timer pause                             	|
| onResume             	| `function` 	| `(timer: Timer) => void` 	| Callback function called when timer resumes                         	|
| onStop               	| `function` 	| `(timer: Timer) => void` 	| Callback function called on timer stop                              	|
| onComplete           	| `function` 	| `(timer: Timer) => void` 	| Callback function called on timer complete                          	|

### Types

| Name           | Example values                    |
|----------------|-----------------------------------|
| Timer `object` | ` { h: 1, m: 30, s: 30, ms: 0 } ` |

## License

MIT © [Yassine Doghri](https://github.com/yassinedoghri)
