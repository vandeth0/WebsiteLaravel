import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlignLeft,
  faBars,
  faBook,
  faBookReader,
  faCaretDown,
  faCoffee,
  faEye,
  faGlobe,
  faStreetView,
  faUser,
  faUsersViewfinder,
} from '@fortawesome/free-solid-svg-icons';
import { inject, observer } from 'mobx-react';
import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

@inject('root')
@observer
export default class New_info extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.newsProvider;
    this.store.addModalShow();
    this.store.readNews();
  }
  render() {
    const { newsList } = this.store;
    return (
      <div className="container-fluid">
        <div className="row">
          {newsList &&
            newsList.length > 0 &&
            newsList.map((item, idx) => {
              return (
                <Fragment key={idx}>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 my-2">
                    <img
                      src={`/storage/News/${item.file_hash}`}
                      alt=""
                      width="100%"
                    />
                  </div>
                  <div
                    className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12 my-2"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '10px',
                    }}
                  >
                    <div className="">
                      <h4 style={{ whiteSpace: 'normal' }}>
                        {item.title.length > 30 ? (
                          <span>{item.title.substr(0, 30)}...</span>
                        ) : (
                          <span>{item.title}</span>
                        )}
                      </h4>
                      <p
                        style={{ whiteSpace: 'normal' }}
                        className="text-secondary"
                      >
                        {item.contents.length > 50 ? (
                          <span>{item.contents.substr(0, 50)}...</span>
                        ) : (
                          <span>{item.contents}</span>
                        )}
                      </p>
                      <p
                        style={{ whiteSpace: 'normal' }}
                        className="text-secondary"
                      >
                        {item.register_at}
                      </p>
                    </div>

                    <div className="">
                      <NavLink to="/News" title="Preview">
                        <FontAwesomeIcon icon={faBook} className="mx-2" />
                      </NavLink>
                    </div>
                  </div>
                </Fragment>
              );
            })}
        </div>
      </div>
    );
  }
}
