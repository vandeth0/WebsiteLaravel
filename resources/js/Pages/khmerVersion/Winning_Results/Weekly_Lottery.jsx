import React, { Component } from 'react';
import Main_header from '../Data/Main_header';
import Main_footer from '../Data/Main_footer';
import Ball_List from '../Desk_khmer/Ball_List';

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

export default class Weekly_Lottery extends Component {
  render() {
    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="container font-khmer-language">
          <div className="row">
            <div className="col-12 my-4">
              <h4>លទ្ធផលឆ្នោតឡូតូ</h4>
              <p>ឆ្នោតប្រចាំសប្ដាហ៍</p>
            </div>

            <div className="col-12 text-center">
              <h4>ឆ្នោតប្រចាំសប្ដាហ៍</h4>
            </div>

            <div className="col-12 mb-4 d-flex justify-content-center">
              <div
                style={{
                  height: '7px',
                  width: '25px',
                  background: '#00bbff',
                  float: 'left',
                }}
              ></div>
              <div
                style={{
                  height: '7px',
                  width: '25px',
                  background: '#ff0000',
                  float: 'left',
                }}
              ></div>
              <div
                style={{
                  height: '7px',
                  width: '25px',
                  background: '#6426ff',
                  float: 'left',
                }}
              ></div>
            </div>

            <div className="col-12">
              <h4>ឆ្នោតប្រចាំសប្ដាហ៍</h4>
            </div>

            <hr />

            <div className="col-12">
              <h4>ទីភ្នាក់ងាររបស់ផេខេម</h4>
              <p>
                អ្នកអាចទិញទំនិញនៅភ្នាក់ងារ PAYCAM ដែលនៅជិតលោកអ្នកបំផុត។
                អ្នកអាចទិញនៅភ្នាក់ងារ Paycam 24 ម៉ោង។
              </p>
            </div>
            <div className="col-12">
              <h4>ឆ្នោតប្រចាំសប្ដាហ៍</h4>
            </div>

            <div className="col-6 text-center">
              <p>អ្នកឈ្នះ</p>
              <p>រង្វាន់</p>
            </div>

            <div className="col-6 text-center">
              <p>ឈ្មោះ</p>
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
