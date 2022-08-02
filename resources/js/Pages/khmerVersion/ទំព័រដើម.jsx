import React, { Component, Fragment } from 'react';
import Image_slider from '../Data/Image_slider';
import Ball_List from './Desk_khmer/Ball_List';
import Event_Paycam from './Desk_khmer/Event_Paycam';
import About_Body from './Desk_khmer/About_Body';
import Main_header from '../khmerVersion/Data/Main_header';
import Main_footer from '../khmerVersion/Data/Main_footer';
import Design_info from 'Pages/Main_Information/Design_info';
import New_info from 'Pages/Main_Information/New_info';
import Video_info from 'Pages/Main_Information/Video_info';
import UploadSliderPhoto from 'Pages/Data/UploadSliderPhoto';
import { inject, observer } from 'mobx-react';

@inject('root')
@observer
export default class ទំព័រដើម extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.loginProvider;
  }
  render() {
    const { session } = this.store;
    const array1 = [
      'ឆ្នោតនឹងផ្សាយផ្ទាល់នៅម៉ោង ៨:០០ យប់ នៅលើកញ្ចក់ទូរទស្សន៍ប៉ុស្តិ៍លេខ ៩ រៀងរាល់ថ្ងៃអង្គារ',
      'ឆ្នោតនឹងផ្សាយផ្ទាល់នៅម៉ោង ៨:០០ យប់ នៅលើកញ្ចក់ទូរទស្សន៍ប៉ុស្តិ៍លេខ ៩ រៀងរាល់ថ្ងៃអង្គារ',
      'ឆ្នោតនឹងផ្សាយផ្ទាល់នៅម៉ោង ៨:០០ យប់ នៅលើកញ្ចក់ទូរទស្សន៍ប៉ុស្តិ៍លេខ ៩ រៀងរាល់ថ្ងៃអង្គារ',
      'ឆ្នោតនឹងផ្សាយផ្ទាល់នៅម៉ោង ៨:០០ យប់ នៅលើកញ្ចក់ទូរទស្សន៍ប៉ុស្តិ៍លេខ ៩ រៀងរាល់ថ្ងៃអង្គារ',
    ];

    // pass a function to map
    const data_play = array1.map((x, idx) => (
      <div key={idx} className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6 my-3">
        <img src="images/photofile/315wdgwshwre.jpg" width="100%" alt="" />
        <p className="my-3">{x}</p>
        <button
          className="btn px-5"
          style={{
            background: ' linear-gradient(to right, #9901b7,#460ca7)',
            color: '#fff',
          }}
        >
          ចាប់ផ្តើម
        </button>
      </div>
    ));
    return (
      <Fragment>
        <div>
          <Main_header />
        </div>
        <input
          type="checkbox"
          name=""
          id="slider-photo-change"
          className="d-none"
        />
        <div className="slider-photo">
          <div className="container">
            <label htmlFor="slider-photo-change" className="btn btn-dark ">
              Back
            </label>
            <UploadSliderPhoto />
          </div>
        </div>
        {/* Image_slider */}
        <Image_slider />
        {/* Image_slider */}
        <div>
          {session.username == 'admin' && session.password == 'deth123' && (
            <button className="btn btn-warning">
              <label htmlFor="slider-photo-change"> Change Photo </label>
            </button>
          )}
        </div>
        <div className="container my-3 font-khmer-language">
          <h4>ព័ត៌មាន</h4>
          <input type="radio" className="d-none" name="a" id="design" />
          <input type="radio" className="d-none" name="a" id="info" />
          <input type="radio" className="d-none" name="a" id="video" />
          <input type="radio" className="d-none" name="a" id="news" />
          <ul className="list-unstyled menu-info">
            <li className="list-inline-item design">
              <label htmlFor="design">​ព័ត៌មានថ្មី</label>
            </li>
            {/* <li className="list-inline-item info">
              <label htmlFor="info">Info</label>
            </li> */}
            <li className="list-inline-item video">
              <label htmlFor="video">វីដេអូ</label>
            </li>
            <li className="list-inline-item news">
              <label htmlFor="news">រចនា</label>
            </li>
          </ul>
          <hr />
          <div className="main-infomation">
            <ul className="information-view">
              <li className="design-info">
                <New_info />
              </li>
              {/* <li className="info-info">
                <Info_info />
              </li> */}
              <li className="video-info">
                <Video_info />
              </li>
              <li className="news-info">
                <Design_info />
              </li>
            </ul>
          </div>
          <hr />
        </div>

        <div className="container font-khmer-language">
          <div className="row">
            <div className="col-12 text-center my-4">
              <h4 style={{ fontWeight: 'bold' }}>ការទិញសំបុត្រ</h4>
              <h5>ផេខេមឡូតូ</h5>
              <p className="text-secondary ">
                យើងអាចលេងចាប់ពី ១ ដុល្លារឡើងទៅហើយអាចជ្រើសរើសលេខបាន ៦ ខ្ទង់ នៃ ៣៩
                ខ្ទង់។ <br />
                លោកអ្នកអាចរើសលេខបានដោយផ្ទាល់និងរើសដោយអូតូក៏បាន
              </p>
            </div>

            <div className="col-12">
              <div className="row hover-sacle">{data_play}</div>
            </div>
          </div>
        </div>

        <div className="container font-khmer-language">
          <div className="row">
            <div className="col-12 my-4 py-5 text-center">
              <h4 style={{ fontWeight: 'bold' }}>
                ការចាក់ផ្សាយឆ្នោតនិងមានការផ្សាយផ្ទាល់
                <br />
                ក្នុង ១ សប្ដាហ៍ ១ ដង
              </h4>
              <p className="text-secondary">
                ការចាក់ផ្សាយឆ្នោតឡូតូនិងផ្សាយនៅវេលាម៉ោង ៨ យប់រៀងរាល់ថ្ងៃអង្គារ{' '}
                <br />
                ដែលចាក់ផ្សាយតាមទូរទស្សន៍ប៉ុស្ដ៍ លេខ ៩
              </p>
            </div>
            <Ball_List />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <Event_Paycam />
              <About_Body />
            </div>
          </div>
        </div>

        <div>
          <Main_footer />
        </div>
      </Fragment>
    );
  }
}
