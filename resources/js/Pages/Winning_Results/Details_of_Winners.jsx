import React, { Component } from 'react';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';

import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faCoffee,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

export default class Details_of_Winners extends Component {
  render() {
    window.scrollTo(0, 0);
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
                <p>Details of Winners</p>
              </div>

              <div className="col-12">
                <p className="text-secondary">
                  Prize : $154,201 <br />
                  The payment rate is 50% of the total sales price.
                </p>
              </div>

              <div className="col-12">
                <table
                  className="table border "
                  style={{
                    background: 'linear-gradient(to right,#9901b7,#460ca7)',
                    color: '#fff',
                  }}
                >
                  <thead>
                    <tr className="text-left">
                      <th className="h4">
                        <b>Details of Winners</b>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>Total Issued Lottery</td>
                      <td className=" border text-center">$---</td>
                    </tr>
                    <tr>
                      <td>1st Prize</td>
                      <td className=" border text-center">$---</td>
                    </tr>
                    <tr>
                      <td>1st</td>
                      <td className="border text-center">$---</td>
                    </tr>
                    <tr>
                      <td>2nd</td>
                      <td className=" border text-center">$---</td>
                    </tr>
                    <tr>
                      <td>3rd</td>
                      <td className=" border text-center">$---</td>
                    </tr>
                    <tr>
                      <td>4th</td>
                      <td className=" border text-center">$---</td>
                    </tr>
                    <tr>
                      <td>5th</td>
                      <td className=" border text-center">$---</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row py-5 my-5" style={{ background: '#f1f2f2' }}>
            <div className="col-12">
              <div className="container">
                <div className="row">
                  <div className="col-12 text-center">
                    <h4>
                      <b>People Has Been Purchase</b>
                    </h4>
                    <p>
                      Choose the numbers you love. <br />
                      test your lucky now.
                    </p>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-12 py-3 text-center">
                    <h4>
                      <b>POPURATION</b>
                    </h4>
                    <p>The people has been register</p>
                    <div className="d-flex align-items-center justify-content-center">
                      <div>
                        <button
                          className="btn"
                          style={{
                            background:
                              'linear-gradient(to right,#9901b7,#460ca7)',
                            color: '#fff',
                          }}
                        >
                          {' '}
                          Join Now
                        </button>
                        <span className="mx-5"> | </span>
                        <span>
                          <FontAwesomeIcon icon={faUser} /> 103,492
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-12 py-3  text-center">
                    <h4>
                      <b>Purchase from $1 up</b>
                    </h4>
                    <p>Choose the numbers you love</p>
                    <div className="d-flex align-items-center justify-content-center">
                      <div>
                        <button
                          className="btn"
                          style={{
                            background:
                              'linear-gradient(to right,#9901b7,#460ca7)',
                            color: '#fff',
                          }}
                        >
                          {' '}
                          Purchase
                        </button>
                        <span className="mx-5"> | </span>
                        <span>
                          <FontAwesomeIcon icon={faUser} /> 103,492
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mt-5 text-center">
                    <h4>Video of Lotto Draw</h4>
                    <p>Here is the full video of lotto draw</p>
                    <iframe
                      src="https://www.youtube.com/embed/rBCROqvElRg"
                      frameBorder="0"
                      width="100%"
                    ></iframe>
                    <p>
                      With such as vast range of lotteries available for you to
                      play, and the ease of access we all have to the Internet
                      nowadays many people prefer to quickly check their lottery
                      results online. If you have bought a lottery ticket, then
                      you will be anxious to find out what the winning numbers
                      are for that specific draw.
                    </p>
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
