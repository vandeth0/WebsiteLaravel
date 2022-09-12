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
        <ul className="list-unstyled menu-google font-khmer-language">
          <li
            className="list-inline-item p-3"
            onClick={(e) => {
              e.stopPropagation();
              this.store.googleAll();
            }}
          >
            ទាំងអស់
          </li>
          <li
            className="list-inline-item p-3"
            onClick={(e) => {
              e.stopPropagation();
              this.store.googleHead();
            }}
          >
            ក្រុមហ៊ុន
          </li>
          <li
            className="list-inline-item p-3"
            onClick={(e) => {
              e.stopPropagation();
              this.store.googleBranch();
            }}
          >
            សាខា
          </li>
          <li
            className="list-inline-item p-3"
            onClick={(e) => {
              e.stopPropagation();
              this.store.googleAgency();
            }}
          >
            ភ្នាក់ងារ
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
                  <table className="table font-khmer-language">
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
                        <td>ឈ្មោះ</td>
                        <td>{dataOfDealer.name}</td>
                      </tr>
                      <tr>
                        <td>ឈ្មោះហាង</td>
                        <td>{dataOfDealer.shop}</td>
                      </tr>
                      <tr style={{ fontWeight: 'bold' }}>
                        <td>លេខទូរស័ព្ទ</td>
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
                    បិទ
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
                  // this.store.inputDataOfDealer(
                  //   'ដាប់បែលយូអិល ផេខេម (ខេមបូឌា) ឯ.ក',
                  //   'ដាប់បែលយូអិល ផេខេម (ខេមបូឌា) ឯ.ក',
                  //   '+855 23 911 639',
                  //   'ការិយាល័យ',
                  //   11.592804,
                  //   104.849071
                  // );
                  window.location.href =
                    'https://goo.gl/maps/inDcgm7btDAc6268A';
                }}
                position={{
                  lat: 11.592804,
                  lng: 104.849071,
                }}
                icon={icon}
                labelClass="labels"
                label={{
                  text: 'ដាប់បែលយូអិល ផេខេម (ខេមបូឌា) ឯ.ក',
                  className: labelMarker,
                  color: '#bc1bff',
                }}
              />
            )}
            {GoogleMain.GoogleBranch == 1 && (
              <Fragment>
                <Marker
                  onClick={(e) => {
                    //   this.store.inputDataOfDealer(
                    //     'ដាប់បែលយូអិល ផេខេម (ខេមបូឌា) ឯ.ក',
                    //     'សាខាការិយាល៏យ (មុន្នីវង្ស)',
                    //     '+855 23 911 639',
                    //     'សាខាការិយាល៏យ',
                    //     11.570509,
                    //     104.918471
                    //   );
                    window.location.href =
                      'https://goo.gl/maps/otokKb4GU7PXwnAu8';
                  }}
                  position={{
                    lat: 11.570509,
                    lng: 104.918471,
                  }}
                  icon={icon}
                  labelClass="labels"
                  label={{
                    text: 'សាខាការិយាល៏យ (មុន្នីវង្ស)',
                    className: labelMarker,
                    color: '#68c1ff',
                  }}
                />
                <Marker
                  onClick={(e) => {
                    window.location.href =
                      'https://goo.gl/maps/VAgof3Q5xZ4MwTDQ9';
                    // this.store.inputDataOfDealer(
                    //   'ដាប់បែលយូអិល ផេខេម (ខេមបូឌា) ឯ.ក',
                    //   'សាខាការិយាល៏យ (ពោធិ៏ចិនតុង)',
                    //   '+855 23 911 639',
                    //   'សាខាការិយាល៏យ',
                    //   11.56216,
                    //   104.854539
                    // );
                  }}
                  position={{
                    lat: 11.56216,
                    lng: 104.854539,
                  }}
                  icon={icon}
                  labelClass="labels"
                  label={{
                    text: 'សាខាការិយាល៏យ (ពោធិ៏ចិនតុង)',
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
                      window.location.href = items.link_location;
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
