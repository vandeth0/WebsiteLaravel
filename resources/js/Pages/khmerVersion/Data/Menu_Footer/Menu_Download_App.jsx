import {
  faAngleDoubleDown,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faCoffee,
} from '@fortawesome/free-solid-svg-icons';

export default class Menu_Download_App extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
          <img src="images/photofile/logo-paycam1231.png" width="100%" alt="" />
        </div>

        <div className="font-khmer-language col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 d-flex align-items-center justify-content-center">
          <div className="text-center">
            <h4 className="text-light">ទាញយកកម្មវិធីតាម ៖</h4>
            <img
              src="images/photofile/logo app paycam.png"
              width="100px"
              alt=""
            />
            <img
              src="images/photofile/download-play-store.png"
              width="200px"
              alt=""
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
