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
  faGlobe,
  faStreetView,
  faTrash,
  faUser,
  faUsersViewfinder,
} from '@fortawesome/free-solid-svg-icons';
import NewsShow from './NewsShow';
import NewsEdit from './NewsEdit';
import { isEmpty } from 'lodash';

@inject('root')
@observer
export default class News extends Component {
  constructor(props) {
    super(props);
    // this.store = props.root.loginProvider;
    this.store = props.root.newsProvider;
    this.store.addModalShow();
    this.store.readNews();
    this.s = props.root.userLoginProvider;
    this.s.readUserLogin();
  }
  render() {
    const { newsList, newsListNext, previousNews, NextNews } =
      this.props.root.newsProvider;
    const numberNews = previousNews;
    const { session, sessionall } = this.props.root.userLoginProvider;
    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 my-2">
              <h4>Community</h4>
              <p>News</p>
            </div>

            <div className="col-12 text-center">
              <h4>News</h4>
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

            {newsList &&
              newsList.length > 0 &&
              newsList
                .map((item, idx) => {
                  return (
                    <Fragment key={idx}>
                      <label
                        htmlFor="check-news-show-list"
                        onClick={(e) => {
                          e.stopPropagation();
                          this.store.changeNewsShowList(idx, idx + 1);
                        }}
                        className="font-khmer-language"
                      >
                        <div
                          className="col-12 my-2 menu-new-hover d-flex"
                          style={{ justifyContent: 'space-between' }}
                        >
                          <div className="text-dark">
                            <h2 style={{ whiteSpace: 'normal' }}>
                              {item.title.length > 30 ? (
                                <span>{item.title.substr(0, 30)}...</span>
                              ) : (
                                <span>{item.title}</span>
                              )}
                            </h2>
                            <p style={{ whiteSpace: 'normal' }}>
                              {item.contents.length > 50 ? (
                                <span>{item.contents.substr(0, 50)}...</span>
                              ) : (
                                <span>{item.contents}</span>
                              )}
                            </p>
                            <p
                              style={{
                                whiteSpace: 'normal',
                                color: '#bdbdbd',
                                fontSize: '10px',
                              }}
                            >
                              {item.register_at}
                            </p>
                          </div>
                          <div>
                            <img
                              src={`storage/News/${item.file_hash}`}
                              width="150px"
                              alt=""
                            />
                          </div>
                        </div>
                      </label>
                      {session.username == sessionall.username &&
                      session.password == sessionall.password ? (
                        <Fragment>
                          <label
                            htmlFor="check-news-show-list-edit"
                            className="text-info"
                            onClick={(e) => {
                              e.stopPropagation();
                              this.store.editModalShow(item);
                            }}
                          >
                            <FontAwesomeIcon icon={faEdit} /> Edit
                          </label>
                          <label
                            className="text-warning"
                            onClick={(e) => {
                              e.stopPropagation();
                              const confirmCheck = confirm('Save?');
                              if (confirmCheck === true) {
                                this.store.deletedNews(item);
                              }
                            }}
                          >
                            <FontAwesomeIcon icon={faTrash} /> Delete
                          </label>
                        </Fragment>
                      ) : (
                        ''
                      )}

                      <hr />
                      <div></div>
                    </Fragment>
                  );
                })
                .slice(newsListNext.start, newsListNext.end)}

            {newsList
              .map((item, idx) => {
                return (
                  <div key={idx}>
                    {newsList.length > 0 ? (
                      <button
                        type="button"
                        className="btn btn-primary"
                        style={{ marginRight: '10px' }}
                        disabled={numberNews > 0 ? false : true}
                        onClick={(e) => {
                          e.stopPropagation();
                          this.store.newsCommentChange(
                            newsListNext.start - 5,
                            newsListNext.start
                          );
                          this.store.nextNewsChangeValue(-5);
                          this.store.previousNewsChange();
                        }}
                      >
                        <FontAwesomeIcon icon={faAngleLeft} /> Previous
                      </button>
                    ) : (
                      ''
                    )}

                    {newsList.length > 0 ? (
                      <Fragment>
                        <div
                          className="btn btn-outline-dark"
                          style={{ marginRight: '10px' }}
                        >
                          {numberNews + 1}
                        </div>
                        <button
                          className="btn btn-primary my-3"
                          disabled={NextNews < newsList.length ? false : true}
                          onClick={(e) => {
                            e.stopPropagation();
                            this.store.newsCommentChange(
                              newsListNext.end,
                              newsListNext.end + 5
                            );
                            this.store.nextNewsChange();
                            this.store.nextNewsChangeValue(5);
                          }}
                        >
                          Next
                          <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                      </Fragment>
                    ) : (
                      ''
                    )}
                  </div>
                );
              })
              .slice(newsList.length - 1, newsList.length)}
          </div>
        </div>
        <div>
          <Main_footer />
        </div>
        <input type="checkbox" id="check-news-show-list" className="d-none" />
        <input
          type="checkbox"
          id="check-news-show-list-edit"
          className="d-none"
        />
        <div className="menu-new-show-list">
          <div className="container">
            <label className="btn btn-dark" htmlFor="check-news-show-list">
              Back
            </label>
            <NewsShow />
          </div>
        </div>
        <div className="menu-new-show-list-edit">
          <div className="container">
            <label className="btn btn-dark" htmlFor="check-news-show-list-edit">
              Back
            </label>
            <NewsEdit />
          </div>
        </div>
      </>
    );
  }
}
