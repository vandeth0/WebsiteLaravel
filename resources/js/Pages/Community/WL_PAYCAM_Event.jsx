import React, { Component } from 'react';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';

export default class WL_PAYCAM_Event extends Component {
  render() {
    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 my-2">
              <h4>Community</h4>
              <p>WL PAYCAM EVENT</p>
            </div>

            <div className="col-12 text-center">
              <h4>WL PAYCAM EVENT</h4>
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
              <h4>WL PAYCAM EVENT</h4>
              <p>
                You can shop at your nearest PAYCAM agent. Or you can buy at the
                branch office.
              </p>
            </div>

            <hr />
            <div className="col-12">
              <h4>EVENT</h4>
              <p>
                Event Period: 2022-04-21 ~ 2022-04-25 <br />
                Winner Announcement Date : 2022-01-08
              </p>
              <button
                className="btn"
                style={{
                  background: 'linear-gradient(to right,#9901b7,#460ca7)',
                  color: '#fff',
                }}
              >
                GETSTARTED
              </button>
              <button
                className="btn"
                style={{
                  background: 'linear-gradient(to right,#9901b7,#460ca7)',
                  color: '#fff',
                }}
              >
                ONGOING
              </button>
            </div>

            <div className="col-12 my-3">
              <h4>Branch Office</h4>
              <p>
                Address : #110Eo, St Monivong, Sangkat Phar Thmey, Khan Daun
                Penh, Phnom Penh. <br />
                Paycam Cambodia company ,executor of Lottery (lotto 6/39), held
                a motorcycle rally event to commemorate the launch of lotto
                6/39, the first lottery that meets international standards in
                Cambodia, in the Sen Sok area, Phnom Penh last Saturday
                afternoon. About 30 motorcycles with lottery flags sprinted
                along Mongrithy Road, Hanoi boulevard, and Phnom Penh Thmai Road
                starting from Aeon Mall Sen Sok city in the Sen Sok area. As a
                result, many citizens watched their performances, and they
                provided sights by contacting many citizens while obeying
                traffic laws. Paycam Company will introduce the world's most
                popular lottery system to Cambodia through fair sales and draw
                by introducing the latest technology and systems from Korea. The
                lottery tickets are sold on a weekly basis, and the lottery will
                be drawn live on TV9 every tuesday at 8:00 PM. The company will
                use a portion of its sales to help underprivileged areas and
                poor classes in Cambodia.
              </p>

              <img
                src="images/photofile/IMG_20220410_134714 (7).jpg"
                width="100%"
                alt=""
              />
              <p>
                Currently, lottery tickets can be purchased at about 160 stores
                in the Phnom Penh area, and in the future, more than 300 stores
                in the Phnom Penh area will also be available for purchase. Due
                to the international level lottery release, it is now expected
                that many wealthy people will come out of the lotto in Cambodia,
                and many marginalized regions of Cambodia will be able to take
                benefit from the funds accumulated from lottery sales
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
