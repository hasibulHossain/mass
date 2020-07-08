import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {motion} from 'framer-motion'


//self_style
import './CartDropdown.scss'

//redux action
import * as action from '../../store/actions/Index';

//components
import {BsX} from 'react-icons/bs';
import Button from '../ui/Button/Button';

import one from '../../assets/images/slider-1.jpg'

function CartDropdown(props) {
   return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="Cart-Dropdown">
         <ul className="Cart-Dropdown__inner">
            {
               [1, 2, 3, 4].map((_, i) => {
                  return (
                  <li key={i} className="Cart-Dropdown__item">
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
                  )
               })
            }
         </ul>
            <div className="Cart-Dropdown__btn">
               <Link to="/cart">
                  <div onClick={props.closeCart} className="Cart-Dropdown__view-cart">
                     <Button class="btn-thin-cart">view cart</Button>
                  </div>
               </Link>
               <Link to="/cart">
                  <div onClick={props.closeCart}>
                     <Button class="btn-fill-cart">check out</Button>
                  </div>
               </Link>
            </div>
      </motion.div>
   )
}

const mapDispatchToProps = dispatch => {
   return {
      closeCart: () => dispatch(action.CloseCart())
   }
}

export default connect(null, mapDispatchToProps)(CartDropdown);