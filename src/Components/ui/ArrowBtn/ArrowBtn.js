import React from 'react';
import './ArrowBtn.scss';

//icon
import {BsChevronLeft} from 'react-icons/bs';
import {BsChevronRight} from 'react-icons/bs';

export default function Arrow(props) {
   return (
      <div className="arrow-btn">
         {props.leftArrow ? <BsChevronLeft/> : <BsChevronRight/>}
      </div>
   )
}
