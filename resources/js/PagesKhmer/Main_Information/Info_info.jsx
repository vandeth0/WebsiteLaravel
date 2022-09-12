import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlignLeft,
  faBars,
  faCaretDown,
  faCoffee,
  faEye,
  faGlobe,
  faPen,
  faStreetView,
  faUser,
  faUsersViewfinder,
} from '@fortawesome/free-solid-svg-icons';

export default class info_info extends Component {
  render() {
    const photoDesign = [
      'Design By Name...',
      'Design By Name...',
      'Design By Name...',
      'Design By Name...',
      'Design By Name...',
      'Design By Name...',
      'Design By Name...',
      'Design By Name...',
      'Design By Name...',
      'Design By Name...',
    ];
    const photoDesign1 = [
      'Design Information Company...',
      'Design Information Company...',
      'Design Information Company...',
      'Design Information Company...',
      'Design Information Company...',
      'Design Information Company...',
      'Design Information Company...',
      'Design Information Company...',
      'Design Information Company...',
      'Design Information Company...',
    ];
    const photoDesign2 = [
      'Design By Name...',
      'Design By Name...',
      'Design By Name...',
      'Design By Name...',
      'Design By Name...',
      'Design By Name...',
      'Design By Name...',
      'Design By Name...',
      'Design By Name...',
      'Design By Name...',
    ];
    const photoDesign3 = [
      'Design Information Company...',
      'Design Information Company...',
      'Design Information Company...',
      'Design Information Company...',
      'Design Information Company...',
      'Design Information Company...',
      'Design Information Company...',
      'Design Information Company...',
      'Design Information Company...',
      'Design Information Company...',
    ];
    const dataPhotoDesign = photoDesign.map((data, idx) => (
      <>
        <div
          className="paycamStaff"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <NavLink to="/khmer/Info_Edit">
            <span>{idx + 1}</span>. {data}
            <span> </span>
          </NavLink>{' '}
          <span className="text-secondary">
            <NavLink to="">
              <FontAwesomeIcon icon={faEye} className="mx-2" />
            </NavLink>
            <NavLink to="">
              <FontAwesomeIcon icon={faPen} className="mx-2" />
            </NavLink>{' '}
            13-04-2022
          </span>
        </div>
      </>
    ));
    const dataPhotoDesign1 = photoDesign1.map((data, idx) => (
      <>
        <div
          className="paycamStaff"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <NavLink to="/khmer/Info_Edit">
            <span>{idx + 1}</span>. {data}
            {data}
            <span> </span>
          </NavLink>{' '}
          <span className="text-secondary">
            {' '}
            <NavLink to="">
              <FontAwesomeIcon icon={faEye} className="mx-2" />
            </NavLink>
            <NavLink to="">
              <FontAwesomeIcon icon={faPen} className="mx-2" />
            </NavLink>{' '}
            13-04-2022
          </span>
        </div>
      </>
    ));
    const dataPhotoDesign2 = photoDesign2.map((data, idx) => (
      <>
        <div
          className="paycamStaff"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <NavLink to="/khmer/Info_Edit">
            <span>{idx + 1}</span>. {data}
            {data}
            <span> </span>
          </NavLink>{' '}
          <span className="text-secondary">
            <NavLink to="">
              <FontAwesomeIcon icon={faEye} className="mx-2" />
            </NavLink>
            <NavLink to="">
              <FontAwesomeIcon icon={faPen} className="mx-2" />
            </NavLink>{' '}
            13-04-2022
          </span>
        </div>
      </>
    ));
    const dataPhotoDesign3 = photoDesign3.map((data, idx) => (
      <>
        <div
          className="paycamStaff"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <NavLink to="/khmer/Info_Edit">
            <span>{idx + 1}</span>. {data}
            {data}
            <span> </span>
          </NavLink>{' '}
          <span className="text-secondary">
            {' '}
            <NavLink to="">
              <FontAwesomeIcon icon={faEye} className="mx-2" />
            </NavLink>
            <NavLink to="">
              <FontAwesomeIcon icon={faPen} className="mx-2" />
            </NavLink>{' '}
            13-04-2022
          </span>
        </div>
      </>
    ));
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="paycamStaffData col-xl-6 col-lg-6 col-md-6 col-12 py-2 border-bottom">
              <h4>Paycam Staff</h4>
              {dataPhotoDesign}
            </div>
            <div className="paycamStaffData col-xl-6 col-lg-6 col-md-6  col-12 py-2 border-bottom">
              <h4>Our Rule WL Paycam</h4>
              {dataPhotoDesign1}
            </div>
            <div className="paycamStaffData col-xl-6 col-lg-6 col-md-6  col-12 py-2 border-bottom">
              <h4>Information PayCam</h4>
              {dataPhotoDesign2}
            </div>
            <div className="paycamStaffData col-xl-6 col-lg-6 col-md-6  col-12 py-2 border-bottom">
              <h4>Contact of PayCam</h4>
              {dataPhotoDesign3}
            </div>
          </div>
        </div>
      </>
    );
  }
}
