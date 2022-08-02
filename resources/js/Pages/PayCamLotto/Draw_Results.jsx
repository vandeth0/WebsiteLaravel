import React, { Component } from 'react';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';

export default class Draw_Results extends Component {
  render() {
    const array = [
      '1st',
      '2nd',
      '3rd',
      '4th',
      '5th',
      '6th',
      '7th',
      '8th',
      '9th',
      '10th',
      '11th',
      '12th',
      '13th',
      '14th',
      '15th',
      '16th',
    ];

    const data_show_live = array.map((x, idx) => (
      <a key={idx} href="https://www.youtube.com/embed/RBvdeagLVS8" target="a">
        <button
          className="btn px-4 mx-1"
          style={{
            background: 'linear-gradient(to right,#9901b7,#460ca7)',
            color: '#fff',
          }}
        >
          {x}
        </button>
      </a>
    ));

    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 my-2">
              <h4>Paycam Lotto 6/39</h4>
              <p>Draw Results</p>
            </div>

            <div className="col-12 text-center">
              <h4>Draw Results</h4>
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
              <h4>Draw Results</h4>
              <p>
                International Lottery Results <br />
                Live Lotto Lucky Draw Show
              </p>
            </div>
            <div
              className="col-12"
              style={{
                whiteSpace: 'nowrap',
                overflowY: 'hidden',
                overflowX: ' auto',
              }}
            >
              {data_show_live}
            </div>
            <hr className="my-3" />
            <div className="col-12">
              <iframe
                name="a"
                src=""
                frameBorder="0"
                width="100%"
                height="350px"
              ></iframe>
              <p>
                With such as vast range of lotteries available for you to play,
                and the ease of access we all have to the Internet nowadays many
                people prefer to quickly check their lottery results online. If
                you have bought a lottery ticket, then you will be anxious to
                find out what the winning numbers are for that specific draw.
              </p>
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
