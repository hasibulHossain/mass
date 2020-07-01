import React, { useRef, useState } from 'react';
import './HeroSection.scss';

//assets
import slide_1 from '../../../assets/images/slider-1.jpg';
import slide_2 from '../../../assets/images/tamara-bellis-1hDT7YDdMtw-unsplash.jpg';
import slide_3 from '../../../assets/images/tamara-bellis-HsAg3EyplGs-unsplash.jpg';
import slide_4 from '../../../assets/images/tamara-bellis-oC8dBDBRFMA-unsplash.jpg';
import slide_5 from '../../../assets/images/tamara-bellis-pONwcn4IcVU-unsplash.jpg';

//components
import Button from '../../ui/Button/Button';
import ArrowBtn from '../../ui/ArrowBtn/ArrowBtn';

const imgsArr = [
   {
      src: slide_1,
      alt: 'slide number one'
   },
   {
      src: slide_2,
      alt: 'slide number two'
   },
   {
      src: slide_3,
      alt: 'slide number three'
   },
   {
      src: slide_4,
      alt: 'slide number four'
   },
   {
      src: slide_5,
      alt: 'slide number five'
   },
];

function HeroSection() {
   const slider = useRef();
   // const slides = useRef([]);
   const [width, setWidth] = useState(-100);
   const [counter, setCounter] = useState(1);
   const [direction, setDirection] = useState(0)
   console.log('[herosection] outside')
   // useEffect(() => {
   //    console.log('running')
   //    slides.current = slides.current.slice(0, imgsArr.length);
   // }, [])

   const slideRight = () => {
      setWidth(-200)
      setDirection(-1)
   }
   const slideLeft = () => {
      setWidth(0)
      setDirection(1)
   }

   const finishTrans = () => {
      if(direction === -1) {
         if(counter < 5) {
            setCounter(counter + 1)
         } else {
            setCounter(1)
         }

         slider.current.append(slider.current.firstChild);
         setWidth(-100);
         slider.current.style.transition = "none";
         setTimeout(() => {
            slider.current.style.transition = "all 0.7s cubic-bezier(0, 0, 0.71, 1.04)"; 
         }, 1);
      }

      if(direction === 1) {
         if(counter <= 1) {
            setCounter(imgsArr.length)
         } else {
            setCounter(counter - 1)
         }
         slider.current.prepend(slider.current.lastChild);
         setWidth(-100);
         slider.current.style.transition = "none";
         setTimeout(() => {
            slider.current.style.transition = "all 0.7s cubic-bezier(0, 0, 0.71, 1.04)"; 
         }, 1);
      }
   }
   return (
      <section className="hero-section">
         <div className="hero-section__inner">
            <div className="hero-section__photos">
               <div className="hero-section__photos-inner" ref={slider} onTransitionEnd={finishTrans} style={{transform: `translateX(${width}%)`}}>
                  {
                     imgsArr.map(({src, alt}, index) => (
                        <div key={index} data-index={index} >
                           <img  src={src} alt={alt} data-index={index} />
                        </div>
                     ))
                  }
               </div>
               <div className="slide-counter">
                  <span className="current_slide">{`0${counter}`} &#47;</span>
                  <span className="total_slide">{` 0${imgsArr.length}`}</span>
               </div>
            </div>
            <div className="hero-section__content">
               <div className="hero-section__content-inner">
                  <div>
                     <h1 className="hero-section__content-headings">
                        <div>beyond</div>
                        <div>nature</div>
                     </h1>
                     <p className="hero-section__content-para">
                        Outfit idea, editor picks, styling inspiration &amp; face
                     </p>
                     <Button class="btn-thin">shop now</Button>
                  </div>
                  
                  <div className="hero-section__bottom">
                     <div className="slide-controller">
                        <div onClick={slideLeft}>
                           <ArrowBtn leftArrow/>
                        </div>
                        <div onClick={slideRight}>
                           <ArrowBtn />
                        </div>
                     </div>

                     <div className="article-box">
                        <div className="article-photo">
                           <img src={slide_1} alt="an woman"/>
                        </div>
                        <div className="article-content">
                           <h4>the new lookbook</h4>
                           <p>Daily Inspiration and Beauty Advices</p>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </section>
   )
}

export default HeroSection;