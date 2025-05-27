import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle.js';
import StickyMenu from '../../lib/StickyMenu.js';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import ProjectHomeOne from '../HomeOne/ProjectHomeOne.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import DetailsService from './DetailsService.jsx';
import HeaderService from './HeaderService.jsx';
import HeroService from './HeroService.jsx';
import FeaturesHomeTwo from '../HomeTwo/FeaturesHomeTwo.jsx'
import WhyChooseUs from './WhyChooseUs.jsx';
import TestimonialHomeEight from '../HomeEight/TestimonialHomeEight.jsx';

function Service() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderService action={drawerAction.toggle} />
            <HeroService />
            <TestimonialHomeEight/>
            {/* <FeaturesHomeTwo/> */}

            {/* <DetailsService />
            <ProjectHomeOne /> */}
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default Service;
