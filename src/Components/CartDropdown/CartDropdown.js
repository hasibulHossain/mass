import React from 'react';
import {motion} from 'framer-motion'


//self_style
import './CartDropdown.scss'

//components
import {BsX} from 'react-icons/bs';
import Button from '../ui/Button/Button';

import one from '../../assets/images/slider-1.jpg'

function CartDropdown() {
   return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="Cart-Dropdown">
         <ul className="Cart-Dropdown__inner">
            <li className="Cart-Dropdown__item">
               <div className="Cart-Dropdown__content">
                  <div className="Cart-Dropdown__dlt-icon">
                     <BsX />
                  </div>
                  <div className="Cart-Dropdown__summery">
                     <h4>mass premium denim jacket</h4>
                     <span className="Cart-Dropdown__item-quantity">1 X</span>
                     <span className="Cart-Dropdown__item-price">49.99 GBP</span>
                  </div>
               </div> 
               <div className="Cart-Dropdown__photo">
                  <img src={one} alt="just testing" />
               </div>
            </li>
            <li className="Cart-Dropdown__item">
               <div className="Cart-Dropdown__content">
                  <div className="Cart-Dropdown__dlt-icon">
                     <BsX />
                  </div>
                  <div className="Cart-Dropdown__summery">
                     <h4>mass premium denim jacket</h4>
                     <span className="Cart-Dropdown__item-quantity">1 X</span>
                     <span className="Cart-Dropdown__item-price">49.99 GBP</span>
                  </div>
               </div>
               <div className="Cart-Dropdown__photo">
                  <img src={one} alt="just testing" />
               </div>
            </li>
         </ul>
            <div className="Cart-Dropdown__btn">
               <div>
                  <Button class="btn-thin-cart">view cart</Button>
               </div>
               <div>
                  <Button class="btn-fill-cart">check out</Button>
               </div>
            </div>
      </motion.div>
   )
}

export default CartDropdown;