import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAdd,
  faBars,
  faCoffee,
  faFileText,
  faGlobe,
  faInfo,
  faInfoCircle,
  faPhotoFilm,
  faSquarePersonConfined,
  faTextHeight,
  faTextSlash,
  faTicket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import UploadDesign from 'Pages/Data/UploadDesign';
import UploadNews from 'Pages/Data//UploadNews';
import UploadVideo from 'Pages/Data//UploadVideo';
import UploadNotice from 'Pages/Data//UploadNotice';
import Ball_List_User_Input from 'Pages/Desk/Ball_List_User_Input';

export default class Information extends Component {
  render() {
    return (
      <>
        <input type="radio" className="d-none" name="upd" id="design-list" />
        <input type="radio" className="d-none" name="upd" id="info-list" />
        <input type="radio" className="d-none" name="upd" id="video-list" />
        <input type="radio" className="d-none" name="upd" id="news-list" />
        <input type="radio" className="d-none" name="upd" id="notice-list" />

        <ul className="menu-list-upload">
          <li className="list-inline-item menu-d ">
            <label htmlFor="design-list">Design</label>
          </li>
          <li className="list-inline-item menu-i ">
            <label htmlFor="info-list">Ball Lottery</label>
          </li>
          <li className="list-inline-item menu-v ">
            <label htmlFor="video-list">Video</label>
          </li>
          <li className="list-inline-item menu-n ">
            <label htmlFor="news-list">News</label>
          </li>
          <li className="list-inline-item menu-no ">
            <label htmlFor="notice-list">Notice</label>
          </li>
        </ul>
        <hr />

        <ul className="main-upload">
          <li className="design-list border">
            {/* <h1>1</h1> */}
            <UploadDesign />
          </li>
          <li className="info-list border">
            {/* <h1>2</h1> */}

            <Ball_List_User_Input />
          </li>
          <li className="video-list border">
            {/* <h1>3</h1> */}

            <UploadVideo />
          </li>
          <li className="news-list border">
            {/* <h1>4</h1> */}
            <UploadNews />
          </li>
          <li className="notice-list border">
            {/* <h1>4</h1> */}
            <UploadNotice />
          </li>
        </ul>
      </>
    );
  }
}
