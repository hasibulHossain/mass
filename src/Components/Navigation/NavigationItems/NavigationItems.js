import React from 'react';
import {connect} from 'react-redux';
import './NavigationItems.scss';

//actions
import * as action from '../../../store/actions/Index';

//icons
import { FaRegUser } from 'react-icons/fa';


function NavigationItems(props) {
   console.log(props.isActive)
   return (
      <ul className="navigation-items">
         <li className="navigation-items__navigation-item" onClick={props.toggleSideNav}></li>
         <li className="navigation-items__navigation-item">mass</li>
         <li className="navigation-items__navigation-item">
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
      toggleSideNav: () => dispatch(action.toggleSideNav())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItems);
