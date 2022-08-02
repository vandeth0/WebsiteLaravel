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

export default class Company extends Component {
  render() {
    return (
      <Fragment>
        <input
          type="checkbox"
          className="d-none"
          name=""
          id="check-down-menu-4"
        />
        <div
          className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 my-2"
          style={{ borderLeft: '3px solid #fff' }}
        >
          <label htmlFor="check-down-menu-4" className="check-down-menu">
            <h4 className="" style={{ color: '#ff9d34' }}>
              Company
            </h4>
            <FontAwesomeIcon
              icon={faCaretDown}
              className="text-light icon-footer-menu"
            />
          </label>
          <div className="menu-ft-4">
            <NavLink to="/Terms_of_Service">
              <p>Terms of Service</p>
            </NavLink>
            <NavLink to="/Policy_and_Privacy">
              <p>Policy & Privacy</p>
            </NavLink>
            <NavLink to="/FAQ">
              <p>FAQ</p>
            </NavLink>
          </div>
        </div>
      </Fragment>
    );
  }
}
