import React from 'react';
import './ProductPage.scss'

//components
import NewIn from '../../Components/Homepage/SectionThree/SectionThree';
import BestSelling from '../../Components/ProductPage/BestSelling/BestSelling';
import FollowInsta from '../../Components/FollowInsta/FollowInsta';

function ProductPage() {
   return (
      <>
         <div className="section-first" >
            <NewIn heading="new in" />
         </div>
         <BestSelling />
         <FollowInsta />
      </>   
   )
}

export default ProductPage