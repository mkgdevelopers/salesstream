import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import ServicesHomeOne from '../HomeOne/ServicesHomeOne.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import CounterArea from '../HomeTwo/CounterArea.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import FeaturesHomeFour from './FeaturesHomeFour.jsx';
import HeaderHomeFour from './HeaderHomeFour.jsx';
import HeroHomeFour from './HeroHomeFour.jsx';
import SolutionArea from './SolutionArea.jsx';
import SalesStreamSections from './SalesStreamSections.jsx';

function HomeFour() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeFour action={drawerAction.toggle} />
            <HeroHomeFour />
            <ServicesHomeOne className="pt-190" />
            <FeaturesHomeFour />
            <CounterArea style={{ backgroundColor: '#EEF1F6' }} />
            <SolutionArea/>
            <SalesStreamSections/>
            <FooterHomeOne className="home-four-footer" />
            <BackToTop className="back-to-top-3" />
        </>
    );
}

export default HomeFour;
