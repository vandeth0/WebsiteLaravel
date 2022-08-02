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
      <div className="bg-main font-khmer-language">
        <div className="language choose1">
          <label htmlFor="choose1">
            <span className="font-a">
              <img
                src="images/photofile/icon paycam 639.png"
                width="25px"
                alt=""
              />
              ផេខេម​ ឡូតូ ៦/៣៩
            </span>
            <FontAwesomeIcon icon={faCaretDown} />
          </label>

          <div className="choose-language">
            <div>
              <NavLink to="/ដំណោះស្រាយ">
                <img
                  src="images/photofile/solution icon.png"
                  width="25px"
                  alt=""
                />{' '}
                ដំណោះស្រាយ
              </NavLink>
            </div>
            <div>
              <NavLink to="/លទ្ធផលការចាប់ឆ្នោត">
                <img
                  src="images/photofile/equiment icom.png"
                  width="25px"
                  alt=""
                />{' '}
                លទ្ធផលការចាប់ឆ្នោត
              </NavLink>
            </div>
            <div>
              <NavLink to="/ឧបករណ៍ឆ្នោត">
                <img
                  src="images/photofile/equipment-icon.png"
                  width="25px"
                  alt=""
                />{' '}
                ឧបករណ៍ឆ្នោត
              </NavLink>
            </div>
            <div>
              <NavLink to="/របៀបទិញ">
                <img src="images/photofile/how to.png" width="25px" alt="" />{' '}
                របៀបទិញ
              </NavLink>
            </div>
            <div>
              <NavLink to="#">
                <img
                  src="images/photofile/store-icon.png"
                  width="25px"
                  alt=""
                />{' '}
                ហាង
              </NavLink>
            </div>
            <div>
              <NavLink to="/ការគ្រប់គ្រងផ្ទាល់">ការគ្រប់គ្រងផ្ទាល់</NavLink>
            </div>
            <div>
              <NavLink to="/ទីភ្នាក់ងារ">ទីភ្នាក់ងារ</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
