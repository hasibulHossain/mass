import React from 'react';
import './NavigationItems.scss';

import { FaRegUser } from 'react-icons/fa';

function NavigationItems() {
   return (
      <ul className="navigation-items">
         <li className="navigation-items__navigation-item"></li>
         <li className="navigation-items__navigation-item">mass</li>
         <li className="navigation-items__navigation-item">
            <FaRegUser />
         </li>
      </ul>
   )
}

export default NavigationItems;
