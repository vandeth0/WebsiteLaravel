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

export default class Registration extends Component {
  render() {
    return (
      <Fragment>
        <input
          type="checkbox"
          className="d-none"
          name=""
          id="check-down-menu-6"
        />
        <div
          className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 my-2"
          style={{ borderLeft: '3px solid #fff' }}
        >
          <label htmlFor="check-down-menu-6" className="check-down-menu">
            <h4 className="" style={{ color: '#ffaafe' }}>
              Registration
            </h4>
          </label>
          <div className="menu-ft-6">
            <NavLink to="#">
              <p>Register With Facebook or Gmail</p>
            </NavLink>
            <NavLink to="#">
              <p>Register For Customer</p>
            </NavLink>
            <NavLink to="#">
              <p>Register For User</p>
            </NavLink>
          </div>
        </div>
      </Fragment>
    );
  }
}
