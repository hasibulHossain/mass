import * as actionTypes from '../actionTypes';

export const productDetails = product => {
   return {
      type: actionTypes.PRODUCT_DETAILS,
      payload: {
         product: product
      }
   }
}

export const addToCart = () => {
   return {
      type: actionTypes.ADD_TO_CART
   }
}

export const removeFromCart = id => {
   return {
      type: actionTypes.REMOVE_FROM_CART,
      payload: {
         id: id
      }
   }
}