import React from "react";
import styled from "styled-components";

export default function withGradientFill(WrappedComponent) {
  return class extends React.Component {
    svgGradientObj = { ...this.props.svgGradientObj };
    gradientId = `gradient-${this.svgGradientObj.topColor}-${
      this.svgGradientObj.bottomColor
    }-${this.svgGradientObj.opacity}`;
    render() {
      return (
        <div>
          <svg
            style={{ width: 0, height: 0, position: "absolute" }}
            aria-hidden="true"
            focusable="false"
          >
            <linearGradient id={this.gradientId} x2="1" y2="1">
              <stop offset="0%" stopColor={this.svgGradientObj.topColor} />
              <stop offset="100%" stopColor={this.svgGradientObj.bottomColor} />
            </linearGradient>
          </svg>
          <WrappedComponent
            style={{
              fill: `url(#${this.gradientId}) ${
                this.svgGradientObj.bottomColor
              }`,
              opacity: this.svgGradientObj.opacity
            }}
          />
        </div>
      );
    }
  };
}
