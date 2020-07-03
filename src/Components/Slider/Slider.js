import React, {useState, useRef} from 'react';

import ArrowBtn from '../ui/ArrowBtn/ArrowBtn';

function Slider({children, csName, translateWidth}) { 
   const slider = useRef();
   let arrowBtnR = useRef();
   let arrowBtnL = useRef();
   const [width, setWidth] = useState(+translateWidth);
   const [counter, setCounter] = useState(0);
   const [direction, setDirection] = useState(0)

   const slideRight = () => {
      if(width < +translateWidth) {
         console.log('im pressed')
         return;
      }
      arrowBtnR.style.opacity = '0';
      setCounter(counter + 1)
      setWidth(+(translateWidth * 2))
      setDirection(-1)
   }
   const slideLeft = () => {
      if(width === 0) return;
      arrowBtnL.style.opacity = '0';
      setCounter(counter - 1)
      setWidth(0)
      setDirection(1)
   }
   
   const finishTrans = () => {
      if(direction === -1) {
         slider.current.append(slider.current.firstChild);
         setWidth(+translateWidth);
         slider.current.style.transition = "none";
         arrowBtnR.style.opacity = '1'
         setTimeout(() => {
            slider.current.style.transition = "all 0.8s cubic-bezier(0, 0, 0.71, 1.04)"; 
         }, 1);
      }

      if(direction === 1) {
         slider.current.prepend(slider.current.lastChild);
         setWidth(+translateWidth);
         slider.current.style.transition = "none";
         arrowBtnL.style.opacity = '1';
         setTimeout(() => {
            slider.current.style.transition = "all 0.8s cubic-bezier(0, 0, 0.71, 1.04)"; 
         }, 1);
      }
   }
   return (
      <>
         {/* slide controller */}
         <div ref={el => arrowBtnL = el} onClick={slideLeft} className={`${csName.split('__')[0]}__left-arrow`}>
            <ArrowBtn leftArrow />
         </div>
         <div ref={el => arrowBtnR = el} onClick={slideRight} className={`${csName.split('__')[0]}__right-arrow`}>
            <ArrowBtn />
         </div>

         {/* slides */}
         <div>
            <div className={csName} ref={slider} onTransitionEnd={finishTrans} style={{transform: `translateX(${width}%)`}}>
               {children}
            </div>
         </div>
      </>
   )
}

export default Slider
