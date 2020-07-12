import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './SectionThree.scss'

//components
import Slider from '../../Slider/Slider';
import HeadingSecond from '../../HeadingSecond/HeadingSecond';
import Button from '../../ui/Button/Button';

//redux
import * as action from '../../../store/actions/Index';

function SectionThree(props, {showBtn, heading}) {
   const cartItemHandler = id => {
      const targetItem = props.products.find(item => item.id === id)
      props.productDetails(targetItem)
      console.log(id)
      props.history.push("/Product")
   }

   return (
      <section className="style-feeds">
         <div className="row">
            <div className="style-feeds__heading">
               <div>
                  <HeadingSecond pBottom="1rem">{heading ? heading : 'style feeds'}</HeadingSecond> 
               </div>
               {
                showBtn &&  <div><Button class="btn-fill">all articles</Button></div>
               }
            </div>
            <div className="style-feeds__gallery-photos">
               <Slider csName="style-feeds__gallery-photos-inner" translateWidth="-35">
                  {  props.products &&
                     props.products.slice(4, -1).map((item, index) => {
                        return (
                           <React.Fragment key={index}>
                              <div onClick={() => cartItemHandler(item.id)} className="style-feeds__gallery-photo-box" data-index={`index${index}`}>
                                 <div className="style-feeds__gallery-photo">
                                    <img src={item.photoSrc} alt="noteing..." />
                                 </div>
                                 <div className="style-feeds__gallery-content">
                                    <p>inspiration</p>
                                    <p>Best Of New In : Slip Skirts & Zebra</p>
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

const mapStateToProps = state => {
   return {
      products: state.productsRTR.products
   }
}

const mapDispatchToProps = dispatch => {
   return {
      productDetails: product => dispatch(action.productDetails(product))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SectionThree));
