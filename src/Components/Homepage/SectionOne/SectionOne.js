import React from 'react';
import './SectionOne.scss';

//component
import HeadingSecond from '../../HeadingSecond/HeadingSecond';

//assets
import photoRight from '../../../assets/images/sectionOne/three.jpg';

function SectionOne() {
   console.log('rendered sectionOne')
   return (
      <section className="exclusive_collection">
         <div className="row">
            <div className="exclusive_collection__container">
               <div className="exclusive_collection__container-inner">
                  <div className="exclusive_collection__left">
                     <HeadingSecond pBottom="0">
                        Eternity Textures Do Last Forever
                     </HeadingSecond>
                     <div>
                        <img src={photoRight} alt="photoLeft" className="exclusive_collection__left-photo" />
                     </div>
                  </div>
                  <div className="exclusive_collection__right">
                     <div className="exclusive_collection__right-para">
                        <p>
                           Before we begin to give you additional information on this topic, take a moment to think about how much you already know.
                        </p>
                        <p>
                           Enlargement of the underground corm accumulates phyto-estrogens (Hormone from Plant) comprising isoflavones (daidzin, daidzein, genistin, genistein and puerarin) and others such as miroestrol and its derivatives, beta-sitosterol, stigmasterol, coumestrol, puerarin, mirificoumestan, kwakhurin and mirificin.
                        </p>
                     </div>

                     <div>
                        <img src={photoRight} alt="an woman" className="exclusive_collection__right-photo" />
                     </div>

                     <div>
                        <p>exclusive spring</p>
                        <p>collection</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default SectionOne;
