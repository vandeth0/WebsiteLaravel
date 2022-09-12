import React, { Component, Fragment } from 'react';
import Ball_List from '../Desk/Ball_List';
import Main_header from 'PagesKhmer/Data/Main_header';
import Main_footer from 'PagesKhmer/Data/Main_footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlignLeft,
  faBars,
  faCaretDown,
  faCoffee,
  faGlobe,
  faUser,
  faConfirm,
  faCheckCircle,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { inject, observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';

@inject('root')
@observer
export default class Check_Winning_Numbers extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.checkingWinningProvider;
  }
  render() {
    const chooseBall = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    ];
    const {
      chooseFromBall,
      numberSameValue,
      resultLotteryShow,
      resultWinningData,
    } = this.store;
    const { ballListOut } = this.props.root.ballListProvider;
    const numberValueData = 0;
    window.scrollTo(0, 0);
    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="container-fluid font-khmer-language">
          <div className="container">
            <div className="row">
              <div className="col-12 my-4">
                <h4>លទ្ធផលឆ្នោតឡូតូ</h4>
                <p>ពិនិត្យមើលលទ្ធផលគ្រាប់ឡូតូ</p>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-12 my-3">
                    <h4>ស្វែងរកលេខឈ្នះ</h4>
                    <ul className="list-unstyled">
                      <li className="list-inline-item">
                        <label
                          htmlFor="Choose-your-ball-number"
                          className="btn btn-outline-dark"
                          onClick={(e) => {
                            e.stopPropagation();
                            this.store.clearValueWinning();
                          }}
                        >
                          <img
                            src="/images/photofile/icon paycam 639.png"
                            width="40px"
                            alt=""
                          />{' '}
                          <b>ជ្រើសរើសលេខឡូតូរបស់អ្នក</b>
                        </label>
                      </li>
                    </ul>
                    <h4>Results Numbers</h4>
                    <table className="table border text-center">
                      <thead
                        style={{
                          background:
                            'linear-gradient(to right,#9901b7,#460ca7)',
                          color: '#fff',
                          textAlign: 'center',
                        }}
                      >
                        <tr>
                          <th colSpan="2">លទ្ធផល</th>
                        </tr>
                      </thead>
                      <tbody
                        style={{ background: '#f4f4f4', color: '#460ca7' }}
                      >
                        <tr>
                          <td>លេខ</td>
                          <td>
                            {resultLotteryShow.map((item, idx) => {
                              return (
                                <span
                                  key={idx}
                                  className="mx-2"
                                  style={{ fontWeight: 'bold' }}
                                >
                                  {ballListOut.slice(0, 1).map((items, idx) => {
                                    if (
                                      item == items.num1 ||
                                      item == items.num2 ||
                                      item == items.num3 ||
                                      item == items.num4 ||
                                      item == items.num5 ||
                                      item == items.num6
                                    ) {
                                      return (
                                        <span
                                          key={idx}
                                          className=" text-danger"
                                        >
                                          {item}
                                        </span>
                                      );
                                    } else if (item == items.bonus) {
                                      return (
                                        <span
                                          key={idx}
                                          className=" text-warning"
                                        >
                                          {item}
                                        </span>
                                      );
                                    } else {
                                      return (
                                        <span key={idx} className=" text-dark">
                                          {item}
                                        </span>
                                      );
                                    }
                                  })}
                                </span>
                              );
                            })}
                          </td>
                        </tr>
                        <tr>
                          <td>ជុំ</td>
                          <td>
                            {ballListOut.slice(0, 1).map((item, idx) => {
                              return (
                                <div key={idx} className="text-dark">
                                  {item.weekly}
                                </div>
                              );
                            })}
                          </td>
                        </tr>
                        <tr>
                          <td>លេខឡូតូ</td>
                          <td>
                            {ballListOut.slice(0, 1).map((item, idx) => {
                              return (
                                <Fragment key={idx}>
                                  <span className="mx-2 text-dark">
                                    {item.num1}
                                  </span>
                                  <span className="mx-2 text-dark">
                                    {item.num2}
                                  </span>
                                  <span className="mx-2 text-dark">
                                    {item.num3}
                                  </span>
                                  <span className="mx-2 text-dark">
                                    {item.num4}
                                  </span>
                                  <span className="mx-2 text-dark">
                                    {item.num5}
                                  </span>
                                  <span className="mx-2 text-dark">
                                    {item.num6}
                                  </span>
                                  <span className="mx-2 text-dark">+</span>
                                  <span className="mx-2 text-dark">
                                    {item.bonus}
                                  </span>
                                </Fragment>
                              );
                            })}
                          </td>
                        </tr>
                        <tr>
                          <td>លទ្ធផល</td>
                          <td>{resultWinningData}</td>
                        </tr>
                      </tbody>
                    </table>
                    <button className="btn btn-success m-3">
                      <NavLink
                        to="/khmer/winningresults/How_To_Get_Your_Prizes"
                        className="text-light"
                      >
                        ចូលទៅមើលព័ត៌មានលម្អិតនៃរង្វាន់
                      </NavLink>
                    </button>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-12 d-flex justify-content-center align-items-center">
                    <Ball_List />
                  </div>
                </div>
              </div>
              <input
                type="checkbox"
                name=""
                id="Choose-your-ball-number"
                className="d-none"
              />
              <div className="Choose-your-ball-number">
                <div className="main-choose p-5">
                  <h4>ជ្រើសរើសលេខឡូតូ</h4>
                  <hr />
                  {chooseFromBall.map((item, idx) => {
                    return (
                      <button
                        key={idx}
                        className="btn btn-success text-light mx-1"
                        style={{
                          background:
                            'linear-gradient(to right,#9901b7,#460ca7)',
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          this.store.chooseFromBallRemove(idx, '1');
                          this.store.numberSameValueRemove(0, item - 1);
                        }}
                      >
                        {item}
                      </button>
                    );
                  })}
                  <hr />
                  <ul>
                    {chooseBall.map((item, idx) => {
                      return (
                        <li key={idx}>
                          <button
                            disabled={numberSameValue[idx] == 1 ? true : false}
                            className="btn btn-success border my-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              this.store.chooseFromBallEnter(idx + 1);
                              this.store.numberSameValueEnter(1, idx);
                            }}
                          >
                            {item}
                          </button>
                        </li>
                      );
                    })}
                    {chooseFromBall.length > 5 ? (
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          width: '100%',
                          height: '100%',
                          backgroundColor: 'rgba(0,0,0,0.8)',
                          color: '#fff',
                        }}
                      >
                        <div className="text-center">
                          ចំនួននៃការរើស គឺ ៦ លេខ <br />
                          ចុចលើលេខដើម្បីលុប ១ នៃចំនួនសរុប
                          <hr />
                          {ballListOut.slice(0, 1).map((item, idx) => {
                            return (
                              <label
                                key={idx}
                                htmlFor="Choose-your-ball-number"
                                className="btn btn-warning"
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  this.store.resultLottery(
                                    item.num1,
                                    item.num2,
                                    item.num3,
                                    item.num4,
                                    item.num5,
                                    item.num6,
                                    item.bonus
                                  );
                                }}
                              >
                                <FontAwesomeIcon icon={faCheck} /> ស្វែងរក
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                  </ul>
                  <label
                    htmlFor="Choose-your-ball-number"
                    className="btn btn-warning"
                    style={{ position: 'absolute', bottom: '0', right: '0' }}
                  >
                    <FontAwesomeIcon icon={faClose} /> បិទ
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row py-5" style={{ background: '#f1f2f2' }}>
            <div className="col-12">
              <div className="container">
                <div className="row">
                  <div className="col-12 text-center">
                    <h4>
                      <b>លទ្ធផលលេខគ្រាប់ឡូតូឈ្នះ</b>
                    </h4>
                    <p>
                      ឆ្នោតនឹងផ្សាយផ្ទាល់នៅម៉ោង ៨:០០ យប់ <br />
                      នៅលើកញ្ចក់ទូរទស្សន៍ប៉ុស្តិ៍លេខ ៩ រៀងរាល់ថ្ងៃអង្គារ
                    </p>
                  </div>
                  <div className="col-12 link-hover">
                    <span className="text-secondary">
                      មើល​ការ​ផ្សាយ​ផ្ទាល់​នៅ​ Facebook Page & YouTube Channel៖
                    </span>
                    <br />
                    <a
                      href="https://web.facebook.com/paycamcambodia/"
                      className=""
                      target="_blank"
                    >
                      <img
                        src="/images/photofile/facebook1231.png"
                        width="30px"
                        alt=""
                        className="m-2"
                      />
                      PayCam - Cambodia Co.,Ltd
                    </a>
                    <br />
                    <a
                      href="https://www.youtube.com/channel/UCmUFVzBi1gymawt1Pwt58Gw/featured"
                      className=""
                      target="_blank"
                    >
                      <img
                        src="/images/photofile/youtube-icon.png"
                        width="30px"
                        alt=""
                        className="m-2"
                      />
                      WL PAYCAM(CAMBODIA)CO.,LTD
                    </a>
                    <br />
                    <img
                      src="/images/photofile/result lotto on june 29.06.2022 copy.png"
                      width="300px"
                    />
                  </div>
                </div>
              </div>
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
