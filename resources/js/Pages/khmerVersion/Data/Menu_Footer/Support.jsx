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

export default class Support extends Component {
  render() {
    return (
      <Fragment>
        <input
          type="checkbox"
          className="d-none"
          name=""
          id="check-down-menu-3"
        />
        <div
          className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 my-2 font-khmer-language"
          style={{ borderLeft: '3px solid #fff' }}
        >
          <label htmlFor="check-down-menu-3" className="check-down-menu">
            <h4 className="" style={{ color: '#00ff51' }}>
              ជំនួយ
            </h4>
            <FontAwesomeIcon
              icon={faCaretDown}
              className="text-light icon-footer-menu"
            />
          </label>
          <div className="menu-ft-3">
            <NavLink to="/QnAKH">
              <p>ការផ្ដល់មតិយោបល់</p>
            </NavLink>
            <NavLink to="/QnAKH">
              <p>សំនួរ និង ចម្លើយ</p>
            </NavLink>
            <NavLink to="/QnAKH">
              <p>បញ្ហា</p>
            </NavLink>
          </div>
        </div>
      </Fragment>
    );
  }
}
