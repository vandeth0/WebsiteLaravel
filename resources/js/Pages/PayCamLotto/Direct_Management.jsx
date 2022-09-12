import React, { Component } from 'react';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';
import GoogleMaps from './GoogleMaps';

export default class Direct_Management extends Component {
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
              <p>Direct Management</p>
            </div>

            <div className="col-12">
              <h4>Direct Management</h4>
            </div>

            <hr />

            <div className="col-xl-9 col-lg-9 col-12">
              <h4>Our Agency</h4>
              <p>You can shop at your nearest PAYCAM agent.</p>
              <img
                src="/images/photofile/agent of paycam.png"
                className="my-3"
                width="250px"
                style={{
                  background: 'linear-gradient(to right, #9901b7,#460ca7)',
                  borderRadius: '50%',
                  padding: '5px',
                }}
                alt=""
              />
              <p>
                Paycam has up to 200 agents in Phnom Penh, you can buy at your
                nearest agency.
              </p>
              <img
                className="my-3"
                src="/images/photofile/map cambodia.jpg"
                width="100%"
                alt=""
                style={{
                  borderTop: '10px solid #460ca7',
                  borderBottom: '10px solid #9901b7',
                  borderLeft: '10px solid #460ca7',
                  borderRight: '10px solid #9901b7',
                }}
              />
            </div>

            <div className="col-xl-3 col-lg-3 col-12 ">
              <h4>Our Agent</h4>
              <p>You can find our agency’s PayCam in map below.</p>
              <GoogleMaps />
              <iframe
                src="https://www.youtube.com/embed/x5yzatBFS5Y"
                width="100%"
                frameBorder="0"
              ></iframe>
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
