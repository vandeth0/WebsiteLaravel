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

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <input
          type="checkbox"
          className="d-none"
          name=""
          id="check-down-menu-1"
        />
        <div
          className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 my-2 font-khmer-language"
          style={{ borderLeft: '3px solid #fff' }}
        >
          <label htmlFor="check-down-menu-1" className="check-down-menu">
            <h4 className="" style={{ color: '#d4d4d4' }}>
              ព័ត៌មានអំពីក្រុមហ៊ុន​
            </h4>
            <FontAwesomeIcon
              icon={faCaretDown}
              className="text-light icon-footer-menu"
            />
          </label>
          <div className="menu-ft-1">
            <NavLink to="/PayCam_Lotto_ProtocolKH">
              <p>PayCam Lotto Protocol</p>
            </NavLink>
            <NavLink to="/WL_PAYCAM_CAMBODIAKH">
              <p>WL PAYCAM(CAMBODIA)</p>
            </NavLink>
            <NavLink to="/Hobakdungkul_HoldingsKH">
              <p>Hobakdungkul Holdings</p>
            </NavLink>
          </div>
        </div>
      </Fragment>
    );
  }
}
