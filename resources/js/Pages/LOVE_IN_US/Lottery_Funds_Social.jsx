import React, { Component } from 'react';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';

export default class Lottery_Funds_Social extends Component {
  render() {
    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 my-2">
              <h4>LOVE IN US</h4>
              <p>Lottery Funds Social</p>
            </div>

            <div className="col-12 text-center">
              <h4>Lottery Funds Social</h4>
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
              <h4>Lottery Funds Social</h4>
              <p>
                Funds raised from lottery sales and distributed to
                Orphanages.And there is occasional participation in society,
                division into other sectors such as sports, helping the poor and
                needy.
              </p>
            </div>

            <div className="col-12">
              <img
                src="images/photofile/paycam-global.jpg"
                width="100%"
                alt=""
                style={{
                  borderStyle: 'solid',
                  borderColor: '#460ca7 #9901b7 #460ca7 #9901b7',
                }}
              />
              <p>
                The lottery fund is funded by funds raised from the issuance of
                lottery tickets, proceeds from the operation of the lottery
                fund, and winnings for which the statute of limitations has been
                completed.Here, the funds raised from the issuance of lottery
                means the proceeds after deducting the winnings and operating
                expenses from the lottery sales.
              </p>
            </div>

            <div className="col-12">
              <h4>
                Social Contribution Project{' '}
                <span style={{ color: 'red' }}>Love </span>
                <span style={{ color: '#460ca7' }}>in </span>
                <span style={{ color: '#33ff00' }}>Us</span>
              </h4>
              <p>
                Contribution to the Society, Lottery Funds, Health and Strong
                well-being
              </p>
            </div>

            <div className="col-12">
              <h4>
                Lottery profits will go to as{' '}
                <span style={{ color: '#6426ff' }}>follows :</span>
              </h4>
              <ul>
                <li>Science & Technology</li>
                <li>National Sports Promotion</li>
                <li>Labor Welfare Program</li>
                <li>Basic Supplementary Welfare Program</li>
                <li>Medical Welfare Program</li>
                <li>
                  Construction of Low-income Housing for Low-income Families and
                  Individuals Public-benefit Business Established by Cambodia.
                </li>
              </ul>
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
