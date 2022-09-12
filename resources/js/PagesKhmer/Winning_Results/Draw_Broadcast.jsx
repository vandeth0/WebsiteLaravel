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
export default class Draw_Broadcast extends Component {
  render() {
    window.scrollTo(0, 0);
    const array1 = ['12th', '11th', '10th'];
    const array2 = [
      ' WL PAYCAM(CAMBODIA)CO.,LTD님의 실시간 스트림 lotto 639 Lucky Draw 7th,June 2022',
      ' WL PAYCAM(CAMBODIA)CO.,LTD님의 실시간 스트림 lotto 639 Lucky Draw 30th,May 2022',
      ' WL PAYCAM(CAMBODIA)CO.,LTD님의 실시간 스트림 lotto 639 Lucky Draw 23,May 2022',
    ];
    const array3 = ['June 7, 2022', 'May 30, 2022', 'May 23, 2022'];
    const array4 = [
      'https://www.youtube.com/embed/cGQ_uoMhJLM',
      'https://www.youtube.com/embed/cGQ_uoMhJLM',
      'https://www.youtube.com/embed/cGQ_uoMhJLM',
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
        <div className="container font-khmer-language">
          <div className="row">
            <div className="col-12 my-4">
              <h4>លទ្ធផលឆ្នោតឡូតូ</h4>
              <p>ការផ្សាយឆ្នោតឡូតូ</p>
            </div>

            <div className="col-12">
              <h4>ការផ្សាយឆ្នោតឡូតូ</h4>
              <p className="text-secondary">
                ផ្សាយផ្ទាល់ CTV 9 ម៉ោង ៨យប់ ថ្ងៃអង្គារ <br />
                <span>
                  ឆ្នោតនឹងផ្សាយផ្ទាល់នៅម៉ោង ៨:០០ យប់
                  នៅលើកញ្ចក់ទូរទស្សន៍ប៉ុស្តិ៍លេខ ៩ រៀងរាល់ថ្ងៃអង្គារ
                </span>{' '}
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
              មើលបន្ថែមទៀត
            </a>
            <div className="col-12 my-5">
              <h4>ការផ្សាយ</h4>
              <p>អ្នកក៏អាចទស្សនាការផ្សាយផ្ទាល់នៅលើ</p>
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
