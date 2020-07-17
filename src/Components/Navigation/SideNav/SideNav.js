import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux';
import classNames from 'classnames';
import './SideNav.scss';

//components
import Button from '../../ui/Button/Button'

//actions
import * as action from '../../../store/actions/Index';

//icons
import {BsX} from 'react-icons/bs';

function SideNav(props) {
   let classes = classNames({
      Sidenav: true,
      active: props.isActive
   })

   useEffect(() => {
      const body = document.body;
      if(props.isActive) {
         body.style.height = '100vh';
         body.style.overflowY = 'hidden';
      } else {
         body.style.height = '';
         body.style.overflowY = '';
      }
   }, [props.isActive])

   return (
      <div className={classes}>
         <div className="Sidenav__inner">
            <div className="Sidenav__signup-box">
               <div>
                  <Button class="btn-fill-white">sugn up</Button>
               </div>
               <div onClick={props.closeSideNav}>
                  <BsX/>
               </div>
            </div>
            <ul className="Sidenav__links">
               <li onClick={props.closeSideNav} className="Sidenav__link">
                  <NavLink to="/" exact>
                     home
                  </NavLink>
               </li>
               <li onClick={props.closeSideNav} className="Sidenav__link">
                  <NavLink to="/ProductPage" exact>
                     Products
                  </NavLink>
               </li>
               <li onClick={props.closeSideNav} className="Sidenav__link">
                  <NavLink to="/cart" exact>
                     Cart
                  </NavLink>
               </li>
               {/* <li onClick={props.closeSideNav} className="Sidenav__link">
                  <NavLink to="/login" exact>
                     Login
                  </NavLink>
               </li>
               <li onClick={props.closeSideNav} className="Sidenav__link">
                  <NavLink to="/signup" exact>
                     sign up
                  </NavLink>
               </li> */}
            </ul>
         </div>
      </div>
   )
}

const mapStateToProps = state => {
   return {
      isActive: state.uiRTR.isSideNavActive,
      closeModal: state.uiRTR.isModalOpen
   }
};

const mapDispatchToProps = dispatch => {
   return {
      closeSideNav: () => dispatch(action.closeSideNav())
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
