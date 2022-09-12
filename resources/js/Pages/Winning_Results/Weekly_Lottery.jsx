import React, { Component } from 'react';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';

import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faCoffee,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import Ball_List from '../Desk/Ball_List';

export default class Weekly_Lottery extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 my-2">
              <h4>Winning Results</h4>
              <p>Weekly lottery</p>
            </div>

            <div className="col-12">
              <h4>Weekly lottery</h4>
            </div>

            <hr />

            <div className="col-12">
              <h4>Our Agency</h4>
              <p>
                You can shop at your nearest PAYCAM agent. You can buy at Paycam
                agents 24 hours.
              </p>
            </div>
            <div className="col-12">
              <h4>Weekly Lottery</h4>
            </div>

            <div className="col-6 text-center">
              <p>Winner</p>
              <p>Prize</p>
            </div>

            <div className="col-6 text-center">
              <p>Name</p>
              <p>$--</p>
            </div>
            <hr />
            <div className="col-12 my-5 d-flex justify-content-center">
              <Ball_List />
            </div>
          </div>
        </div>
        <div>
          <Main_footer />
        </div>
      </>
    );
  }
}
