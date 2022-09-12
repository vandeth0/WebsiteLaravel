import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faCoffee,
} from '@fortawesome/free-solid-svg-icons';
import { inject, observer } from 'mobx-react';

@inject('root')
@observer
export default class Image_slider extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.sliderPhotoProvider;
    this.store.readSliderPhoto();
  }
  render() {
    const { sliderPhotoList } = this.store;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 border" style={{ padding: '0' }}>
            <div className="slider-frame border">
              <div className="slide-images">
                {sliderPhotoList.map((item, idx) => {
                  return (
                    <div key={idx}>
                      <div className="img-container">
                        <img
                          width="100%"
                          height="100%"
                          src={`/storage/SliderPhoto/${item.file_hash_1}`}
                          alt=""
                        />
                      </div>
                      <div className="img-container">
                        <img
                          width="100%"
                          height="100%"
                          src={`/storage/SliderPhoto/${item.file_hash_2}`}
                          alt=""
                        />
                      </div>
                      <div className="img-container">
                        <img
                          width="100%"
                          height="100%"
                          src={`/storage/SliderPhoto/${item.file_hash_3}`}
                          alt=""
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
