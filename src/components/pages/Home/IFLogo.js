import React, { Component } from "react";
import anime from "animejs";

export default class IFLogo extends Component {
  componentDidMount() {
    let duration = 3000;

    anime({
      targets: "#logo .lines path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      delay: function(el, i) {
        return i * 100;
      },
      duration
    });

    anime({
      targets: "#logo .shapes path",
      fill: ["rgba(0,0,0,0)", "#26dbff"],
      easing: "easeInSine",
      delay: function(el, i) {
        return i * 100;
      },
      duration
    });
  }

  render() {
    return (
      <svg
        id='logo'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1333 1333'
        width={this.props.width}
        height={this.props.height}>
        <g transform='matrix(1.33333 0 0 -1.33333 0 1333)' className='lines shapes'>
          <path
            stroke='#26dbff'
            strokeLinecap='round'
            strokeWidth='4'
            d='M714 415v146H602c-19 0-35-15-35-34V415zM180 197h58v586h-58zM268 197h58v586h-58z'
          />
          <path
            stroke='#26dbff'
            strokeLinecap='round'
            strokeWidth='4'
            d='M536 727h298v56H541c-81 0-146-66-146-147V197h59v448c0 45 37 82 82 82'
          />
          <path
            stroke='#26dbff'
            strokeLinecap='round'
            strokeWidth='4'
            d='M484 648V197h57v439h293v61H533c-27 0-49-22-49-49'
          />
        </g>
      </svg>
    );
  }
}
