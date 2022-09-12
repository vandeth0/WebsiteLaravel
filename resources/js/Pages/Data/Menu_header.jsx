import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCoffee,
  faDoorOpen,
  faGlobe,
  faHome,
  faInfo,
  faInfoCircle,
  faRunning,
  faTimesCircle,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Information from './Information';
import { inject, observer } from 'mobx-react';

@inject('root')
@observer
export default class Menu_header extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.userLoginProvider;
    this.store.readUserLogin();
  }
  render() {
    const { session, sessionall, style } = this.store;
    return (
      <div className=" col-xl-9 col-lg-9 col-md-9 col-12 d-flex justify-content-end j-c-e align-items-center menu-header-logo">
        <input type="checkbox" className="d-none" name="" id="check1"></input>
        <div className="logo-moblie-2">
          <NavLink to="/">
            <img
              src="/images/photofile/paycam cambodiajpg.jpg"
              width="130px"
              alt=""
            />
          </NavLink>
        </div>

        <div>
          <input type="checkbox" className="d-none" name="" id="info-check" />
          <div className="main-info">
            <label htmlFor="info-check" className="btn btn-dark">
              <FontAwesomeIcon icon={faHome} /> BACK
            </label>
            <Information />
          </div>
        </div>

        <div className="d-flex justify-content-end j-c-e align-items-center">
          {session.username == sessionall.username &&
          session.password == sessionall.password ? (
            <label
              htmlFor="info-check"
              className="text-warning"
              style={{ display: style }}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              <span className="text-mobile-info"> Info | </span>
            </label>
          ) : (
            ''
          )}

          <div className="moblie-language choose-language-ft">
            <input
              type="checkbox"
              className="d-none"
              name=""
              id="choose-language-footer-1"
            />
            <label
              htmlFor="choose-language-footer-1"
              className="c-l text-primary"
            >
              <FontAwesomeIcon icon={faGlobe} /> Language
            </label>

            <div className="language-country-up language-country">
              <ul>
                <li>
                  <NavLink to="/khmer">
                    <img
                      src="/images/photofile/1200px-Flag_of_Cambodia.svg.png"
                      width="25px"
                      height="15px"
                      alt=""
                    />
                    Cambodia
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <img
                      src="/images/photofile/usa-logo.png"
                      width="25px"
                      height="15px"
                      alt=""
                    />
                    United States
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {session.username == sessionall.username &&
          session.password == sessionall.password ? (
            <button
              style={{ display: style }}
              className="btn"
              onClick={(e) => {
                e.stopPropagation();
                this.store.logOutSession();
              }}
            >
              <FontAwesomeIcon icon={faDoorOpen} /> Log Out
            </button>
          ) : (
            <button className="btn ">
              <NavLink
                to="/LoginUser"
                className=""
                style={{ textDecoration: 'none', color: '#fa69ff' }}
              >
                <FontAwesomeIcon icon={faUser} /> Login
              </NavLink>
            </button>
          )}

          <label htmlFor="check-menu" className="check-menu btn mx-1">
            {' '}
            <FontAwesomeIcon icon={faBars} />
          </label>
        </div>
      </div>
    );
  }
}
