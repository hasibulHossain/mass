import React from 'react';
import {motion} from 'framer-motion';

//selfStyle
import './Cart.scss'

import { pageTransition, pageVariants } from '../../Components/animate/animation';

//components
import CartItem from '../../Components/CartItem/CartItem';
import Heading from '../../Components/HeadingSecond/HeadingSecond';

function Cart() {
   return (
      <motion.div initial="initial" animate="animate" exit="initial" variants={pageVariants} transition={pageTransition} className="cart" >
         <div className="row">
            <Heading>cart</Heading>
            <ul className="cart-items">
               <div className="cart-items__header">
                  <div>product</div>
                  <div>description</div>
                  <div>price</div>
                  <div>units</div>
                  <div>total</div>
                  <div>action</div>
               </div>
               <CartItem />
               <CartItem />
               <CartItem />
               <CartItem />
            </ul>
         </div>
      </motion.div>
   )
}

export default Cart;