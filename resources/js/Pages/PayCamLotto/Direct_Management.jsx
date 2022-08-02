import React, { Component } from 'react';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';

export default class Direct_Management extends Component {
  render() {
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

            <div className="col-12 text-center">
              <h4>Direct Management</h4>
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
              <h4>Direct Management</h4>
            </div>

            <hr />

            <div className="col-12">
              <h4>Our Agency</h4>
              <p>You can shop at your nearest PAYCAM agent.</p>
              <img
                src="images/photofile/agent of paycam.png"
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
                src="images/photofile/map cambodia.jpg"
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

            <div className="col-12">
              <h4>Our Agent</h4>
              <p>You can find our agency’s PayCam in map below.</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62533.08278477522!2d104.8508212!3d11.6006858!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31094f96ab30e4cf%3A0x705aca340d7bbc14!2sWL%20Paycam%20(Cambodia)%20Co.%2C%20LTD!5e0!3m2!1sko!2skr!4v1640827928130!5m2!1sko!2skr"
                width="100%"
                height="600px"
                id="iframe-draw-result"
                frameBorder="0"
                style={{
                  borderTop: '10px solid #460ca7',
                  borderBottom: '10px solid #9901b7',
                  borderLeft: '10px solid #460ca7',
                  borderRight: '10px solid #9901b7',
                }}
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
