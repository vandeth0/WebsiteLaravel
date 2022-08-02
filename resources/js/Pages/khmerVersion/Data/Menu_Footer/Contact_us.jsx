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

export default class Contact_us extends Component {
  render() {
    return (
      <Fragment>
        <input
          type="checkbox"
          className="d-none"
          name=""
          id="check-down-menu-2"
        />
        <div
          className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 my-2 font-khmer-language"
          style={{ borderLeft: '3px solid #fff' }}
        >
          <label htmlFor="check-down-menu-2" className="check-down-menu">
            <h4 className="" style={{ color: '#79ceff' }}>
              ទំនាក់ទំនង
            </h4>
            <FontAwesomeIcon
              icon={faCaretDown}
              className="text-light icon-footer-menu"
            />
          </label>
          <div className="menu-ft-2">
            <NavLink to="#">
              <p>+៨៥៥​ ០២៣ ៩១១ ៦៣៩</p>
            </NavLink>
            <a href="https://goo.gl/maps/PUDBbHU1YmtWmbAj9">
              <p>ដាប់បែលយូអិលផេខេម (ខេមបូឌា)</p>
            </a>
            <a href="mailto:help@paycamlotto.com">
              <p>help@paycamlotto.com</p>
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}
