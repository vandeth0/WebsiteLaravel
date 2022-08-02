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
      <div className="bg-main font-khmer-language">
        <div className="language choose2">
          <label htmlFor="choose2">
            <span className="font-a">
              <img src="images/photofile/trophy.png" width="25px" alt="" />{' '}
              លទ្ធផលឆ្នោតឡូតូ{' '}
            </span>
            <FontAwesomeIcon icon={faCaretDown} />
          </label>

          <div className="choose-language">
            <div>
              <NavLink to="/All_Winning_NumbersKH">
                <img
                  src="images/photofile/all winning.png"
                  width="25px"
                  alt=""
                />{' '}
                ​លទ្ធផលគ្រាប់ឡូតូទាំងអស់
              </NavLink>
            </div>
            <div>
              <NavLink to="/Check_Winning_NumbersKH">
                <img
                  src="images/photofile/checking winning.png"
                  width="25px"
                  alt=""
                />{' '}
                ពិនិត្យមើលលទ្ធផលគ្រាប់ឡូតូ
              </NavLink>
            </div>
            <div>
              <NavLink to="/Details_of_WinnersKH">
                <img
                  src="images/photofile/detail-icon.png"
                  width="25px"
                  alt=""
                />{' '}
                ព័ត៌មានលំអិតនៃការឈ្នះឆ្នោត
              </NavLink>
            </div>
            <div>
              <NavLink to="/How_To_Get_Your_PrizesKH">
                <img src="images/photofile/get prize.png" width="25px" alt="" />{' '}
                ព័ត៌មានលំអិតនៃរង្វាន់
              </NavLink>
            </div>
            <div>
              <NavLink to="/Draw_BroadcastKH">
                <img
                  src="images/photofile/broadcasting.png"
                  width="25px"
                  alt=""
                />{' '}
                ការផ្សាយឆ្នោតឡូតូ
              </NavLink>
            </div>
            <div>
              <NavLink to="#">
                <img
                  src="images/photofile/store-icon.png"
                  width="25px"
                  alt=""
                />{' '}
                ហាងឈ្នះរង្វាន់
              </NavLink>
            </div>
            <div>
              <NavLink to="/Weekly_LotteryKH"> ឆ្នោតប្រចាំសប្ដាហ៍</NavLink>
            </div>
            <div>
              <NavLink to="/Instant_LotteryKH"> ឆ្នោតភ្លាមៗ</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
