import React, { Component } from 'react';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';

export default class Agency extends Component {
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
              <p>Agency</p>
            </div>

            <div className="col-12 text-center">
              <h4>Agency</h4>
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
              <h4>Agency</h4>
            </div>

            <hr />

            <div className="col-12">
              <h4>Our Agency</h4>
              <p>
                You can shop at your nearest PAYCAM agent. You can buy at Paycam
                agents 24 hours.
              </p>
            </div>

            <div className="col-12 my-5">
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
