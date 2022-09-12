import React, { Component, Fragment } from 'react';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';
import { inject, observer } from 'mobx-react';
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
  faUser,
  faUsersViewfinder,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

@inject('root')
@observer
export default class QnA extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.qnaProvider;
    this.store.readQNA();
  }

  render() {
    window.scrollTo(0, 0);
    const { inputQNA, qnaList, qnaListNext, qnaComment, previousQna, NextQna } =
      this.store;
    const numberQna = previousQna;
    const dataComment = qnaList
      .map((qnaItem, idx) => {
        return (
          <div key={`qna-idx${idx}`}>
            <div className="card-header">
              <img
                src="/images/photofile/logo app paycam.png"
                width="25px"
                height="25px"
                alt=""
              />{' '}
              <span className="text-secondary">User Name</span>
            </div>
            <div className="card-body">
              <p style={{ whiteSpace: 'normal' }}>{qnaItem.comment}</p>{' '}
            </div>
            <div
              className="card-footer mb-3"
              style={{
                background: 'linear-gradient(to right,#9901b7,#460ca7)',
                color: '#fff',
              }}
            >
              <span style={{ fontSize: '14px' }}>{qnaItem.created_at}</span>
            </div>
          </div>
        );
      })
      .slice(qnaListNext.start, qnaListNext.end);

    const nextPrevious = qnaList
      .map((item, idx) => {
        return (
          <div key={idx}>
            {qnaList.length > 0 ? (
              <button
                type="button"
                className="btn btn-primary"
                style={{ marginRight: '10px' }}
                disabled={numberQna > 0 ? false : true}
                onClick={(e) => {
                  e.stopPropagation();
                  this.store.qnaCommentChange(
                    qnaListNext.start - 5,
                    qnaListNext.start
                  );
                  this.store.nextQnaChangeValue(-5);
                  this.store.previousQnaChange();
                  window.scrollTo(0, 0);
                }}
              >
                <FontAwesomeIcon icon={faAngleLeft} /> Previous
              </button>
            ) : (
              ''
            )}

            {qnaList.length > 0 ? (
              <Fragment>
                <div
                  className="btn btn-outline-dark"
                  style={{ marginRight: '10px' }}
                >
                  {numberQna + 1}
                </div>
                <button
                  className="btn btn-primary my-3"
                  disabled={NextQna < qnaList.length ? false : true}
                  onClick={(e) => {
                    e.stopPropagation();
                    this.store.qnaCommentChange(
                      qnaListNext.end,
                      qnaListNext.end + 5
                    );
                    this.store.nextQnaChange();
                    this.store.nextQnaChangeValue(5);
                    window.scrollTo(0, 0);
                  }}
                >
                  Next
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </Fragment>
            ) : (
              'r4567'
            )}
          </div>
        );
      })
      .slice(qnaList.length - 1, qnaList.length);

    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="container" id="main-body">
          <div className="row">
            <div className="col-12 my-2">
              <h4>Community</h4>
              <p>Question and Answer</p>
            </div>

            <div className="col-12">
              <h4>Question and Answer</h4>
              <p>
                Welcome to Paycam, How can we help you? You can comment below.
              </p>
            </div>
            <div className="col-xl-8 col-lg-8  col-12">
              <div style={{ width: '100%' }}>
                <input
                  type="text"
                  name=""
                  id=""
                  value={inputQNA}
                  className="form-control"
                  placeholder="Comment Anythings..."
                  style={{ height: '200px' }}
                  onChange={(e) => {
                    e.stopPropagation();
                    const { value } = e.target;
                    this.store.inputQNAChange(value);
                  }}
                />
                <button
                  className="btn"
                  style={{
                    background: 'linear-gradient(to right,#9901b7,#460ca7)',
                    color: '#fff',
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    const confirmCheck = confirm('Save Msg?');
                    if (confirmCheck === true) {
                      this.store.createdQNA();
                    }
                  }}
                >
                  Comment
                </button>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-12 moblie-none">
              <NavLink to="/paycamlotto639/Solution">
                <img
                  src="/images/photofile/photo scan qrcode.jpg"
                  width="50%"
                  alt=""
                />
                <p>How to play with Scan QR Code?</p>
              </NavLink>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
              <div className="main-bg border">
                <input type="radio" name="a" id="recents1" />
                <label htmlFor="recents1" className="cmm-text1">
                  {' '}
                  Recents
                </label>
                <input type="radio" name="a" id="recents2" />
                <label htmlFor="recents2" className="cmm-text2">
                  {' '}
                  Newest
                </label>
                <input type="radio" name="a" id="recents3" />
                <label htmlFor="recents3" className="cmm-text3">
                  {' '}
                  Oldest
                </label>
                <input type="radio" name="a" id="recents4" />
                <label htmlFor="recents4" className="cmm-text4">
                  {' '}
                  Most Comment
                </label>

                <hr />

                <ul className="menu-comment">
                  <li className="recents">
                    <h4>Recents</h4>
                    {dataComment}
                    {nextPrevious}
                  </li>
                  <li className="newest">
                    <h4>Newest</h4>
                    {dataComment}
                    {nextPrevious}
                  </li>
                  <li className="oldest">
                    <h4>Oldest</h4>
                    {dataComment}
                    {nextPrevious}
                  </li>
                  <li className="most">
                    <h4>Most Comment</h4>
                    {dataComment}
                    {nextPrevious}
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-4 moblie-none">
              <h4>FQA</h4>
              <p>You Can Review The Answer Below</p>
              <details>
                <summary>How to play lotto paycam?</summary>
                <ol>
                  <li>Lotto is most popular lottery game above the world.</li>
                  <li>
                    In more than 90 countries, lotto is played as a public
                    lottery game and occupied 70% of lottery market.
                  </li>
                  <li>
                    As a international standard lottery service, WL Paycam
                    launched March 2022 in Cambodia.
                  </li>
                  <li>
                    Lotto 6/39 means customer select 6 number among 39 numbers.
                    When drawing number, all customers of 6 numbers matched with
                    6 drawn numbers, 1st prize will come.
                  </li>
                </ol>
              </details>
            </div>
          </div>
        </div>
        <div>
          <Main_footer />
        </div>
      </>
    );
  }
}
