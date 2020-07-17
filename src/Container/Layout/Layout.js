import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './Layout.scss'

import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideNav from '../../Components/Navigation/SideNav/SideNav';
import Footer from '../../Components/Footer/Footer';
import BackDrop from '../../Components/ui/BackDrop/BackDrop';
import CartDropdown from '../../Components/CartDropdown/CartDropdown';

//action
import * as action from '../../store/actions/Index';

function Layout ({children, backDropOpen, cartOpen, alertAsync, alertOccurred}) {
   useEffect(() => {
      alertAsync()
   }, [])

   return (
      <>
         {  alertOccurred && <Alert />}
         <BackDrop isOpen={backDropOpen} />
         <Toolbar />
         {cartOpen && <CartDropdown />}
         <SideNav />
         <main>{children}</main>
         <Footer />
      </>
   )
}

const mapStateToProps = state => {
   return {
      backDropOpen: state.uiRTR.isModalOpen,
      alertOccurred: state.uiRTR.alert,
      cartOpen: state.uiRTR.cartOpen
   }
}

const mapDispatchToProps = dispatch => {
   return {
      alertAsync: () => dispatch(action.alertAsync())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

function Alert() {
   return (
      <div className="alert">
         <p>
            this site is under development and not added responsive functionality yet.
         </p>
      </div>
   )
}
