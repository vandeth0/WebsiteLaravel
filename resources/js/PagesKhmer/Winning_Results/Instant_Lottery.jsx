import React, { Component } from 'react';
import Main_header from 'PagesKhmer/Data/Main_header';
import Main_footer from 'PagesKhmer/Data/Main_footer';

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

export default class Instant_Lottery extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="container font-khmer-language">
          <div className="row">
            <div className="col-12 my-4">
              <h4>លទ្ធផលឆ្នោតឡូតូ</h4>
              <p> ឆ្នោតភ្លាមៗ</p>
            </div>

            <div className="col-12">
              <img
                className="my-5"
                src="/images/photofile/comming soon.png"
                width="100%"
                alt=""
              />
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
