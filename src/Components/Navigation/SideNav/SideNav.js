import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import './SideNav.scss';


//actions
import * as action from '../../../store/actions/Index';

function SideNav(props) {
   console.log(props.isActive)
   let classes = classNames({
      sidenav: true,
      active: props.isActive
   })
   return (
      <div className={classes}>
         sidenav
         <button onClick={props.toggleSideNav}>
            X
         </button>
      </div>
   )
}

const mapStateToProps = state => {
   return {
      isActive: state.uiRTR.isSideNavActive
   }
};

const mapDispatchToProps = dispatch => {
   return {
      toggleSideNav: () => dispatch(action.toggleSideNav())
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
