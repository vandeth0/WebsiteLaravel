import React, { Component } from 'react';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';

export default class Hobakdungkul_Holdings extends Component {
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
              <p>Hobakdungkul Holdings</p>
            </div>

            <div className="col-12">
              <h4>Hobakdungkul Holdings</h4>
              <p className="text-secondary">
                Hobakdungkul Holdings Co., Ltd is a comprehensive entertainment
                company that produces cultural content that crosses various
                media through dramas, musicals, and performances for the growth
                of the cultural content market. And in 2021, we are expanding
                the company's vision to a global cultural content platform based
                on blockchain technology, which is the core field of the 4th
                industry.
              </p>
            </div>

            <div className="col-6">
              <img src="/images/photofile/building02.png" width="100%" alt="" />
            </div>

            <div className="col-6">
              <img src="/images/photofile/ceo_shin.png" width="100%" alt="" />
            </div>

            <div
              className="col-12"
              style={{
                background: 'linear-gradient(to right,#9901b7,#460ca7)',
                height: '5px',
              }}
            ></div>

            <div className="col-12 my-3">
              <h4>Hobakdungkul Holdings</h4>
              <p className="text-secondary">
                <span style={{ fontWeight: 'bold' }}> WL PAYCAM </span>
                <br />
                <span style={{ color: '#460ca7', fontWeight: 'bold' }}>
                  {' '}
                  CEO Shin Byeong-Chul
                </span>{' '}
                <br />
                Hobakdungkul Holdings Co., Ltd is a comprehensive entertainment
                company that has grown centered on the production ofK-dramas
                over the past 20 years. It has continued to grow remarkably in
                the entertainment business area, including dramaproduction,
                investment in musical production, content copyright business,
                and copyright distribution business.It has continuedto grow
                remarkably.And in 2021, we announced our entry into the global
                market with soft power.Starting in 2007, overcoming many ups and
                downs and setbacks, we are announcing the grand opening of the
                long-awaited Cambodia lottery business in 2021 again. The
                lottery business is the area of a technology-based comprehensive
                entertainment business and is closely related to the platform
                business of cultural contents.Hobakdungkul Holdings Co., Ltd is
                a company that encompasses blockchain and cultural contents,
                which are the core areas of the4th industry.It is being reborn
                as a ‘global company of the cultural contents’ and is emerging
                as a leading company in the market.We will become a company
                looking forward to tomorrow.
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
