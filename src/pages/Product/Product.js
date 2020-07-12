import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import './Product.scss'
import { motion } from 'framer-motion';

//components
import FollowInsta from '../../Components/FollowInsta/FollowInsta';
import AlsoLike from '../../Components/Homepage/SectionThree/SectionThree';
import Button from '../../Components/ui/Button/Button';
import { pageVariants, pageTransition } from '../../Components/animate/animation';
import * as action from '../../store/actions/Index';

function Product(props) {
   const [sizeI, setSizeI] = useState(2)
   const [activePhoto, setActivePhoto] = useState(1)
   const photos = useRef([]);
   const sizes = useRef([]);

   useEffect(() => {
      photos.current = photos.current.slice(0, 3);
      // console.log(sizes)
   }) 

   const change = (e) => {
      const i = +e.currentTarget.dataset.index
      setActivePhoto(i)
   }

   const sizeChangeHandler = (e) => {
      e.preventDefault();
      setSizeI(+e.currentTarget.dataset.index)
   }

   

   return (
      <motion.div initial="initial" animate="animate" exit="initial" variants={ pageVariants } transition={ pageTransition } className="Product">
         <section className="Product-des">
            <div className="Product-des__inner">
               {  props.product ?
                  <>
                     <div className="Product-des__content">
                        <div className="Product-des__content-left">
                           <div className="Product-des__content-left-heading">
                              <span>{props.product.price} GBP</span>
                              <h3>
                                 {props.product.name}
                              </h3>
                              <span> {props.product.model} </span>
                           </div>
                           <span className="Product-des__line"></span>
                           <div className="Product-des__content-left-bottom">
                              <div className="Product-des__content-left-para">
                                 {props.product.description}
                              </div>
                              <div className="Product-des__sizes">
                                 { ['XS', 'S', 'M', 'L', 'XL'].map((size, i) => {
                                    return (
                                       <div
                                          data-index={ i }
                                          ref={ el => sizes.current[i] = el }
                                          onClick={ sizeChangeHandler }
                                          className={ sizeI === i ? 'active' : '' }
                                          key={ i }>
                                          <span>{ size }</span>
                                       </div>
                                    )
                                 }) }
                              </div>
                              <div className="Product-des__cart-btn">
                                 <Button clicked={() => props.addToCart()} class="btn-thin">add to cart</Button>
                              </div>
                           </div>
                        </div>
                        <div className="Product-des__content-right">
                           {
                              props.product.photoSmall.map((src, i) => (
                                 <div onClick={ change } key={ i } data-index={ i } className="Product-des__content-right-photo-box">
                                    <img src={ src } alt="content-right item" />
                                 </div>
                              ))
                           }
                        </div>
                     </div>
                     <div className="Product-des__big-photo">
                        {
                           props.product.photoSmall.map((photo, i) => {
                              return (
                                 <div className={ i === activePhoto ? 'active' : '' } key={ i }>
                                    <img src={ photo } alt="big" />
                                 </div>
                              )
                           })
                        }

                     </div>
                  </> : <p style={{width: '100%', textAlign: 'center', fontSize: '3rem', marginTop: '3rem'}}>not selected yet... </p>
               }
            </div>
         </section>
         <AlsoLike heading="you may also like" />
         <FollowInsta />
      </motion.div>
   )
}

const mapStateToProps = state => {
   return {
      product: state.cartRTR.productDetails
   }
}

const mapDispatchToProps = dispatch => {
   return {
      addToCart: () => dispatch(action.addToCart())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)