import React, {useRef, useEffect, useState} from 'react'
import './Product.scss'
import { motion } from 'framer-motion';

//components
import FollowInsta from '../../Components/FollowInsta/FollowInsta';
import AlsoLike from '../../Components/Homepage/SectionThree/SectionThree';
import Button from '../../Components/ui/Button/Button';
import { pageVariants, pageTransition } from '../../Components/animate/animation';

//assets
import one from '../../assets/images/slider-1.jpg'
import two from '../../assets/images/tamara-bellis-1hDT7YDdMtw-unsplash.jpg'
const three = 'https://static.zara.net/photos///2020/I/0/1/p/3777/024/802/2/w/560/3777024802_6_1_1.jpg?ts=1592834844453'

const imgsArr = [one, two, three];

function Product() {
   const [sizeI, setSizeI] = useState(2)
   const [activePhoto, setActivePhoto] = useState(1)
   const photos = useRef([]);
   const sizes = useRef([]);
   const bigPhoto = useRef([]);

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
      <motion.div initial="initial" animate="animate" exit="initial" variants={pageVariants} transition={pageTransition}  className="Product">
         <section className="Product-des">
            <div className="Product-des__inner">
               <div className="Product-des__content">
                  <div className="Product-des__content-left">
                     <div className="Product-des__content-left-heading">
                        <span>49.99 GBP</span>
                        <h3>
                           mass premium denim jacket
                        </h3>
                        <span>black 3305/052</span>
                     </div>
                     <span className="Product-des__line"></span>
                     <div className="Product-des__content-left-bottom">
                        <div className="Product-des__content-left-para">
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere dolorum maxime tenetur? Laboriosam maxime quod dolorum natus vitae optio.
                        </div>
                        <div className="Product-des__sizes">
                           {['XS', 'S', 'M', 'L', 'XL'].map((size, i) => {
                              return (
                                 <div 
                                 data-index={i}
                                 ref={el => sizes.current[i] = el}
                                 onClick={sizeChangeHandler}
                                 className={sizeI === i ? 'active' : ''}
                                 key={i}>
                                    <span>{size}</span>
                                 </div>
                              )
                           })}
                        </div>
                        <div className="Product-des__cart-btn">
                           <Button class="btn-thin">add to cart</Button>
                        </div>
                     </div>
                  </div>
                  <div className="Product-des__content-right">
                     {
                        imgsArr.map((src, i) => (
                           <div onClick={change} key={i} data-index={i} className="Product-des__content-right-photo-box">
                              <img src={src} alt="content-right item"/>
                           </div>
                        ))
                     }
                  </div>
               </div>
               <div className="Product-des__big-photo">
                  {
                     imgsArr.map((photo, i) => {
                        return (
                           <div className={i === activePhoto ? 'active' : ''} ref={el => bigPhoto.current[i] = el} key={i}>
                              <img src={photo} alt="big"/>
                           </div>
                        )
                     })
                  }
                  
               </div>
            </div>
         </section>
         <AlsoLike heading="you may also like" />
         <FollowInsta />
      </motion.div>
   )
}

export default Product

      // <div className="main">
      //    <ul className="products">
      //       {[one, tow, three].map((item, index) => {
      //          return (
      //             <li key={index} onClick={change} className="product">
      //                <img ref={el => photos.current[index] = el} src={item} alt="testing"/>
      //             </li>
      //          )
      //       })}
      //    </ul>
      //    <div className="big">
      //       <motion.img initial={false} animate={{opacity: 1}} ref={bigPhoto} src={three} alt="tesing"/>
      //    </div>
      // </div>