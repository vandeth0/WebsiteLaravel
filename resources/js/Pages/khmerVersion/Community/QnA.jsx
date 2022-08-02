import React, { Component, Fragment } from 'react';
import Main_header from '../Data/Main_header';
import Main_footer from '../Data/Main_footer';
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

@inject('root')
@observer
export default class QnA extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.qnaProvider;
    this.store.readQNA();
  }

  render() {
    const { inputQNA, qnaList, qnaListNext, qnaComment, previousQna, NextQna } =
      this.store;
    const numberQna = previousQna;
    const dataComment = qnaList
      .map((qnaItem, idx) => {
        return (
          <div key={`qna-idx${idx}`}>
            <div className="card-header">
              <img
                src="images/photofile/logo app paycam.png"
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
                }}
              >
                <FontAwesomeIcon icon={faAngleLeft} /> ត្រលប់ក្រោយ
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
                  }}
                >
                  ទៅមុខ <FontAwesomeIcon icon={faAngleRight} />
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
        <div className="container font-khmer-language">
          <div className="row">
            <div className="col-12 my-4">
              <h4>សហគមន៍</h4>
              <p>សំនួរ និង ចម្លើយ</p>
            </div>

            <div className="col-12 text-center">
              <h4>សំនួរ និង ចម្លើយ</h4>
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

            <div className="col-12">
              <h4>សំនួរ និង ចម្លើយ</h4>
              <p>
                សូមស្វាគមន៍មកកាន់ ផេខេម តើយើងអាចជួយអ្នកដោយរបៀបណា?
                អ្នកអាចបញ្ចេញមតិខាងក្រោម។
              </p>
            </div>

            <input
              type="text"
              name=""
              id=""
              value={inputQNA}
              className="form-control"
              placeholder="មតិយោបល់អ្វីក៏បាន..."
              style={{ height: '150px' }}
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
              មតិយោបល់
            </button>
          </div>
        </div>
        <hr />
        <div className="main-bg border font-khmer-language">
          <input type="radio" name="a" id="recents1" />
          <label htmlFor="recents1" className="cmm-text1">
            {' '}
            ថ្មីៗ
          </label>
          <input type="radio" name="a" id="recents2" />
          <label htmlFor="recents2" className="cmm-text2">
            {' '}
            ថ្មីបំផុត
          </label>
          <input type="radio" name="a" id="recents3" />
          <label htmlFor="recents3" className="cmm-text3">
            {' '}
            ចាស់បំផុត
          </label>
          <input type="radio" name="a" id="recents4" />
          <label htmlFor="recents4" className="cmm-text4">
            {' '}
            ច្រើនបំផុត
          </label>

          <hr />

          <ul className="menu-comment">
            <li className="recents">
              <h4>ថ្មីៗ</h4>
              {dataComment}
              {nextPrevious}
            </li>
            <li className="newest">
              <h4>ថ្មីបំផុត</h4>
              {dataComment}
              {nextPrevious}
            </li>
            <li className="oldest">
              <h4>ចាស់បំផុត</h4>
              {dataComment}
              {nextPrevious}
            </li>
            <li className="most">
              <h4>ច្រើនបំផុត</h4>
              {dataComment}
              {nextPrevious}
            </li>
          </ul>
        </div>
        <div>
          <Main_footer />
        </div>
      </>
    );
  }
}
