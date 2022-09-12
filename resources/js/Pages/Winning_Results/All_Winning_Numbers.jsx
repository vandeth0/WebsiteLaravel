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
    this.ss = props.root.ballApiProvider;
    this.ss.ballApiResult();
  }
  render() {
    window.scrollTo(0, 0);
    // const checked = new Array();
    // pass a function to map
    const { ballListOut } = this.store;
    const { ballApiList, ballApiResults } = this.ss;
    const ballShowList = ballApiResults.map((item, idx) => {
      return (
        <li key={idx}>
          <span
            onClick={(e) => {
              e.stopPropagation();
              this.ss.valueChangeBallList(idx, idx + 1);
            }}
          >
            {item.weekly} ({item.date_draw})
          </span>
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

              <div className="col-xl-8 col-lg-8 col-12">
                <h4>Weekly Lottery Results</h4>
                <ChooseListBall />
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
                  <ul className="date_list ">{ballShowList}</ul>
                </div>
                <hr />
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
                    src="/images/photofile/facebook1231.png"
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
                    src="/images/photofile/youtube-icon.png"
                    width="30px"
                    alt=""
                    className="mx-2"
                  />
                  WL PAYCAM(CAMBODIA)CO.,LTD
                </a>
                <hr />
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
              <div className="col-xl-3 col-lg-3 col-12">
                <h4>
                  <b>
                    Purchase The Tickets <br />
                    Paycam Lotto
                  </b>
                </h4>
                <p>
                  Play from 1$ and up, Can choose 6 numbers out of 39. You can
                  choose the number directly and, <br />
                  Also you can select number automatically
                </p>
                <iframe
                  src=""
                  width="100%"
                  className="bg-dark"
                  frameBorder="0"
                ></iframe>
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
        <div>
          <Main_footer />
        </div>
      </>
    );
  }
}
