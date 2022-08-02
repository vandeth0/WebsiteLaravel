import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faCoffee,
} from '@fortawesome/free-solid-svg-icons';

export default class Image_slider extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 border" style={{ padding: '0' }}>
            <div className="slider-frame border">
              <div className="slide-images">
                <div className="img-container">
                  <img
                    width="100%"
                    height="100%"
                    src="images/photofile/Coffee promotion Paycam123.jpg"
                    alt=""
                  />
                </div>
                <div className="img-container">
                  <img
                    width="100%"
                    height="100%"
                    src="images/photofile/coffee background 1500px x 3000px-01 copy123.jpg"
                    alt=""
                  />
                </div>
                <div className="img-container">
                  <img
                    width="100%"
                    height="100%"
                    src="images/photofile/background 1500px x 3000px-011234.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
