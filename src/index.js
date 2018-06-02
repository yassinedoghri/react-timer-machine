/**
 * @class SuperTimer
 */

import PropTypes from "prop-types";
import React, { Component } from "react";

import styles from "./styles.css";

export default class SuperTimer extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  };

  render() {
    const { text } = this.props;

    return <div className={styles.test}>Super Timer: {text}</div>;
  }
}
