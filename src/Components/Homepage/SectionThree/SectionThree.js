import React from 'react'
import './SectionThree.scss'

//components
import Slider from '../../Slider/Slider';
import HeadingSecond from '../../HeadingSecond/HeadingSecond';
import Button from '../../ui/Button/Button';

//assets
import slideOne from '../../../assets/images/sectionThree/laura-chouette-one.jpg';
import slideTwo from '../../../assets/images/sectionThree/laura-chouette-two.jpg';
import slideThree from '../../../assets/images/sectionThree/laura-chouette-62EAbC3SHIs-unsplash.jpg';

const imgsArr = [
   {
      src: slideOne,
      alt: 'girl wear skirt',
      titleFirst: 'editor picks',
      titleSecond: 'Best Of New In &#58; Slip Skirts &#38; Zebra'
   },
   {
      src: '//source.unsplash.com/zmfjDzJGTOo/640x958',
      alt: 'girl wear skirt',
      titleFirst: 'inspiration',
      titleSecond: 'Best Of New In &#58; Slip Skirts &#38; Zebra'
   },
   {
      src: slideThree,
      alt: 'girl wear skirt',
      titleFirst: 'inspiration',
      titleSecond: 'Best Of New In &amp; Slip Skirts &#38; Zebra'
   },
   {
      src: slideTwo,
      alt: 'girl wear skirt',
      titleFirst: 'inspiration',
      titleSecond: 'Best Of New In &amp; Slip Skirts &#38; Zebra'
   },
   {
      src: slideOne,
      alt: 'girl wear skirt',
      titleFirst: 'inspiration',
      titleSecond: 'Best Of New In &#58; Slip Skirts &#38; Zebra'
   },
]

function SectionThree() {
   return (
      <section className="style-feeds">
         <div className="row">
            <div className="style-feeds__heading">
               <div>
                  <HeadingSecond pBottom="1rem">Style Feeds</HeadingSecond> 
               </div>
               <div>
                  <Button class="btn-fill">all articles</Button>
               </div>
            </div>
            <div className="style-feeds__gallery-photos">
               <Slider csName="style-feeds__gallery-photos-inner" translateWidth="-35">
                  {
                     imgsArr.map(({src, alt, titleFirst, titleSecond}, index) => {
                        return (
                           <React.Fragment key={index}>
                              <div className="style-feeds__gallery-photo-box" data-index={`index${index}`}>
                                 <div className="style-feeds__gallery-photo">
                                    <img src={src} alt={alt} />
                                 </div>
                                 <div className="style-feeds__gallery-content">
                                    <p>{titleFirst}</p>
                                    <p>{titleSecond}</p>
                                 </div>
                              </div>
                           </React.Fragment>
                        )
                     })
                  }
               </Slider>
            </div>
         </div>
      </section>
   )
}

export default SectionThree
