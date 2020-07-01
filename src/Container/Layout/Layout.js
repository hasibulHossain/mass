import React from 'react';

import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
//import SideNav from '../../Components/Navigation/SideNav/SideNav';
import Footer from '../../Components/Footer/Footer';

export default function Layout ({children}) {

   return (
      <>
         <Toolbar />
         {/* <SideNav /> */}
         <main>{children}</main>
         <Footer />
      </>
   )
}