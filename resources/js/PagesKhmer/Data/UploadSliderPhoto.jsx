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

@inject('root')
@observer
export default class UploadSliderPhoto extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.sliderPhotoProvider;
    this.store.addModalShow();
    this.store.readSliderPhoto();
  }
  render() {
    const { addModalData, galleryList } = this.store;
    return (
      <div className="px-5">
        <h3 className="text-dark">Change Image</h3>
        <span className="text-danger">!Note:</span>{' '}
        <span>The Size of Image = 1200px X 500px</span>
        <form action="#">
          <div className="my-1">Image 1</div>
          <div className="input-group">
            <span className="input-group-text bg-warning text-light">
              <FontAwesomeIcon icon={faPhotoFilm} />
            </span>
            <input
              className="border-0"
              type="file"
              onChange={(e) => {
                e.stopPropagation();
                const file = e.target.files[0];
                this.store.addModalFileChange1(file);
              }}
            />
          </div>
          <div className="my-1">Image 2</div>
          <div className="input-group">
            <span className="input-group-text bg-success text-light">
              <FontAwesomeIcon icon={faPhotoFilm} />
            </span>
            <input
              className="border-0"
              type="file"
              onChange={(e) => {
                e.stopPropagation();
                const file = e.target.files[0];
                this.store.addModalFileChange2(file);
              }}
            />
          </div>
          <div className="my-1">Image 3</div>
          <div className="input-group">
            <span className="input-group-text bg-info text-light">
              <FontAwesomeIcon icon={faPhotoFilm} />
            </span>
            <input
              className="border-0"
              type="file"
              onChange={(e) => {
                e.stopPropagation();
                const file = e.target.files[0];
                this.store.addModalFileChange3(file);
              }}
            />
          </div>
          <hr />
          <button
            className="btn btn-primary"
            color="primary"
            onClick={(e) => {
              e.stopPropagation();
              const confirmCheck = confirm('Save?');
              if (confirmCheck === true) {
                this.store.createdSliderPhoto();
              }
            }}
          >
            Update File
          </button>
        </form>
      </div>
    );
  }
}
