import React from 'react';
import './ProductPage.scss'

//components
import NewIn from '../../Components/Homepage/SectionThree/SectionThree';
import BestSelling from '../../Components/ProductPage/BestSelling/BestSelling';
import FollowInsta from '../../Components/FollowInsta/FollowInsta';
import { motion } from 'framer-motion';

import { pageTransition, pageVariants } from '../../Components/animate/animation';

function ProductPage() {
   return (
      <motion.div initial="initial" animate="animate" exit="initial" variants={pageVariants} transition={pageTransition}>
         <div className="section-first" >
            <NewIn heading="new in" />
         </div>
         <BestSelling />
         <FollowInsta />
      </motion.div>   
   )
}

export default ProductPage