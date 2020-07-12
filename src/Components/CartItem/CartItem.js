import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { motion } from 'framer-motion';
import './CartItem.scss';

//icon
import {BsX} from 'react-icons/bs';

//redux action
import * as action from '../../store/actions/Index';

function CartItem(props) {
   // useEffect(() => {
   //    console.log('happened')
   // })
   return (
      <motion.li 
      initial={{ opacity: 0, y: 50, scale: 0.3 }} 
      animate={{ opacity: 1, y: 0, scale: 1 }} 
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }} 
      className="cart-item">
         <div className="cart-item__photo cart-item__item">
            <div>
               <img src={props.src} alt="item"/>
            </div>
         </div>
         <div className="cart-item__summery cart-item__item">
            <h4>{props.name}</h4>
            <span className="cart-item__item-serial">mass &#35;{props.serial}</span>
         </div>
         <div className="cart-item__item-price cart-item__item">
            {props.price} GBP
         </div>
         <div className="cart-item__item-quantity cart-item__item">
            1
         </div>
         <div className="cart-item__item-total-price cart-item__item">
            49.99 GBP
         </div>
         <div onClick={() => props.removeProduct(props.id)} className="cart-item__item-action cart-item__item">
            <BsX />
         </div>
      </motion.li>
   )
}

const mapDispatchToProps = dispatch => {
   return {
      removeProduct: id => dispatch(action.removeFromCart(id))
   }
}

export default connect(null, mapDispatchToProps)(CartItem);
