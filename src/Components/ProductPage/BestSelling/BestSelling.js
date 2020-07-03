import React from 'react';
import './BestSelling.scss'

//components
import Button from '../../ui/Button/Button';

//Assets
import { 
   photo1,
   photo2,
   photo3,
   photo4,
   photo5,
   photo6,
   photo7,
   photo8,
   photo9,
   photo10
} from './imgSrc.js';

const imgsArr = [
   photo1,
   photo2,
   photo3,
   photo4,
   photo5,
   photo6,
   photo7,
   photo8,
   photo9,
   photo10
];

function BestSelling() {
   return (
      <section className="Best-selling">
         <div className="row">
            <div className="Best-selling__gallery">
               {
                  imgsArr.map((photo, i) => {
                     return (
                        <div key={i} className="Best-selling__gallery-box">
                           <div className="Best-selling__gallery-photo-box">
                              <img src={photo} alt="gallery items" />
                           </div>
                           <div className="Best-selling__gallery-content-box">
                              <p>editor picks</p>
                              <p>Best Of New In &#58; Slip Skirts &#38; Zebra</p>
                              <p>&#36; 49.99</p>
                           </div>
                        </div>
                     )
                  })
               }
            </div>
            <Button class="btn-thin">shop now</Button>
         </div>
      </section>
   )
}

export default BestSelling
