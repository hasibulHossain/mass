import React from 'react';
import './BestSelling.scss'

//components
import Button from '../../ui/Button/Button';

//Assets
import { 
   photo1,
   photo2,
   photo7
} from './imgSrc.js';

const imgsArr = [
   {
      src: photo1
   },
   {
      src: photo2
   },
   {
      src: '//source.unsplash.com/ehdI_89nzMo/640x958'
   },
   {
      src: '//source.unsplash.com/pUY4bhUYnK4/640x958'
   },
   {
      src: '//source.unsplash.com/TDOClniEwmI/640x958'
   },
   {
      src: '//source.unsplash.com/eC6fllGoKNs/640x958'
   },
   {
      src: photo7
   },
   {
      src: '//source.unsplash.com/_rWF1DVWkUs/640x958'
   },
   {
      src: '//source.unsplash.com/eC6fllGoKNs/640x958'
   },
   {
      src: '//source.unsplash.com/_rWF1DVWkUs/640x958'
   },
];

function BestSelling() {
   return (
      <section className="Best-selling">
         <div className="row">
            <div className="Best-selling__gallery">
               {
                  imgsArr.map(({src}, i) => {
                     return (
                        <div key={i} className="Best-selling__gallery-box">
                           <div className="Best-selling__gallery-photo-box">
                              <img src={src} alt="gallery items" />
                           </div>
                           <div className="Best-selling__gallery-content-box ">
                              <p>editor picks</p>
                              <p>Best Of New In &#58; Slip Skirts &#38; Zebra</p>
                              <p>&#36; 49.99</p>
                           </div>
                        </div>
                     )
                  })
               }
            </div>
            <div className="Best-selling__btn">
               <Button class="btn-thin">shop now</Button>
            </div>
         </div>
      </section>
   )
}

export default BestSelling
