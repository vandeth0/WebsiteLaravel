import {
  faAngleDoubleDown,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faCoffee,
} from '@fortawesome/free-solid-svg-icons';

export default class Feature extends Component {
  render() {
    return (
      <Fragment>
        <input
          type="checkbox"
          className="d-none"
          name=""
          id="check-down-menu-5"
        />
        <div
          className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 my-2"
          style={{ borderLeft: '3px solid #fff' }}
        >
          <label htmlFor="check-down-menu-5" className="check-down-menu">
            <h4 className="" style={{ color: '#4e53ff' }}>
              Feature
            </h4>
            <FontAwesomeIcon
              icon={faCaretDown}
              className="text-light icon-footer-menu"
            />
          </label>
          <div className="menu-ft-5">
            <NavLink to="#">
              <p>PayCam International</p>
            </NavLink>
            <NavLink to="#">
              <p>WL Paycam Internation</p>
            </NavLink>
            <NavLink to="#">
              <p>Internations Paycam Lottery</p>
            </NavLink>
          </div>
        </div>
      </Fragment>
    );
  }
}
