import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import BallShow from './BallShow';

export default class Ball_List extends Component {
  render() {
    return (
      <div className="col-12 my-3 text-center">
        <div className="" style={{ backgroundColor: '#fff', padding: '25px' }}>
          <h4 style={{ fontWeight: 'bold' }}>Lottery Number Draw Results</h4>
          <p className="text-secondary font-list-a">
            Lottery will be broadcast live at 8:00 Night <br />
            on TV9 every Tuesday
          </p>

          <div>
            <ul className="list-ball-body">
              <BallShow />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
