import LandingFooter from "../../components/LandingFooter/LandingFooter";
import LogoutNav from "../../components/LandingNavbar/LandingNav";
import styles from "./LandingLayout.module.css";
import "../../styles/vars.css";
import { Link, Outlet } from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";
import SlideShow from "../../components/HomeSections/SlideShow";
import SomeFeature from "../../components/SomeFeature/SomeFeature";
import LandingSec1 from "../../components/LandingSec1/LandingSec1";
const LandingLayout = () => {
  return (
    <>
      <div className={styles.background}>
        <LandingSec1/>
        <Outlet />
        <SomeFeature />
        <LandingFooter />
      </div>
    </>
  );
};

export default LandingLayout;
