import React, { Component } from 'react';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlignLeft,
  faBars,
  faCaretDown,
  faCoffee,
  faDotCircle,
  faGlobe,
  faMap,
  faMapLocation,
  faMapLocationDot,
  faMapMarked,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export default class How_To_Buy extends Component {
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
              <h4>Paycam Lotto 6/39</h4>
              <p>How To Buy</p>
            </div>

            <div className="col-xl-9 col-lg-9 col-12">
              <h4>Equipment</h4>
              <p>
                Lottery Sales Location <br />
                You can shop at your nearest PAYCAM agent or you can buy at the
                Branch Office, Which has 24 branches in Phnom Penh. You can but
                ar Paycam agent 25 hour. And for redemption of 3 or 4 digits,
                you can exchange with Peck's agent. if it is from 5 digits to 6
                digits, it must be exchange with the company itseft.
              </p>
              <a
                href="https://goo.gl/maps/XhjfDhSDwrsUer7PA"
                target="_blank"
                className="btn"
                style={{
                  background: 'linear-gradient(to right,#9901b7,#460ca7)',
                  color: '#fff',
                }}
              >
                <FontAwesomeIcon icon={faMapLocationDot} /> WL PAYCAM
              </a>
              <a
                href="https://goo.gl/maps/tDL2KLqhEsvDAKJR9"
                target="_blank"
                className="btn"
                style={{
                  background: 'linear-gradient(to right,#9901b7,#460ca7)',
                  color: '#fff',
                }}
              >
                <FontAwesomeIcon icon={faMapMarked} /> Branch Office
              </a>
              <a
                href="https://goo.gl/maps/jgHj6tiWGp97Gxxp8"
                target="_blank"
                className="btn"
                style={{
                  background: 'linear-gradient(to right,#9901b7,#460ca7)',
                  color: '#fff',
                }}
              >
                <FontAwesomeIcon icon={faMapMarked} /> Branch Office
              </a>
              <h4 className="my-3">Our Branch Office</h4>
              <p>
                Play from $1 and up. Can choose 6 numbers out of 39. You can
                choose the number directly, you can also select the auto. Up to
                $100 maximum number. Prize are 3 or more goals.
              </p>
            </div>

            <div className="col-xl-3 col-lg-3 col-12 my-3">
              <img
                src="/images/photofile/branch-office.jpg"
                width="50%"
                alt=""
              />
              <img src="/images/photofile/13412def2.png" width="50%" alt="" />
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
