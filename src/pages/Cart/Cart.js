import React from 'react';
import {motion} from 'framer-motion';

//selfStyle
import './Cart.scss'

//animation
import { pageTransition, pageVariants } from '../../Components/animate/animation';

//components
import CartItem from '../../Components/CartItem/CartItem';
import Heading from '../../Components/HeadingSecond/HeadingSecond';
import Button from '../../Components/ui/Button/Button';

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
            <div className="cart__checkout-summery">
               <div className="cart__total-product">
                  <p>total product</p>
                  <p>49.99 GBP</p>
               </div>
               <div className="cart__shipping">
                  <p>estimated shipping cost</p>
                  <p>free</p>
               </div>
               <div className="cart__total-price">
                  <p>total</p>
                  <p>49.99 GBP</p>
               </div>
            </div>
            <div className="cart__checkout-action">
               <div className="cart__continue-shopping">
                  <Button class="btn-thin-continue-shopping">continue shopping</Button>
               </div>

               <div className="cart__checkout">
                  <Button class="btn-fill-checkout">check out</Button>
               </div>
            </div>
         </div>
      </motion.div>
   )
}

export default Cart;