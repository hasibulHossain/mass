import React from 'react';
import './HeadingSecond.scss';

export default function HeadingSecond({children, pBottom}) {
   return (
      <h2 className="heading-second" style={{paddingBottom: pBottom}}>
         {children}
      </h2>
   )
}
