import {
  faAngleDoubleDown,
  faCaretDown,
  faGlobe,
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

export default class Social_Lick extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 menu-list-footer">
          <h4 className="text-light">Follow us :</h4>
          <a
            href="https://www.youtube.com/channel/UCmUFVzBi1gymawt1Pwt58Gw/featured"
            className="m-2"
            target="_blank"
          >
            <img src="images/photofile/youtube-icon.png" width="30px" alt="" />
          </a>
          <a
            href="https://twitter.com/official_paycam"
            className="m-2"
            target="_blank"
          >
            <img src="images/photofile/twitter-12.png" width="30px" alt="" />
          </a>
          <a
            href="https://www.instagram.com/paycam_official/"
            className="m-2"
            target="_blank"
          >
            <img src="images/photofile/instagram=123.png" width="30px" alt="" />
          </a>
          <a href="mailto:help@paycamlotto.com" className="m-2" target="_blank">
            <img src="images/photofile/google.png" width="30px" alt="" />
          </a>
          <a
            href="https://web.facebook.com/paycamcambodia/"
            className="m-2"
            target="_blank"
          >
            <img src="images/photofile/facebook1231.png" width="30px" alt="" />
          </a>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-end align-items-center">
          <div>
            <img
              src="images/photofile/usa-logo.png"
              width="25px"
              height="15px"
              alt=""
            />
          </div>

          <div className="choose-language-ft">
            <input
              type="checkbox"
              className="d-none"
              name=""
              id="choose-language-footer"
            />
            <label htmlFor="choose-language-footer" className="c-l">
              <FontAwesomeIcon icon={faGlobe} /> | Language
            </label>

            <div className="language-country">
              <ul>
                <li>
                  <NavLink to="/ទំព័រដើម">
                    <img
                      src="images/photofile/1200px-Flag_of_Cambodia.svg.png"
                      width="25px"
                      height="15px"
                      alt=""
                    />
                    Cambodia
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <img
                      src="images/photofile/usa-logo.png"
                      width="25px"
                      height="15px"
                      alt=""
                    />
                    United States
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
