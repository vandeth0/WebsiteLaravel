import React, { Component } from 'react';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';
import { inject, observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';

inject('root');
@observer
export default class Solution extends Component {
  render() {
    window.scrollTo(0, 0);
    const array1 = [
      'The first international lottery company in Cambodia, established in 2021...',
      'The first international lottery company in Cambodia, established in 2021...',
      'The first international lottery company in Cambodia, established in 2021...',
      'The first international lottery company in Cambodia, established in 2021...',
    ];

    // pass a function to map
    const data_lotto = array1.map((x, id) => (
      <div
        key={id}
        className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 border"
      >
        <div
          className="row text-center pt-2"
          style={{
            background: 'linear-gradient(to right,#9901b7,#460ca7)',
            color: '#fff',
          }}
        >
          <h4>Lastest Lottery News</h4>
        </div>
        <div className="row">
          <div className="col-6 p-2">
            <img src="/images/photofile/315wdgwshwre.jpg" width="100%" alt="" />
          </div>
          <div className="col-6 p-2">
            <div>
              <span style={{ fontWeight: 'bold' }}>WL Paycam (Cambodia)</span>{' '}
              <br />
              {x}
            </div>
          </div>
        </div>
      </div>
    ));

    // pass a function to map
    const title1 = [
      'Scan QR Code',
      'Select Number & Confirm',
      'Give Your QR Code In Phone To Seller For Ticket Issues',
      'Tickets Select Numbers',
    ];
    const text1 = [
      'All you have to do is pick up your smartphone and turn on the camera to scan. Click on QR Code to select the lucky number picker You love',

      'After you choose the lucky number and click Button (Confirm) your number will be transferred to the table below. After you verify the number then just click the button (Ticket Issue) to get QR Code.',

      'Then give your QR Code to our lottery sales department. To scan and issue a Ticket for you and pay the Ticket fee.',

      'If you do not have internet or smart phone, you also can buy lottery ticket. And those papers you ask for from the branch of WL PAYCAM or come to the Office.',
    ];
    const photo1 = [
      '/images/photofile/qr code scan-01.jpg',
      '/images/photofile/photo scan qrcode.jpg',
      '/images/photofile/machine lotto.jpg',
      '/images/photofile/ticket lotto select number.jpg',
    ];
    const data_lotto_buy = text1.map((x, idx) => (
      <div key={idx} className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
        <img src={photo1[idx]} width="100%" className="my-3" />
        <h4>{title1[idx]}</h4>
        <p className="text-secondary">{x}</p>
      </div>
    ));

    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 my-2">
              <h4>Paycam Lotto 6/39</h4>
              <p>Solution</p>
            </div>

            <div className="col-xl-8 col-lg-8 col-12">
              <h4>Solution</h4>
              <p className="text-secondary">
                Solutions Development Solutions Future Solutions Inject a Pack
                Cam Star of Solutions (Integration) Develop future solutions of
                PK Cam Lotto Software Bank Tracker Manager Ticket Program
                Manager, Manual, Recruitment Program Tracker manager key Banking
                Manager Ticketing Software Do-it-yourself number picker
              </p>
              <div className="row">{data_lotto}</div>
              <div className="row">
                <div className="col-12 my-3">
                  <p className="text-secondary">
                    How to play lotto <br />
                    For convenience, we have a QR Code for you Scan to select
                    numbers yourself.
                  </p>
                  <h4>Buy Lotto Tickets - How it Works</h4>
                </div>

                <hr></hr>
                {data_lotto_buy}
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 moblie-view">
              <iframe
                src="https://www.youtube.com/embed/OeITwGpahw8"
                width="100%"
                frameBorder="0"
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/cGQ_uoMhJLM"
                width="100%"
                frameBorder="0"
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/OkQHT4EnKc0"
                width="100%"
                frameBorder="0"
              ></iframe>
              <NavLink to="/winningresutls/How_To_Get_Your_Prizes">
                <img
                  src="/images/photofile/1st2nd3rd.jpg"
                  width="100%"
                  alt=""
                />
              </NavLink>
              <NavLink to="/paycamlotto639/Agency">
                <img
                  src="/images/photofile/map cambodia.jpg"
                  width="100%"
                  alt=""
                />
              </NavLink>
            </div>

            <div className="col-12 my-3">
              <p className="text-secondary">
                Management program (L639) Basic management of stores :
                registration and deletion of stores, etc. Sales store operation
                management : Weekly draw and winning management, Real-time
                monitoring, Statistics management, Prize payment management.
                Sales status management : Sales amount management (sales status,
                deposit status, PAYCAM MONEY payment status), Sales settlement
                management and output, A/S and consumables management, Server
                and system management) Monitoring program (L639) Access status
                by store, External access trial detection. Bank management
                program (L639) Bank branch management, Deposits and withdrawals
                at stores, Lotto solution linked point management, The prize
                money, Fund management of direct management stores and
                headquarters Store ticketing program (M639 terminal program)
                Lottery issuance, Printout of sales statistics from stores,
                Consumables and A/S application, Winner confirmation and reissue
                tickets, Bank deposit and withdrawal management, PAYCAM MONEY
                Management Manual number selection program (QR639) Buyers can
                select six numbers from 1 to 39 using QR639, generate QR, and
                the generated QR is recognized by the QR recognizer mounted on
                M639, and buyers can quickly and accurately select and purchase
                the desired number. In the same way, six numbers can be
                simultaneously generated up to 10 games and recognized as QR.
                Manager (L639) Basic management of the store: Store registration
                and store cancellation, etc. Store Sales Management: Weekly Draw
                And winning management, real-time monitoring Statistics
                management, reward management. Sales Status Management: Sales
                Volume Management (Sales Status, Deposit Status, PayPal Payment
                Status Money) Sales Payment and Output Management A / S
                Management And use of server management and system management
              </p>
            </div>
            <div className="col-12 my-3">
              <h4 style={{ color: '#460ca7' }}>Lotto Game</h4>
              <p className="text-secondary">
                Low-skill low-cost game help you to win the life-changing big
                prize.
              </p>
              <button
                className="btn"
                style={{
                  background: 'linear-gradient(to right,#9901b7,#460ca7)',
                  color: '#fff',
                }}
              >
                PURCHASE
              </button>
              <button
                className="btn"
                style={{
                  background: 'linear-gradient(to right,#9901b7,#460ca7)',
                  color: '#fff',
                }}
              >
                GET STARTED
              </button>
            </div>

            <hr />
          </div>
        </div>
        <div>
          <Main_footer />
        </div>
      </>
    );
  }
}
