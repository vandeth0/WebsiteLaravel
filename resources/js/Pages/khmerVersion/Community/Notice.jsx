import React, { Component, Fragment } from 'react';
import Main_header from '../Data/Main_header';
import Main_footer from '../Data/Main_footer';
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
  faGlobe,
  faStreetView,
  faTrash,
  faUser,
  faUsersViewfinder,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import NoticeShow from 'Pages/Community/NoticeShow';
import NoticeEdit from 'Pages/Community/NoticeEdit';
import { inject, observer } from 'mobx-react';

@inject('root')
@observer
export default class Notice extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.noticeProvider;
    this.store.addModalShow();
    this.store.readNotice();
  }
  render() {
    const { noticeList, noticeListNext, previousNotice, NextNotice } =
      this.store;
    const numberNotice = previousNotice;
    const { session } = this.props.root.loginProvider;
    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="container font-khmer-language">
          <div className="row">
            <div className="col-12 my-4">
              <h4>សហគមន៍</h4>
              <p>សេចក្ដីជូនដំណឹង</p>
            </div>

            <div className="col-12 text-center">
              <h4>សេចក្ដីជូនដំណឹង</h4>
            </div>

            <div className="col-12 mb-4 d-flex justify-content-center">
              <div
                style={{
                  height: '7px',
                  width: '25px',
                  background: '#00bbff',
                  float: 'left',
                }}
              ></div>
              <div
                style={{
                  height: '7px',
                  width: '25px',
                  background: '#ff0000',
                  float: 'left',
                }}
              ></div>
              <div
                style={{
                  height: '7px',
                  width: '25px',
                  background: '#6426ff',
                  float: 'left',
                }}
              ></div>
            </div>

            {noticeList &&
              noticeList.length > 0 &&
              noticeList
                .map((item, idx) => {
                  console.log(idx);
                  return (
                    <Fragment key={idx}>
                      <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12 my-2 d-flex align-items-center">
                        <img
                          src={`/storage/Notice/${item.file_hash}`}
                          alt=""
                          width="100%"
                          className="border"
                        />
                      </div>

                      <label
                        onClick={(e) => {
                          e.stopPropagation();
                          this.store.changeNoticeList(idx, idx + 1);
                        }}
                        className="font-khmer-language text-info col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 my-2 hover-content"
                        htmlFor="menu-ball-list-check"
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          padding: '10px',
                        }}
                      >
                        <div className="">
                          <span style={{ fontWeight: 'bold' }}>
                            {item.title.length > 30 ? (
                              <span>{item.title.substr(0, 30)}...</span>
                            ) : (
                              <span>{item.title}</span>
                            )}
                          </span>
                          <br />
                          <span
                            style={{ whiteSpace: 'normal', color: '#d0d0d0' }}
                          >
                            <span style={{ fontSize: '14px' }}>
                              {item.contents.length > 50 ? (
                                <span>{item.contents.substr(0, 50)}...</span>
                              ) : (
                                <span>{item.contents}</span>
                              )}
                            </span>

                            <br />
                          </span>
                          <span
                            style={{ whiteSpace: 'normal', fontSize: '10px' }}
                            className="text-secondary"
                          >
                            {item.register_at}
                          </span>
                        </div>

                        <div className="">
                          {session.username === 'admin' && session.password ? (
                            <Fragment>
                              <label
                                className="text-info"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const confirmCheck = confirm('Save?');
                                  if (confirmCheck === true) {
                                    this.store.deletedNotice(item);
                                  }
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  className="mx-2"
                                />
                              </label>
                              <label
                                className="text-info"
                                htmlFor="menu-ball-list-check-edit"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  this.store.editModalShow(item);
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={faEdit}
                                  className="mx-2"
                                />
                              </label>
                            </Fragment>
                          ) : (
                            ''
                          )}
                          <label
                            onClick={(e) => {
                              e.stopPropagation();
                              this.store.changeNoticeList(idx, idx + 1);
                            }}
                            className="text-info"
                            htmlFor="menu-ball-list-check"
                          >
                            <FontAwesomeIcon icon={faBook} className="mx-2" />
                          </label>
                        </div>
                      </label>
                    </Fragment>
                  );
                })
                .slice(noticeListNext.start, noticeListNext.end)}
            {noticeList
              .map((item, idx) => {
                return (
                  <div key={idx}>
                    {noticeList.length > 0 ? (
                      <button
                        type="button"
                        className="btn btn-primary"
                        style={{ marginRight: '10px' }}
                        disabled={numberNotice > 0 ? false : true}
                        onClick={(e) => {
                          e.stopPropagation();
                          this.store.noticeCommentChange(
                            noticeListNext.start - 5,
                            noticeListNext.start
                          );
                          this.store.nextNoticeChangeValue(-5);
                          this.store.previousNoticeChange();
                        }}
                      >
                        <FontAwesomeIcon icon={faAngleLeft} /> Previous
                      </button>
                    ) : (
                      ''
                    )}

                    {noticeList.length > 0 ? (
                      <Fragment>
                        <div
                          className="btn btn-outline-dark"
                          style={{ marginRight: '10px' }}
                        >
                          {numberNotice + 1}
                        </div>
                        <button
                          className="btn btn-primary my-3"
                          disabled={
                            NextNotice < noticeList.length ? false : true
                          }
                          onClick={(e) => {
                            e.stopPropagation();
                            this.store.noticeCommentChange(
                              noticeListNext.end,
                              noticeListNext.end + 5
                            );
                            this.store.nextNoticeChange();
                            this.store.nextNoticeChangeValue(5);
                          }}
                        >
                          Next <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                      </Fragment>
                    ) : (
                      ''
                    )}
                  </div>
                );
              })
              .slice(noticeList.length - 1, noticeList.length)}
          </div>
          <input
            type="checkbox"
            name=""
            id="menu-ball-list-check"
            className="d-none"
          />
          <input
            type="checkbox"
            name=""
            id="menu-ball-list-check-edit"
            className="d-none"
          />
          <div
            className="menu-notice-show d-flex align-items-center justify-content-center"
            style={{ background: 'rgba(0,0,0,0.8)' }}
          >
            <div className="bg-light p-5">
              <div className="row">
                <NoticeShow />
              </div>
              <hr />
              <label
                htmlFor="menu-ball-list-check"
                className="btn btn-dark"
                style={{ float: 'right' }}
              >
                <FontAwesomeIcon icon={faArrowLeft} /> Back
              </label>
            </div>
          </div>
          <div className="menu-notice-show-edit border">
            <label htmlFor="menu-ball-list-check-edit" className="btn btn-dark">
              <FontAwesomeIcon icon={faArrowLeft} /> Back
            </label>
            <NoticeEdit />
          </div>
        </div>
        <div>
          <Main_footer />
        </div>
      </>
    );
  }
}
