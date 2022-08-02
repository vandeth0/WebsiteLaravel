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

export default class Paycamltto extends Component {
  render() {
    return (
      <div className="bg-main">
        <div className="language choose1">
          <label htmlFor="choose1">
            <span className="font-a">
              <img
                src="images/photofile/icon paycam 639.png"
                width="25px"
                alt=""
              />
              PayCam Lotto 6/39
            </span>
            <FontAwesomeIcon icon={faCaretDown} />
          </label>

          <div className="choose-language">
            <div>
              <NavLink to="/Solution">
                <img
                  src="images/photofile/solution icon.png"
                  width="25px"
                  alt=""
                />{' '}
                Solution
              </NavLink>
            </div>
            <div>
              <NavLink to="/Draw_Results">
                <img
                  src="images/photofile/equiment icom.png"
                  width="25px"
                  alt=""
                />{' '}
                Draw Results
              </NavLink>
            </div>
            <div>
              <NavLink to="/Lottery_Equipment">
                <img
                  src="images/photofile/equipment-icon.png"
                  width="25px"
                  alt=""
                />{' '}
                Lottery Equipment
              </NavLink>
            </div>
            <div>
              <NavLink to="/How_To_Buy">
                <img src="images/photofile/how to.png" width="25px" alt="" />{' '}
                How To Buy
              </NavLink>
            </div>
            <div>
              <NavLink to="#">
                <img
                  src="images/photofile/store-icon.png"
                  width="25px"
                  alt=""
                />{' '}
                Store
              </NavLink>
            </div>
            <div>
              <NavLink to="/Direct_Management">Direct Management</NavLink>
            </div>
            <div>
              <NavLink to="/Agency">Agency</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
