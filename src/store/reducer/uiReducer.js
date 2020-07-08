import * as actionType from '../actions/actionTypes';

const initialState = {
   isSideNavActive: false,
   isModalOpen: false,
   cartOpen: false,
   alert: false
}

const uiReducer = (state = initialState, action) => {
   switch (action.type) {
      case actionType.SIDENAV_ACTIVE:
         return {
            ...state,
            isSideNavActive: true,
            isModalOpen: true
         }
      case actionType.SIDENAV_HIDE:
         return {
            ...state,
            isSideNavActive: false,
            isModalOpen: false
         }

      case actionType.MODAL_OPEN:
         return {
            ...state,
            isModalOpen: !state.isModalOpen,
            isSideNavActive: false,
            alert: false
         }

      case actionType.ALERT:
         return {
            ...state,
            alert: true,
            // isModalOpen: true
         }

      case actionType.CART_OPEN:
         return {
            ...state,
            cartOpen: !state.cartOpen
         }

      case actionType.CART_CLOSE:
         return {
            ...state,
            cartOpen: false
         }
   
      default:
         return state
   }
}

export default uiReducer;