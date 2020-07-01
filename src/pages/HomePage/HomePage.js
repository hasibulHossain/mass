import React from 'react';

import HeroSection from '../../Components/Homepage/Hero-section/HeroSection';
import SectionOne from '../../Components/Homepage/SectionOne/SectionOne';
import FollowInsta from '../../Components/FollowInsta/FollowInsta';
import SectionThree from '../../Components/Homepage/SectionThree/SectionThree';

function HomePage() {
   return (
      <>
         <HeroSection />
         <SectionOne />
         <FollowInsta />
         <SectionThree />
      </>
   )
}

export default HomePage;
