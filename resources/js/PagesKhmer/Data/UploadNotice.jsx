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
export default class UploadNotice extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.noticeProvider;
    this.store.addModalShow();
    this.store.readNotice();
  }
  render() {
    const { addModalData, galleryList } = this.store;
    return (
      <div className="px-5">
        <h3 className="text-danger">Upload Notice of Paycam</h3>
        <form action="#">
          <div className="my-1">Title</div>
          <div className="input-group">
            <span className="input-group-text bg-warning text-light">
              <FontAwesomeIcon icon={faInfoCircle} />
            </span>
            <input
              className="form-control"
              type="text"
              value={addModalData.title}
              placeholder="Title"
              onChange={(e) => {
                e.stopPropagation();
                const { value } = e.target;
                this.store.addModalDataChange('title', value);
              }}
            />
          </div>
          <div className="my-1">Information</div>
          <div className="input-group">
            <span className="input-group-text bg-success text-light">
              <FontAwesomeIcon icon={faFileText} />
            </span>
            <input
              className="form-control"
              type="textarea"
              value={addModalData.contents}
              placeholder="Write... (100 character)"
              style={{ height: 150 }}
              onChange={(e) => {
                e.stopPropagation();
                const { value } = e.target;
                this.store.addModalDataChange('contents', value);
              }}
            />
          </div>
          <div className="my-1">Photo</div>
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
                this.store.addModalFileChange(file);
              }}
            />
          </div>
          <hr />
          <button
            className="btn btn-primary"
            color="primary"
            disabled={
              addModalData && addModalData.title && addModalData.contents
                ? false
                : true
            }
            onClick={(e) => {
              e.stopPropagation();
              const confirmCheck = confirm('Save?');
              if (confirmCheck === true) {
                this.store.createdNotice();
              }
            }}
          >
            Save File
          </button>
        </form>
      </div>
    );
  }
}
