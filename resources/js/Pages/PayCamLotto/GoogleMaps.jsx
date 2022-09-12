import React, { Component, Fragment } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { inject, observer } from 'mobx-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faPhone } from '@fortawesome/free-solid-svg-icons';

@inject('root')
@observer
export default class GoogleMaps extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.locationDealerProvider;
    this.store.readLocation();
  }
  render() {
    const { locationDealer, dataOfDealer, GoogleMain } = this.store;
    const icon = {
      url: require('../../../images/icon/icon paycam 50 x 50.png'),
    };

    const containerStyle = {
      width: '100%',
      height: '65vh',
    };
    const labelMarker = 'label-marker';

    // const center = {
    //   lat: 11.593944,
    //   lng: 104.849201,
    // };
    // const { isLoaded } = useJsApiLoader({
    //   id: 'google-map-script',
    //   googleMapsApiKey: 'AIzaSyAvnP5FKHVtNSxW06cwssTgpuf2oLnpqxc',
    // });

    return (
      <Fragment>
        <ul className="list-unstyled menu-google">
          <li
            className="list-inline-item p-3"
            onClick={(e) => {
              e.stopPropagation();
              this.store.googleAll();
            }}
          >
            All
          </li>
          <li
            className="list-inline-item p-3"
            onClick={(e) => {
              e.stopPropagation();
              this.store.googleHead();
            }}
          >
            WL PAYCAM
          </li>
          <li
            className="list-inline-item p-3"
            onClick={(e) => {
              e.stopPropagation();
              this.store.googleBranch();
            }}
          >
            Branch
          </li>
          <li
            className="list-inline-item p-3"
            onClick={(e) => {
              e.stopPropagation();
              this.store.googleAgency();
            }}
          >
            Agency
          </li>
        </ul>
        <div
          id="bg-b"
          style={{
            width: '100%',
            height: '100%',
            background: 'rgba(255,255,255,0.7)',
            position: 'fixed',
            zIndex: '1',
            top: '0',
            left: '0',
            display: 'none',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="border p-5" style={{ background: '#fff' }}>
            <div className="container">
              <div className="row">
                <div className="col-12 my-3" style={{ position: 'relative' }}>
                  <img
                    src="/images/photofile/paycam cambodiajpg.jpg"
                    width="350px"
                    alt=""
                  />
                  <hr />
                  <table className="table ">
                    <thead
                      style={{
                        background:
                          'linear-gradient(to right, #9901b7,#460ca7)',
                        color: '#fff',
                      }}
                    >
                      <tr className="text-center">
                        <th colSpan="2">{dataOfDealer.category}</th>
                      </tr>
                    </thead>
                    <tbody style={{ fontWeight: 'bold' }}>
                      <tr>
                        <td>Name</td>
                        <td>{dataOfDealer.name}</td>
                      </tr>
                      <tr>
                        <td>Shop Name</td>
                        <td>{dataOfDealer.shop}</td>
                      </tr>
                      <tr style={{ fontWeight: 'bold' }}>
                        <td>Phone</td>
                        <td className="text-danger">
                          <FontAwesomeIcon icon={faPhone} />{' '}
                          {dataOfDealer.phone}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button
                    className="btn btn-warning"
                    onClick={(e) => {
                      this.store.closeResultsDealer();
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LoadScript googleMapsApiKey="AIzaSyAvnP5FKHVtNSxW06cwssTgpuf2oLnpqxc">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat: dataOfDealer.lat, lng: dataOfDealer.lng }}
            zoom={13}
          >
            {GoogleMain.GoogleAll == 1 && (
              <Marker
                onClick={(e) => {
                  this.store.inputDataOfDealer(
                    'WL Paycam (Cambodia) Co.,Ltd',
                    'WL Paycam (Cambodia) Co.,Ltd',
                    '23 911 639',
                    'Head Offical',
                    11.592804,
                    104.849071
                  );
                }}
                position={{
                  lat: 11.592804,
                  lng: 104.849071,
                }}
                icon={icon}
                labelClass="labels"
                label={{
                  text: 'WL Paycam (Cambodia) Co.,Ltd',
                  className: labelMarker,
                  color: '#bc1bff',
                }}
              />
            )}
            {GoogleMain.GoogleBranch == 1 && (
              <Fragment>
                <Marker
                  onClick={(e) => {
                    this.store.inputDataOfDealer(
                      'WL Paycam (Cambodia) Co.,Ltd',
                      'Branch Office (Monivong)',
                      '23 911 639',
                      'Branch Office',
                      11.570509,
                      104.918471
                    );
                  }}
                  position={{
                    lat: 11.570509,
                    lng: 104.918471,
                  }}
                  icon={icon}
                  labelClass="labels"
                  label={{
                    text: 'Branch Office (Monivong)',
                    className: labelMarker,
                    color: '#68c1ff',
                  }}
                />
                <Marker
                  onClick={(e) => {
                    this.store.inputDataOfDealer(
                      'WL Paycam (Cambodia) Co.,Ltd',
                      'Branch Office (Pochentong)',
                      '23 911 639',
                      'Branch Office',
                      11.56216,
                      104.854539
                    );
                  }}
                  position={{
                    lat: 11.56216,
                    lng: 104.854539,
                  }}
                  icon={icon}
                  labelClass="labels"
                  label={{
                    text: 'Branch Office (Pochentong)',
                    className: labelMarker,
                    color: '#68c1ff',
                  }}
                />
              </Fragment>
            )}
            {GoogleMain.GoogleAgency == 1 &&
              locationDealer.map((items, idx) => {
                return (
                  <Marker
                    onClick={(e) => {
                      this.store.inputDataOfDealer(
                        items.name_dealer,
                        items.shop_name,
                        items.phone,
                        'Dealer Paycam',
                        parseFloat(items.lat),
                        parseFloat(items.lng)
                      );
                    }}
                    key={idx}
                    position={{
                      lat: parseFloat(items.lat),
                      lng: parseFloat(items.lng),
                    }}
                    icon={icon}
                    labelClass="labels"
                    label={{
                      text: items.shop_name,
                      className: labelMarker,
                      color: '#ff9037',
                    }}
                  />
                );
              })}
          </GoogleMap>
        </LoadScript>
      </Fragment>
    );
  }
}
