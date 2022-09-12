import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Menu_header from './Menu_header';
import Paycamltto from './menu/Paycamltto';
import Winning_Results from './menu/Winning_Results';
import Community from './menu/Community';
import LOVE_IN_US from './menu/LOVE_IN_US';
import Image_slider from './Image_slider';
import About from './Menu_Footer/About';
import Contact_us from './Menu_Footer/Contact_us';
import Support from './Menu_Footer/Support';
import Company from './Menu_Footer/Company';
import Feature from './Menu_Footer/Feature';
import Registration from './Menu_Footer/Registration';
import Menu_register from './Menu_Footer/Menu_register';
import Menu_Download_App from './Menu_Footer/Menu_Download_App';
import Social_Link from './Menu_Footer/Social_Link';
import Ball_List from '../Desk/Ball_List';
import Ball_List_User from '../Desk/Ball_List_User';
import Event_Paycam from '../Desk/Event_Paycam';
import About_Body from '../Desk/About_Body';
import ReactDOM from 'react-dom';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';
import Design_info from 'Pages/Main_Information/Design_info';
import Info_info from 'Pages/Main_Information/Info_info';
import New_info from 'Pages/Main_Information/New_info';
import Video_info from 'Pages/Main_Information/Video_info';
import UploadSliderPhoto from './UploadSliderPhoto';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faCoffee,
} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('root')
@observer
export default class Main_body extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.userLoginProvider;
    this.store.readUserLogin();
    this.ss = props.root.sliderPhotoProvider;
  }
  render() {
    window.scrollTo(0, 0);
    const { session, sessionall, style } = this.store;
    const array1 = [
      'Lottery will be broadcast live at 8:00 Night on TV9 every Tuesday',
      'Lottery will be broadcast live at 8:00 Night on TV9 every Tuesday',
      'Lottery will be broadcast live at 8:00 Night on TV9 every Tuesday',
      'Lottery will be broadcast live at 8:00 Night on TV9 every Tuesday',
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
          GET STARTED
        </button>
      </div>
    ));
    return (
      <Fragment>
        <div>
          <Main_header />
        </div>

        <div className="slider-photo" id="slider-photo-on">
          <div className="container">
            <label
              id="slider-photo-off"
              onClick={(e) => {
                e.stopPropagation();
                this.ss.sliderClose();
              }}
              className="btn btn-dark"
            >
              Back
            </label>
            <UploadSliderPhoto />
          </div>
        </div>
        <div className="container my-3">
          <div className="row">
            <div className="col-xl-9 col-lg-9 col-12">
              <Image_slider />
              <div>
                {session.username == sessionall.username &&
                  session.password == sessionall.password && (
                    <button
                      className="btn btn-warning"
                      style={{ display: style }}
                      onClick={(e) => {
                        e.stopPropagation();
                        this.ss.silderEnter();
                      }}
                    >
                      Change Photo
                    </button>
                  )}
              </div>
              <div className="row">
                <div className="col-12 text-center my-4">
                  <h4 style={{ fontWeight: 'bold' }}>
                    Purchase The Tickets <br /> PayCam Lotto
                  </h4>
                  <p className="text-secondary">
                    Play from 1$ and up, Can choose 6 numbers out of 39. You can
                    choose the number directly and, <br />
                    Also you can select number automatically
                  </p>
                </div>

                <div className="col-12">
                  <div className="row hover-sacle">{data_play}</div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-12 moblie-view">
              <div className="menu-news-info">
                <New_info />
              </div>
            </div>
          </div>
          <hr />

          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-9 col-12">
                <Event_Paycam />
                <About_Body />
              </div>

              <div className="col-xl-3 col-lg-3 col-12 moblie-view">
                <iframe
                  src="https://www.youtube.com/embed/OeITwGpahw8"
                  width="100%"
                  frameBorder="0"
                ></iframe>
                <iframe
                  src="https://www.youtube.com/embed/cGQ_uoMhJLM"
                  width="100%"
                  frameBorder="0"
                ></iframe>
                <iframe
                  src="https://www.youtube.com/embed/OkQHT4EnKc0"
                  width="100%"
                  frameBorder="0"
                ></iframe>
                <iframe
                  src="https://www.youtube.com/embed/OeITwGpahw8"
                  width="100%"
                  frameBorder="0"
                ></iframe>
                <iframe
                  src="https://www.youtube.com/embed/cGQ_uoMhJLM"
                  width="100%"
                  frameBorder="0"
                ></iframe>
              </div>
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
