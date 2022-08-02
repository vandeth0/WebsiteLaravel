import React, { Component } from 'react';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';

export default class Donation_Report extends Component {
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
              <p>Donation Report</p>
            </div>

            <div className="col-12 text-center">
              <h4>Donation Report</h4>
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
              <h4>Donation Report</h4>
              <p>
                Community service is exactly what it sounds like: services that
                you do to benefit your community. If that sounds a little broad,
                it’s because it is community service can take a lot of different
                forms since there’s SO much you can do to help folks out in your
                area.
              </p>
            </div>

            <div className="col-3">
              <img
                src="images/photofile/20210925_075252.jpg"
                width="100%"
                alt=""
              />
            </div>
            <div className="col-3">
              <img
                src="images/photofile/20210925_075311 (2).jpg"
                width="100%"
                alt=""
              />
            </div>
            <div className="col-3">
              <img
                src="images/photofile/1632416460921.jpg"
                width="100%"
                alt=""
              />
            </div>
            <div className="col-3">
              <img
                src="images/photofile/1632416463180 (2).jpg"
                width="100%"
                alt=""
              />
            </div>

            <div className="col-12">
              <h4>Donation For Your Community :</h4>
              <p>
                Donations to poor communities lack funds such as fish sauce, soy
                sauce, rice noodles, Bi Cheng, etc. This is a donation that
                comes from our lottery sales and our motivation to help your
                community.
              </p>
              <p>
                Community service is unpaid work performed by a person or group
                of people for the benefit and betterment of their community
                without any form of compensation. Community service can be
                distinct from volunteering, since it is not always performed on
                a voluntary basis and may be compulsory.
              </p>
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
