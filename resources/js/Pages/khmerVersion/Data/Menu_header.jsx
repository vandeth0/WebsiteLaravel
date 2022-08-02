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
    this.store = props.root.loginProvider;
  }
  render() {
    const { session } = this.store;
    return (
      <div className="col-xl-9 col-lg-9 col-md-9 col-12 d-flex justify-content-end j-c-e align-items-center menu-header-logo font-khmer-language">
        <input type="checkbox" className="d-none" name="" id="check1"></input>
        <div className="logo-moblie-2">
          <NavLink to="/ទំព័រដើម">
            <img
              src="images/photofile/paycam-logo horizontal copy border-white.png"
              width="130px"
              alt=""
            />
          </NavLink>
        </div>

        <div>
          <input type="checkbox" className="d-none" name="" id="info-check" />
          <div className="main-info">
            <label htmlFor="info-check" className="btn btn-dark">
              <FontAwesomeIcon icon={faHome} /> Back
            </label>
            <Information />
          </div>
        </div>

        <div className="d-flex justify-content-end j-c-e align-items-center">
          {session.username === 'admin' && session.password ? (
            <label htmlFor="info-check" className="text-warning">
              <FontAwesomeIcon icon={faInfoCircle} />
              <span className="text-mobile-info"> ព័ត៍មាន | </span>
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
              <FontAwesomeIcon icon={faGlobe} /> ភាសា
            </label>

            <div className="language-country-up language-country">
              <ul>
                <li>
                  <NavLink to="/ទំព័រដើម">
                    <img
                      src="images/photofile/1200px-Flag_of_Cambodia.svg.png"
                      width="25px"
                      height="15px"
                      alt=""
                    />
                    ខ្មៃរ
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <img
                      src="images/photofile/usa-logo.png"
                      width="25px"
                      height="15px"
                      alt=""
                    />
                    អង់គ្លេស
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {session.username === 'admin' && session.password ? (
            <button
              className="btn"
              onClick={(e) => {
                e.stopPropagation();
                this.store.logOutSession();
              }}
            >
              <FontAwesomeIcon icon={faDoorOpen} /> ចាកចេញ
            </button>
          ) : (
            <button className="btn ">
              <NavLink
                to="/LoginUserKH"
                className=""
                style={{ textDecoration: 'none', color: '#fa69ff' }}
              >
                <FontAwesomeIcon icon={faUser} /> គណនី
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