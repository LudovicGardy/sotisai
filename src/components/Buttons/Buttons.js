// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

// export function Button() {
//   return (
//     <Link to='sign-up'>
//       <button className='btn'>Sign Up</button>
//     </Link>
//   );
// }

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Buttons.css";

const STYLES = ["btn_primary", "btn_secondary",  "btn_third", "btn_outline", "btn_test", "btn_reverse"];

const SIZES = ["btn_medium", "btn_large", "btn_large2",  "btn_large3"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  redirection="about"
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={redirection} className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};