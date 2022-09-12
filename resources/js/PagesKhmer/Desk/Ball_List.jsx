import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import BallShow from './BallShow';

export default class Ball_List extends Component {
  render() {
    return (
      <div className="col-12 my-3 text-center">
        <div className="" style={{ backgroundColor: '#fff', padding: '25px' }}>
          <h4 style={{ fontWeight: 'bold' }}>លទ្ធផលការចាប់លេខឆ្នោតឡូតូ</h4>
          <p className="text-secondary font-list-a">
            ឆ្នោតនឹងផ្សាយផ្ទាល់នៅម៉ោង ៨ យប់ <br />
            នៅលើកញ្ចក់ទូរទស្សន៍ប៉ុស្តិ៍ លេខ៩ រៀងរាល់ថ្ងៃអង្គារ
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
