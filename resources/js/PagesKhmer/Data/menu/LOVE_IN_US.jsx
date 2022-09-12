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
      <div className="bg-main font-khmer-language">
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
              <NavLink to="/khmer/loveinus/Lottery_Funds_Social">
                <img
                  src="/images/photofile/Lottery funds Social.png"
                  width="25px"
                  alt=""
                />{' '}
                មូលនិធិឆ្នោតសង្គម
              </NavLink>
            </div>
            <div>
              <NavLink to="/khmer/loveinus/Social_Contribution">
                <img
                  src="/images/photofile/Social contribution icon.png"
                  width="25px"
                  alt=""
                />{' '}
                ការរួមចំណែកក្នុងសង្គម
              </NavLink>
            </div>
            <div>
              <NavLink to="/khmer/loveinus/Community_Service">
                <img
                  src="/images/photofile/community-cion.png"
                  width="25px"
                  alt=""
                />{' '}
                សេវាកម្មសហគមន៍
              </NavLink>
            </div>
            <div>
              <NavLink to="/khmer/loveinus/Donation_Report">
                <img
                  src="/images/photofile/detail-icon.png"
                  width="25px"
                  alt=""
                />{' '}
                របាយការណ៏បរិច្ចាគ
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
