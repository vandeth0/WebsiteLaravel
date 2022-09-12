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
      <div className="bg-main font-khmer-language">
        <div className="language choose3">
          <label htmlFor="choose3">
            <span className="font-a">
              <img
                src="/images/photofile/community-icon.png"
                width="25px"
                alt=""
              />{' '}
              សហគមន៍{' '}
            </span>
            <FontAwesomeIcon icon={faCaretDown} />
          </label>

          <div className="choose-language">
            <div>
              <NavLink to="/khmer/community/Notice">
                <img src="/images/photofile/notice.png" width="25px" alt="" />{' '}
                សេចក្ដីជូនដំណឹង
              </NavLink>
            </div>
            <div>
              <NavLink to="/khmer/community/WL_PAYCAM_Event">
                <img
                  src="/images/photofile/wl events.png"
                  width="25px"
                  alt=""
                />{' '}
                កម្មវិធីរបស់ផេខេម
              </NavLink>
            </div>
            <div>
              <NavLink to="/khmer/community/News">
                <img
                  src="/images/photofile/news-icon.png"
                  width="25px"
                  alt=""
                />{' '}
                ព័ត៌មាន
              </NavLink>
            </div>
            <div>
              <NavLink to="/khmer/community/News_of_PLP">
                <img
                  src="/images/photofile/news-icon.png"
                  width="25px"
                  alt=""
                />{' '}
                ព័ត៌មាននៃ​(PLP)
              </NavLink>
            </div>
            <div>
              <NavLink to="/khmer/community/Store_of_The_Week">
                <img
                  src="/images/photofile/store-icon.png"
                  width="25px"
                  alt=""
                />{' '}
                ហាងប្រចាំសប្ដាហ៏
              </NavLink>
            </div>
            <div>
              <NavLink to="/khmer/community/QnA">
                <img src="/images/photofile/qna.png" width="25px" alt="" />{' '}
                សំនួរ និង ចម្លើយ
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
