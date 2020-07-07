import React from 'react';
import './Button.scss';

function Button(props) {
   return (
      <button onClick={props.clicked} className={`btn ${props.class}`}>
         {props.children}
      </button>
   )
}

export default Button;
