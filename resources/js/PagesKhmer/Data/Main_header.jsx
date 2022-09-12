import React, { Component } from 'react';
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

import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faCoffee,
} from '@fortawesome/free-solid-svg-icons';

export default class Main_header extends Component {
  render() {
    return (
      <div>
        {/* Menu Header */}
        <div
          className="container-fluid"
          style={{
            position: 'fixed',
            top: '0',
            background: '#fff',
            zIndex: '1',
            left: '0',
          }}
        >
          <div className="container">
            <div className="row">
              <div className=" col-xl-3 col-lg-3 col-md-3 col-12 d-flex justify-content-start j-c-s align-items-center logo-moblie-1">
                <div className="img-logo-1">
                  <NavLink to="/khmer">
                    <img
                      src="/images/photofile/paycam cambodiajpg.jpg"
                      width="180px"
                      alt=""
                    />
                  </NavLink>
                </div>
              </div>
              <Menu_header />
            </div>
          </div>
          <div className="row">
            <input type="checkbox" className="d-none" name="" id="check-menu" />
            <div className="col-12 menu-header-body ">
              <Paycamltto />
              <Winning_Results />
              <Community />
              <LOVE_IN_US />
            </div>
          </div>
        </div>

        <div className="container-fluid moblie-phone "></div>
        {/* Menu Header */}
      </div>
    );
  }
}
