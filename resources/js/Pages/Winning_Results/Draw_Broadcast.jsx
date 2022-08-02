import React, { Component } from 'react';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';

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
export default class Draw_Broadcast extends Component {
  render() {
    const array1 = ['12th', '11th', '10th'];
    const array2 = [
      ' WL PAYCAM(CAMBODIA)CO.,LTD님의 실시간 스트림 lotto 639 Lucky Draw 7th,June 2022',
      ' WL PAYCAM(CAMBODIA)CO.,LTD님의 실시간 스트림 lotto 639 Lucky Draw 30th,May 2022',
      ' WL PAYCAM(CAMBODIA)CO.,LTD님의 실시간 스트림 lotto 639 Lucky Draw 23,May 2022',
    ];
    const array3 = ['June 7, 2022', 'May 30, 2022', 'May 23, 2022'];
    const array4 = [
      'https://youtu.be/embed/mJn0rUztjVI',
      'https://youtu.be/embed/mJn0rUztjVI',
      'https://youtu.be/embed/mJn0rUztjVI',
    ];

    // pass a function to map
    const data_show = array1.map((x, idx) => (
      <div key={idx} className="col-12 border my-2">
        <iframe src={array4} width="100%" frameBorder="0"></iframe>
        <h4>
          {x} <span style={{ color: 'red' }}>Live Show</span>
        </h4>
        <p>{array2[idx]}</p>
        <span className="text-secondary">{array3[idx]}</span>
      </div>
    ));
    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 my-2">
              <h4>Winning Results</h4>
              <p>Draw Broadcast</p>
            </div>

            <div className="col-12 text-center">
              <h4>Draw Broadcast</h4>
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
              <h4>Draw Broadcast</h4>
              <p className="text-secondary">
                Drawing Live CTV9 8PM,Tue <br />
                Lottery will be broadcast live at 8:00 Night on TV9 every
                Tuesday
              </p>
            </div>
            <div className="col-12">
              <h4>Live Show About Lottery</h4>
            </div>
            {data_show}
            <a
              href="https://www.youtube.com/channel/UCmUFVzBi1gymawt1Pwt58Gw/videos"
              target="_blank"
              className="btn btn-primary"
            >
              See More
            </a>
            <div className="col-12 my-5">
              <h4>Broadcasting</h4>
              <p>you can also watch live show at Facebook</p>
              <iframe
                src="https://www.youtube.com/embed/rBCROqvElRg"
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
