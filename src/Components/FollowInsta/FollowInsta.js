import React from 'react';
import './FollowInsta.scss';

//components
import Slider from '../Slider/Slider';
import HeadingSecond from '../HeadingSecond/HeadingSecond';
import Button from '../ui/Button/Button';

//assets
import photoOne from '../../assets/images/sectionTwo/one.jpg';
import photoTwo from '../../assets/images/sectionTwo/two.jpg';
import photoThree from '../../assets/images/sectionTwo/three.jpg';

const imgsArr = [
   {
      src: photoOne,
      alt: 'gallery sliding item'
   },
   {
      src: photoTwo,
      alt: 'gallery sliding item'
   },
   {
      src: photoThree,
      alt: 'gallery sliding item'
   },
   {
      src: photoOne,
      alt: 'gallery sliding item'
   },
   {
      src: photoTwo,
      alt: 'gallery sliding item'
   },
]

function SectionTwo() {
   return (
      <section className="section-promote">
         <div className="row">
            <div className="section-promote__heading">
               <div>
                  <HeadingSecond pBottom="0">
                     follow us on instagram
                  </HeadingSecond>
               </div>
               <div>
                  <Button class="btn-thin">follow us</Button>
               </div>
            </div>

            <div className="section-promote__container-gallery">
               <Slider csName="section-promote__gallery-inner" translateWidth="-33.33">
                  {
                     imgsArr.map(({src, alt}, i) => {
                        return (
                           <div key={i} className="section-promote__gallery-photo">
                              <img src={src} alt={alt} />
                           </div>
                        )
                     })
                  }
               </Slider>
            </div>
         </div>
      </section>
   )
}

export default SectionTwo
