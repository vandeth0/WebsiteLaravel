import React, { Component } from 'react';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';

export default class PayCam_Lotto_Protocol extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 my-2">
              <h4>About Us</h4>
              <p>PayCam Lotto Protocol(PLP)</p>
            </div>

            <div className="col-12">
              <img
                style={{
                  borderTop: '15px solid #460ca7',
                  borderLeft: '15px solid #9901b7',
                  borderRight: '15px solid #460ca7',
                  borderBottom: '15px solid #9901b7',
                }}
                src="/images/photofile/protocol.jpg"
                width="100%"
                alt=""
              />
            </div>

            <div className="col-12 my-3">
              <h4 style={{ color: '#460ca7' }}>PayCam Lotto Protocol</h4>
              <hr />
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-12  d-flex align-items-center">
              <div>
                <p>
                  PayCam Lotto Protocol (PLP) is a decentralized cryptocurrency
                  system that integrates online and offline by combining
                  blockchain with the existing lottery system, paying attention
                  to the security and reliability of blockchain. PayCam Lotto
                  Protocol (PLP) is a new concept lottery system that goes
                  beyond the existing closed and traditional operation method by
                  combining blockchain and lottery system. It provide users with
                  more opportunities and PLP rewards programs through user-
                  centric modules, strong marketing, and unique business models.
                </p>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-12 ">
              <img src="/images/photofile/bitforex.png" width="100%" alt="" />
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-12 my-3 d-flex align-items-center">
              <div>
                <p>
                  PayCam Lotto Protocol (PLP) is a decentralized cryptocurrency
                  system that integrates online and offline by combining
                  blockchain with the existing lottery system, paying attention
                  to the security and reliability of blockchain. PayCam Lotto
                  Protocol (PLP) is a new concept lottery system that goes
                  beyond the existing closed and traditional operation method by
                  combining blockchain and lottery system. It provide users with
                  more opportunities and PLP rewards programs through user-
                  centric modules, strong marketing, and unique business models.
                </p>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-12 ">
              <img src="/images/photofile/foblgate.png" width="100%" alt="" />
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
