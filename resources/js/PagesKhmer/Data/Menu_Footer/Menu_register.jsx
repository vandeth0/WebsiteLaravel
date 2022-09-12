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

export default class menu_register extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <p>Company Registration Number : EOBR2021070500026275</p>
          <p>Email : help@paycamlotto.com</p>
          <p>
            Address : #758, Kraing Chrey Street Samrong Teav Village, Sangkat
            Kaing Thnong, Khan Sen Sok Phnom Penh
          </p>

          <div className="input-group">
            <span
              className="input-group-text"
              style={{
                background: 'linear-gradient(to right,#9901b7,#460ca7)',
                color: '#fff',
              }}
            >
              GET STARTED
            </span>
            <input
              type="text"
              className="form-control"
              name=""
              id=""
              placeholder="name@example.com"
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
