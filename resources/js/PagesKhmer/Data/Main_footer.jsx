import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Menu_header from './Menu_header';
import Paycamltto from './menu/Paycamltto';
import Winning_Results from './menu/Winning_Results';
import Community from './menu/Community';
import LOVE_IN_US from './menu/LOVE_IN_US';
import Image_slider from './Image_slider';
import About from './Menu_Footer/About';
import Contact_us from './Menu_Footer/Contact_us';
import Support from './Menu_Footer/Support';
import Company from './Menu_Footer/Company';
import Feature from './Menu_Footer/Feature';
import Registration from './Menu_Footer/Registration';
import Menu_register from './Menu_Footer/Menu_register';
import Menu_Download_App from './Menu_Footer/Menu_Download_App';
import Social_Link from './Menu_Footer/Social_Link';
import MenuFooter from './MenuFooter';

import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faBuilding,
  faCheckCircle,
  faCoffee,
  faHome,
  faInfoCircle,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

export default class Main_footer extends Component {
  render() {
    return (
      <Fragment>
        {/* Footer Menu */}
        <div
          className="container-fluid p-3 font-khmer-language"
          style={{ backgroundColor: ' #1d1d1d' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-12">
                <div className="row menu-list-footer-a">
                  <About />
                  <Contact_us />
                  <Support />
                  <Company />
                  {/* <Feature /> */}
                  {/* <Registration /> */}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-12 p-5 text-secondary d-flex align-items-center justify-content-start">
                <Menu_register />
              </div>
              <Menu_Download_App />
              <hr />
              <Social_Link />
            </div>
          </div>
        </div>
        <div className="mobile-phone"></div>
        <MenuFooter />
        {/* Footer Menu */}
      </Fragment>
    );
  }
}
