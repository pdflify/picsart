import React, { Component } from "react";

export default class Wave extends Component {
  render() {
    return (
        <svg className="p-0" viewBox="0 -1 1920 166">
        <path
          d="M0 70c298.667 35.333 618.667 25 960-31 341.333-56 661.333-50.333 960 17v109H0V70z"
          transform="translate(0 5) translate(0 -5)"
          fill="#fff"
          fillRule="nonzero"
        />
      </svg>
    );
  }
}
