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

export default class Winning_Results extends Component {
  render() {
    return (
      <div className="bg-main">
        <div className="language choose2">
          <label htmlFor="choose2">
            <span className="font-a">
              <img src="images/photofile/trophy.png" width="25px" alt="" />{' '}
              Winning Results{' '}
            </span>
            <FontAwesomeIcon icon={faCaretDown} />
          </label>

          <div className="choose-language">
            <div>
              <NavLink to="/All_Winning_Numbers">
                <img
                  src="images/photofile/all winning.png"
                  width="25px"
                  alt=""
                />{' '}
                All Winning Numbers
              </NavLink>
            </div>
            <div>
              <NavLink to="/Check_Winning_Numbers">
                <img
                  src="images/photofile/checking winning.png"
                  width="25px"
                  alt=""
                />{' '}
                Check Winning Numbers
              </NavLink>
            </div>
            <div>
              <NavLink to="/Details_of_Winners">
                <img
                  src="images/photofile/detail-icon.png"
                  width="25px"
                  alt=""
                />{' '}
                Details of Winners
              </NavLink>
            </div>
            <div>
              <NavLink to="/How_To_Get_Your_Prizes">
                <img src="images/photofile/get prize.png" width="25px" alt="" />{' '}
                How To Get Your Prizes
              </NavLink>
            </div>
            <div>
              <NavLink to="/Draw_Broadcast">
                <img
                  src="images/photofile/broadcasting.png"
                  width="25px"
                  alt=""
                />{' '}
                Draw Broadcast
              </NavLink>
            </div>
            <div>
              <NavLink to="#">
                <img
                  src="images/photofile/store-icon.png"
                  width="25px"
                  alt=""
                />{' '}
                Winner Stories
              </NavLink>
            </div>
            <div>
              <NavLink to="/Weekly_Lottery"> Weekly Lottery</NavLink>
            </div>
            <div>
              <NavLink to="/Instant_Lottery"> Instant Lottery</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
