import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import FooterHomeOne from '../HomeOne/FooterHomeOne.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import HeaderNews from '../Help/HeaderNews.jsx';
import HeroNews from '../Help/HeroNews.jsx';
import Forms from './Forms.jsx';

function Contact() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderNews drawer={drawer} action={drawerAction.toggle} />
            <HeroNews
                title="Contact Us"

            />
            <Forms />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default Contact;
