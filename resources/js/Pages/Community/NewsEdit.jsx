import React, { Component, Fragment } from 'react';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';
import { inject, observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlignLeft,
  faAngleLeft,
  faAngleRight,
  faBars,
  faBook,
  faBookReader,
  faCaretDown,
  faCoffee,
  faEdit,
  faEye,
  faFileText,
  faGlobe,
  faInfoCircle,
  faPhotoFilm,
  faStreetView,
  faUser,
  faUsersViewfinder,
} from '@fortawesome/free-solid-svg-icons';
import NoticeShow from './NoticeShow';

@inject('root')
@observer
export default class NewsEdit extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.newsProvider;
    // this.store.editModalShow();
    this.store.readNews();
  }
  render() {
    const { editModalData } = this.store;
    return (
      <>
        <div className="col-12">
          <form action="#">
            <div className="my-1">Title</div>
            <div className="input-group">
              <span className="input-group-text bg-warning text-light">
                <FontAwesomeIcon icon={faInfoCircle} />
              </span>
              <input
                className="form-control"
                type="text"
                value={editModalData.title}
                placeholder="Title"
                onChange={(e) => {
                  e.stopPropagation();
                  const { value } = e.target;
                  this.store.editModalDataChange('title', value);
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
                value={editModalData.contents}
                placeholder="Write... (100 character)"
                style={{ height: 150 }}
                onChange={(e) => {
                  e.stopPropagation();
                  const { value } = e.target;
                  this.store.editModalDataChange('contents', value);
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
                  this.store.editModalFileChange(file);
                }}
              />
            </div>
            <hr />
            <button
              className="btn btn-primary"
              color="primary"
              disabled={
                editModalData && editModalData.title && editModalData.contents
                  ? false
                  : true
              }
              onClick={(e) => {
                e.stopPropagation();
                const confirmCheck = confirm('Save?');
                if (confirmCheck === true) {
                  this.store.updatedNews();
                }
              }}
            >
              Save File
            </button>
          </form>
        </div>
      </>
    );
  }
}
