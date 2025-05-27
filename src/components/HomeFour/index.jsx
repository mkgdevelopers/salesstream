import useToggle from '../../Hooks/useToggle.js';
import BackToTop from '../BackToTop.jsx';
import ServicesHomeOne from '../HomeOne/ServicesHomeOne.jsx';
import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import HeaderHomeFour from './HeaderHomeFour.jsx';
import HeroHomeFour from './HeroHomeFour.jsx';
import AboutSectionFour from './AboutSectionFour.jsx'

function HomeFour() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeFour action={drawerAction.toggle} />
            <HeroHomeFour />
            <ServicesHomeOne className="pt-190" />
            <AboutSectionFour/>
            <FooterHomeThree className="home-four-footer" />
            <BackToTop className="back-to-top-3" />
        </>
    );
}

export default HomeFour;
