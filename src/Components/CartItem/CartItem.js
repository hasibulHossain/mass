import React from 'react';
import './CartItem.scss';

import {BsX} from 'react-icons/bs';
import one from '../../assets/images/slider-1.jpg'

function CartItem() {
   return (
      <li className="cart-item">
         <div className="cart-item__photo cart-item__item">
            <div>
               <img src={one} alt="item"/>
            </div>
         </div>
         <div className="cart-item__summery cart-item__item">
            <h4>mass premium denim jacket</h4>
            <span className="cart-item__item-serial">mass &#35;0868</span>
         </div>
         <div className="cart-item__item-price cart-item__item">
            49.99 GBP
         </div>
         <div className="cart-item__item-quantity cart-item__item">
            1
         </div>
         <div className="cart-item__item-total-price cart-item__item">
            49.99 GBP
         </div>
         <div className="cart-item__item-action cart-item__item">
            <BsX />
         </div>
      </li>
   )
}

export default CartItem;
