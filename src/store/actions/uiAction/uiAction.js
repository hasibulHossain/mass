import * as actionTypes from '../actionTypes';

export const openSideNav = () => {
   return {
      type: actionTypes.SIDENAV_ACTIVE
   }
}
export const closeSideNav = () => {
   return {
      type: actionTypes.SIDENAV_HIDE
   }
}

export const toggleModal = () => {
   return {
      type: actionTypes.MODAL_OPEN
   }
}

export const toggleCart = () => {
   return {
      type: actionTypes.CART_OPEN
   }
}

export const CloseCart = () => {
   return {
      type: actionTypes.CART_CLOSE
   }
}

const alert = () => {

   return {
      type: actionTypes.ALERT
   }
}

export const alertAsync = () => {
   return dispatch => {
      setTimeout(() => {
         dispatch(alert())
      }, 5000);
   }
}