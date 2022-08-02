import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlignLeft,
  faBars,
  faCaretDown,
  faCoffee,
  faGlobe,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';
import ChooseListBall from '../Desk/ChooseListBall';
import { inject, observer } from 'mobx-react';
import Ball_List from 'Pages/Desk/Ball_List';

@inject('root')
@observer
export default class All_Winning_Numbers extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.ballListProvider;
    this.store.readBallListOut();
  }
  render() {
    // const checked = new Array();
    // pass a function to map
    const { ballListOut } = this.store;
    const ballShowList = ballListOut.map((item, idx) => {
      return (
        <li
          key={idx}
          onClick={(e) => {
            e.stopPropagation();
            this.store.ballShowListChooseChange(idx, idx + 1);
          }}
        >
          <span>{item.weekly} </span>
          <span>({item.date_draw})</span>
        </li>
      );
    });

    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-12 my-2">
                <h4>Winning Results</h4>
                <p>All Winning Numbers</p>
              </div>

              <div className="col-12 text-center">
                <h4>All Winning Numbers</h4>
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

              <div className="col-12 text-center ">
                <ChooseListBall />
              </div>
              <div className="col-12">
                <input
                  type="checkbox"
                  className="d-none"
                  name=""
                  id="date_list"
                />
                <div className="menu-btn btn btn-dark">
                  <label htmlFor="date_list" className="text-light ">
                    <span>
                      <FontAwesomeIcon icon={faSearch} /> Choose Date of The
                      Week
                    </span>{' '}
                    <FontAwesomeIcon icon={faCaretDown} />
                  </label>
                  <ul className="date_list">{ballShowList}</ul>
                </div>
              </div>
              <div className="col-12 link-hover my-5">
                <span className="text-secondary">
                  Preview Live Show at Facebook Page & YouTube Channel :
                </span>
                <br />
                <a
                  href="https://web.facebook.com/paycamcambodia/"
                  className="m-2"
                  target="_blank"
                >
                  <img
                    src="images/photofile/facebook1231.png"
                    width="30px"
                    alt=""
                    className="mx-2"
                  />
                  PayCam - Cambodia Co.,Ltd
                </a>
                <br />
                <a
                  href="https://www.youtube.com/channel/UCmUFVzBi1gymawt1Pwt58Gw/featured"
                  className="m-2"
                  target="_blank"
                >
                  <img
                    src="images/photofile/youtube-icon.png"
                    width="30px"
                    alt=""
                    className="mx-2"
                  />
                  WL PAYCAM(CAMBODIA)CO.,LTD
                </a>
              </div>

              <hr />

              <div className="col-12 my-3">
                <table className="table border">
                  <tbody>
                    <tr style={{ backgroundColor: '#6426ff', color: '#fff' }}>
                      <td>DRAW DATE</td>
                      <td> 24/05/2022</td>
                    </tr>
                    <tr>
                      <td>TOTAL SALES</td>
                      <td>$153,503</td>
                    </tr>
                    <tr style={{ backgroundColor: '#9901b7', color: '#fff' }}>
                      <td>NEXT DRAW DATE</td>
                      <td>31/05/2022</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-12">
                <Ball_List />
              </div>
            </div>
          </div>
          <div className="row py-5" style={{ background: '#f1f2f2' }}>
            <div className="col-12">
              <div className="container">
                <div className="row">
                  <div className="col-12 text-center">
                    <h4>
                      <b>
                        Purchase The Tickets <br />
                        Paycam Lotto
                      </b>
                    </h4>
                    <p>
                      Play from 1$ and up, Can choose 6 numbers out of 39. You
                      can choose the number directly and, <br />
                      Also you can select number automatically
                    </p>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <iframe
                      src=""
                      width="100%"
                      className="bg-dark"
                      frameBorder="0"
                    ></iframe>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <iframe
                      src=""
                      width="100%"
                      className="bg-dark"
                      frameBorder="0"
                    ></iframe>
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
