import React from 'react';

import HeroSection from '../../Components/Homepage/Hero-section/HeroSection';
import SectionOne from '../../Components/Homepage/SectionOne/SectionOne';
import FollowInsta from '../../Components/FollowInsta/FollowInsta';
import SectionThree from '../../Components/Homepage/SectionThree/SectionThree';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../../Components/animate/animation';



function HomePage() {
   return (
      <motion.div initial="initial" animate="animate" exit="initial" variants={pageVariants} transition={pageTransition} >
         <HeroSection />
         <SectionOne />
         <FollowInsta />
         <SectionThree showBtn heading="Style Feeds" />
      </motion.div>
   )
}

export default HomePage;