import React, { Component, Fragment } from 'react';
import Main_header from 'PagesKhmer/Data/Main_header';
import Main_footer from 'PagesKhmer/Data/Main_footer';
import GoogleMaps from './GoogleMaps';
import { inject, observer } from 'mobx-react';
import LocationEdit from './LocationEdit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faCoffee,
  faPlus,
  faTimesCircle,
  faXmark,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

@inject('root')
@observer
export default class Agency extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.locationDealerProvider;
    this.store.readLocation();
    this.store.addModalShow();
    this.ss = props.root.userLoginProvider;
    this.ss.readUserLogin();
  }
  render() {
    const { locationDealer, addModalData, storeIdResult, searchStoreId } =
      this.store;
    const { session, sessionall, style } = this.props.root.userLoginProvider;
    window.scrollTo(0, 0);
    return (
      <Fragment>
        <div>
          <Main_header />
        </div>
        <div className="container font-khmer-language">
          <div className="row">
            <div className="col-12 my-4">
              <h4>ផេខេមឡូតូ​ ៦/៣៩</h4>
              <p>ទីភ្នាក់ងារ</p>
            </div>

            <div className="col-12">
              <h4>ទីភ្នាក់ងារ</h4>
            </div>

            <hr />

            <div className="col-12">
              <h4>ទីភ្នាក់ងាររបស់ផេខេម</h4>
              <p>
                អ្នកអាចទិញទំនិញនៅភ្នាក់ងារ PAYCAM ដែលនៅជិតលោកអ្នកបំផុត។
                អ្នកអាចទិញនៅភ្នាក់ងារ Paycam 24 ម៉ោង។
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              {session.username == sessionall.username &&
              session.password == sessionall.password ? (
                <button className="btn btn-primary" style={{ display: style }}>
                  <label htmlFor="location-check">
                    <img
                      src="/images/icon/icon paycam 50 x 50.png"
                      width="35px"
                      alt=""
                    />{' '}
                    Input Location
                  </label>
                </button>
              ) : (
                ''
              )}

              <GoogleMaps />
            </div>
          </div>
        </div>
        <hr />
        <input type="checkbox" name="" id="location-check" className="d-none" />
        <div className="comtainer menu-input-location">
          <div
            className="edit-location"
            id="location"
            style={{ display: 'none' }}
          >
            <div className="location">
              <FontAwesomeIcon
                icon={faTimesCircle}
                style={{
                  fontSize: '30px',
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById('location').style.display = 'none';
                }}
              />
              <h4>Edit The Location</h4>
              <hr />
              <LocationEdit />
            </div>
          </div>
          <button className="btn btn-dark my-3">
            <label htmlFor="location-check">Close</label>
          </button>

          <div className="row">
            <div className="col-12">
              <h4>Input Location Dealder Shop</h4>

              <div className="input-group">
                <span className="input-group-text">Store ID</span>
                <input
                  type="text"
                  className="form-control"
                  value={addModalData.storeId}
                  onChange={(e) => {
                    e.stopPropagation();
                    const { value } = e.target;
                    this.store.storeIdEnter('storeId', value);
                  }}
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Shop Name</span>
                <input
                  type="text"
                  className="form-control"
                  value={addModalData.shopName}
                  onChange={(e) => {
                    e.stopPropagation();
                    const { value } = e.target;
                    this.store.storeIdEnter('shopName', value);
                  }}
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Name Dealer</span>
                <input
                  type="text"
                  className="form-control"
                  value={addModalData.nameDealer}
                  onChange={(e) => {
                    e.stopPropagation();
                    const { value } = e.target;
                    this.store.storeIdEnter('nameDealer', value);
                  }}
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Phone</span>
                <input
                  type="text"
                  className="form-control"
                  value={addModalData.phone}
                  onChange={(e) => {
                    e.stopPropagation();
                    const { value } = e.target;
                    this.store.storeIdEnter('phone', value);
                  }}
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Lat</span>
                <input
                  type="text"
                  className="form-control"
                  value={addModalData.lat}
                  onChange={(e) => {
                    e.stopPropagation();
                    const { value } = e.target;
                    this.store.storeIdEnter('lat', value);
                  }}
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Lng</span>
                <input
                  type="text"
                  className="form-control"
                  value={addModalData.lng}
                  onChange={(e) => {
                    e.stopPropagation();
                    const { value } = e.target;
                    this.store.storeIdEnter('lng', value);
                  }}
                />
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const confirmCheck = confirm('Save?');
                  if (confirmCheck === true) {
                    this.store.createdLocationDealer();
                  }
                }}
                className="btn btn-success"
              >
                Sumbit
              </button>
            </div>
            <div className="col-12 mt-5">
              <h4>Search Store ID:</h4>
            </div>
            <div className="col-12 input-group ">
              <button
                className="input-group-text btn btn-primary"
                onClick={(e) => {
                  e.stopPropagation();
                  this.store.searchLocation();
                }}
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
              <input
                className="form-control"
                type="number"
                value={searchStoreId}
                placeholder="Store ID"
                onChange={(e) => {
                  e.stopPropagation();
                  const { value } = e.target;
                  this.store.changeValueNumber(value);
                }}
              />
            </div>

            <div className="col-12 my-5">
              <table className="table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Store ID</th>
                    <th>Store Name</th>
                    <th>Phone</th>
                    <th>Name Dealer</th>
                    <th>Option</th>
                  </tr>
                </thead>
                <tbody>
                  {locationDealer.map((item, idx) => {
                    if (searchStoreId == item.store_id) {
                      return (
                        <tr key={idx}>
                          <td>{locationDealer.length - idx}</td>
                          <td>{item.store_id}</td>
                          <td>{item.shop_name}</td>
                          <td>{item.name_dealer}</td>
                          <td>{item.phone}</td>
                          <td>
                            <button
                              className="btn btn-primary"
                              onClick={(e) => {
                                e.stopPropagation();
                                this.store.editModalShow(item);
                                document.getElementById(
                                  'location'
                                ).style.display = 'flex';
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-success"
                              onClick={(e) => {
                                e.stopPropagation();
                                const confirmCheck = confirm('Save?');
                                if (confirmCheck === true) {
                                  this.store.deletedLocation(item);
                                }
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    }
                  })}
                  {searchStoreId.length < 1 &&
                    locationDealer.map((item, idx) => {
                      {
                        return (
                          <tr key={idx}>
                            <td>{locationDealer.length - idx}</td>
                            <td>{item.store_id}</td>
                            <td>{item.shop_name}</td>
                            <td>{item.name_dealer}</td>
                            <td>{item.phone}</td>
                            <td>
                              <button
                                className="btn btn-primary"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  this.store.editModalShow(item);
                                  document.getElementById(
                                    'location'
                                  ).style.display = 'flex';
                                }}
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-success"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const confirmCheck = confirm('Save?');
                                  if (confirmCheck === true) {
                                    this.store.deletedLocation(item);
                                  }
                                }}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      }
                    })}
                </tbody>
              </table>
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
