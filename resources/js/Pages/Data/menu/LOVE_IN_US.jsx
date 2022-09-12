import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faCaretDown,
  faCoffee,
} from '@fortawesome/free-solid-svg-icons';

export default class LOVE_IN_US extends Component {
  render() {
    return (
      <div className="bg-main">
        <div className="language choose4">
          <label htmlFor="choose4">
            <span className="font-a">
              <img
                src="/images/photofile/love in us-icon.png"
                width="25px"
                alt=""
              />{' '}
              LOVE IN US{' '}
            </span>
            <FontAwesomeIcon icon={faCaretDown} />
          </label>

          <div className="choose-language">
            <div>
              <NavLink to="/loveinus/Lottery_Funds_Social">
                <img
                  src="/images/photofile/Lottery funds Social.png"
                  width="25px"
                  alt=""
                />{' '}
                Lottery Funds Social
              </NavLink>
            </div>
            <div>
              <NavLink to="/loveinus/Social_Contribution">
                <img
                  src="/images/photofile/Social contribution icon.png"
                  width="25px"
                  alt=""
                />{' '}
                Social Contribution
              </NavLink>
            </div>
            <div>
              <NavLink to="/loveinus/Community_Service">
                <img
                  src="/images/photofile/community-cion.png"
                  width="25px"
                  alt=""
                />{' '}
                Community Service
              </NavLink>
            </div>
            <div>
              <NavLink to="/loveinus/Donation_Report">
                <img
                  src="/images/photofile/detail-icon.png"
                  width="25px"
                  alt=""
                />{' '}
                Donation Report
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
