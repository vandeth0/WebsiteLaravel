import React, { Component } from 'react';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';

export default class WL_PAYCAM_CAMBODIA extends Component {
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
              <p>WL PAYCAM(CAMBODIA) Co.,Ltd</p>
            </div>

            <div className="col-12">
              <h4>WL PAYCAM(CAMBODIA) Co.,Ltd</h4>
              <p className="text-secondary">
                Hi. I’m Sangho Park, the CEO of WL PAYCAM (CAMBODIA) CO.,LTD.
                WONLIM HOLDINGS CO.,LTD entered Cambodia in 2001. WL PAYCAM
                (CAMBODIA) CO., LTD., a joint venture between Korea’s PAYCAM
                FOUNDATION and WONLIM HOLDINGS CO., LTD, was established in
                Cambodia in 2021 through know-how acquired through various
                businesses in Cambodia for 20 years. We want to become a company
                that shares with the local community rather than pursuing
                corporate profits in starting lotto business in Cambodia.In
                addition, we want to take the lead in the development of the
                local community by distributing profits through the ‘Love in us’
                business. And ‘The Love in us Paycam Challenge’ runs a
                scholarship quiz with the slogan of Education to help young
                people create a bright future.We, WL PAYCAM(CAMBODIA) CO., LTD.,
                will gradually expand the business field starting with the lotto
                business and will become a company that develops over and over
                by demonstrating the corporate spirit of win-win.
              </p>
            </div>

            <div className="col-6">
              <img
                src="/images/photofile/paycam building02.png"
                width="100%"
                alt=""
              />
            </div>

            <div className="col-6">
              <img src="/images/photofile/ceo_park.png" width="100%" alt="" />
            </div>

            <div
              className="col-12"
              style={{
                background: 'linear-gradient(to right,#9901b7,#460ca7)',
                height: '5px',
              }}
            ></div>

            <div className="col-12 my-3">
              <h4>WL PAYCAM(CAMBODIA) Co.,Ltd</h4>
              <p className="text-secondary">
                <span style={{ fontWeight: 'bold' }}> WL PAYCAM </span>
                <br />
                <p class="text-secondary">
                  We are looking for agents.in Phnom Penh
                  <ul>
                    <li>Good looking store in Phnom Penh’s good location.</li>
                    <li>Passionate business mind of owner</li>
                    <li>Who looking for new business</li>
                  </ul>
                </p>
              </p>

              <h4>1. Bussiness Forecast</h4>
              <p>
                <b> Vision 2022​ </b> <br />
              </p>
              <ul class="text-secondary">
                <li>
                  500 agents located in Phnom Penh (Store size from 6 square
                  meters)
                </li>
                <li>
                  Agents can be expected toearn $ 5,000 to $ 8,000 from sales
                  Per year
                </li>
                <li>
                  WL PAYCAM is the first company to cooperate With the Ministry
                  of Economy and Finance of Cambodia to launch Lottery
                  Corporation By increasing the confidence of Cambodians in
                  adventure to change their lives for the better as in other
                  countries As advanced country like South Korea
                </li>
                <li>
                  Wonlim Paycam and Star Channel, Korean Drama Giant Production,
                  made joint venture company called "WL PAYCAM" in order to set
                  up international lotto service.
                </li>
              </ul>

              <p>
                <b> Vision 2025​ </b> <br />
              </p>
              <ul class="text-secondary">
                <li>
                  Expectation of WL PAYCAM sales agents nationwide to increase
                  1000 Sales Agent.
                </li>
                <li>
                  Revenue of each sales dealer’s from PAYCAM Lottery Sales
                  expected to Increases between $ 60,000 to $ 98,000 per year
                </li>
              </ul>

              <h4>2. Business License</h4>

              <p>
                <b> ប័ណ្ណពន្ធប៉ាតង់ </b> <br />
              </p>
              <ul class="text-secondary">
                <li>From the Ministry of Economy And Finance.</li>
              </ul>
              <p>
                <b> វិញ្ញាបនបត្រចុះបញ្ជីរពន្ធដារ</b> <br />
              </p>
              <ul class="text-secondary">
                <li>From the Ministry of Economy And Finance.</li>
              </ul>
              <p>
                <b> លិខិតបើកអាជីវកម្ម </b> <br />
              </p>
              <ul class="text-secondary">
                <li>From Prime Minister Samdech's office</li>
              </ul>
              <p>
                <b> វិញ្ញាបនបត្រ </b> <br />
              </p>
              <ul class="text-secondary">
                <li>Registered with the Ministry of Commerce.</li>
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
