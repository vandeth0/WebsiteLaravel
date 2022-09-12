import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faCoffee,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

export default class Ball_List_User extends Component {
  render() {
    const changValue = (e) => {};
    const array1 = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    ];

    // pass a function to map
    const map1 = array1.map((x, idx) => (
      <li key={idx} onClick={changValue(idx)}>
        <div> {x} </div>
      </li>
    ));

    const arrayball = [1, 9, 13, 24, 29, 30];
    const colorBall = [
      '#006838',
      '#BE1E2D',
      '#2B3990',
      '#006838',
      '#BE1E2D',
      '#2B3990',
    ];

    // pass a function to map
    const mapball = arrayball.map((ball, idx) => (
      <li key={idx}>
        <div className="ball-list" style={{ backgroundColor: colorBall[idx] }}>
          <span className="ball-list-1"></span>
          <span className="ball-list-2"></span>
          <span className="ball-list-3"></span>
          <span className="ball-list-4"></span>
          <div className="color-ball">
            <span>
              <input type="text" name="" id="" />
            </span>
          </div>
        </div>
      </li>
    ));

    // console.log(map1);
    // expected output: Array [2, 8, 18, 32]
    return (
      <div className="col-xl-6 col-12 my-3 text-center">
        <div className="" style={{ backgroundColor: '#fff', padding: '25px' }}>
          <h4 style={{ fontWeight: 'bold' }}>Select Your Lottery Numbers</h4>
          <p className="text-secondary font-list-a">
            Lottery will be broadcast live at 8:00 Night <br />
            on TV9 every Tuesday
          </p>
          <div className="" style={{ textAlign: 'left' }}>
            <span className="text-secondary">
              Choose your lucky numbers you love below
            </span>
          </div>

          <div>
            <ul className="list-ball-body">{mapball}</ul>
          </div>

          <div className="row my-3">
            <div className="col-12">
              <ul className="select-num">
                {map1}
                <li>
                  <div>
                    <FontAwesomeIcon icon={faXmark} />
                  </div>
                </li>
                <li>
                  <div>C</div>
                </li>
              </ul>
            </div>

            <div className="col-12">
              <div className="confirm">Confirm</div>
              <div
                className="confirm "
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0 10px',
                }}
              >
                <span>$</span> <span>12,435</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="input-group">
                <span
                  style={{
                    background: 'linear-gradient(to right, #9901b7,#460ca7)',
                    color: ' #fff',
                  }}
                  className="input-group-text"
                >
                  A
                </span>
                <input
                  type="text"
                  className="form-control text-center"
                  placeholder="- Select The Number -"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
