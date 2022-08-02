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

export default class Community extends Component {
  render() {
    return (
      <div className="bg-main">
        <div className="language choose3">
          <label htmlFor="choose3">
            <span className="font-a">
              <img
                src="images/photofile/community-icon.png"
                width="25px"
                alt=""
              />{' '}
              Community{' '}
            </span>
            <FontAwesomeIcon icon={faCaretDown} />
          </label>

          <div className="choose-language">
            <div>
              <NavLink to="/Notice">
                <img src="images/photofile/notice.png" width="25px" alt="" />{' '}
                Notice
              </NavLink>
            </div>
            <div>
              <NavLink to="/WL_PAYCAM_Event">
                <img src="images/photofile/wl events.png" width="25px" alt="" />{' '}
                WL PAYCAM Event
              </NavLink>
            </div>
            <div>
              <NavLink to="/News">
                <img src="images/photofile/news-icon.png" width="25px" alt="" />{' '}
                News
              </NavLink>
            </div>
            <div>
              <NavLink to="/News_of_PLP">
                <img src="images/photofile/news-icon.png" width="25px" alt="" />{' '}
                News of PLP
              </NavLink>
            </div>
            <div>
              <NavLink to="/Store_of_The_Week">
                <img
                  src="images/photofile/store-icon.png"
                  width="25px"
                  alt=""
                />{' '}
                Store of The Week
              </NavLink>
            </div>
            <div>
              <NavLink to="/QnA">
                <img src="images/photofile/qna.png" width="25px" alt="" /> QnA
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
