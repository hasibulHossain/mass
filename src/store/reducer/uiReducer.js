import * as actionType from '../actions/actionTypes';

const initialState = {
   isSideNavActive: false
}

const uiReducer = (state = initialState, action) => {
   switch (action.type) {
      case actionType.SIDENAV_ACTIVE:
         return {
            ...state,
            isSideNavActive: !state.isSideNavActive
         }
   
      default:
         return state
   }
}

export default uiReducer;