import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './Layout.scss'

import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideNav from '../../Components/Navigation/SideNav/SideNav';
import Footer from '../../Components/Footer/Footer';
import BackDrop from '../../Components/ui/BackDrop/BackDrop';

//action
import * as action from '../../store/actions/Index';

function Layout ({children, backDropOpen, alertOccurred, alertAsync}) {
   useEffect(() => {
      alertAsync()
   }, [])

   return (
      <>
         {/* {  alertOccurred && <Alert />} */}
         <BackDrop isOpen={backDropOpen} />
         <Toolbar />
         <SideNav />
         <main>{children}</main>
         <Footer />
      </>
   )
}

const mapStateToProps = state => {
   return {
      backDropOpen: state.uiRTR.isModalOpen,
      alertOccurred: state.uiRTR.alert
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
            This is only for demo purpous. And this site not yet responsive, hope I'll do responsive latter.
         </p>
      </div>
   )
}
