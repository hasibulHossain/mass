import React from 'react';
import {connect} from 'react-redux';
import './NavigationItems.scss';

//actions
import * as action from '../../../store/actions/Index';

//icons
import { FaRegUser } from 'react-icons/fa';


function NavigationItems(props) {
   return (
      <ul className="navigation-items">
         <li className="navigation-items__navigation-item" onMouseMove={props.openSidenav}></li>
         <li className="navigation-items__navigation-item">mass</li>
         <li onClick={props.openCart} className="navigation-items__navigation-item">
            <FaRegUser />
         </li>
      </ul>
   )
}

const mapStateToProps = state => {
   return {
      isActive: state.uiRTR.isSideNavActive
   }
}

const mapDispatchToProps = dispatch => {
   return {
      openSidenav: () => dispatch(action.openSideNav()),
      openCart: () => dispatch(action.toggleCart())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItems);
