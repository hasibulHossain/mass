import React, {useState, useRef} from 'react';

export default function wrapper(WrappedComponent) {
   return function withSlider() {
      //any functionality

      return <WrappedComponent {...this.props} />;
   }
}


 