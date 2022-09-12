import React, { Component } from 'react';
import Main_header from 'PagesKhmer/Data/Main_header';
import Main_footer from 'PagesKhmer/Data/Main_footer';
import GoogleMaps from './GoogleMaps';

export default class Direct_Management extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="container font-khmer-language">
          <div className="row">
            <div className="col-12 my-4">
              <h4>ផេខេមឡូតូ​ ៦/៣៩</h4>
              <p>ការគ្រប់គ្រងផ្ទាល់</p>
            </div>

            <div className="col-12">
              <h4>ការគ្រប់គ្រងផ្ទាល់</h4>
            </div>

            <hr />

            <div className="col-xl-9 col-lg-9 col-12">
              <h4>ទីភ្នាក់ងាររបស់ផេខេម</h4>
              <p>
                អ្នកអាចទិញសន្លឹកឆ្នោតនៅភ្នាក់ងារ ផេខេម ដែលនៅជិតលោកអ្នកបំផុត។
              </p>
              <img
                src="/images/photofile/agent of paycam.png"
                className="my-3"
                width="250px"
                style={{
                  background: 'linear-gradient(to right, #9901b7,#460ca7)',
                  borderRadius: '50%',
                  padding: '5px',
                }}
                alt=""
              />
              <p>
                ផេខេម មានភ្នាក់ងាររហូតដល់ 200 នាក់នៅក្នុងទីក្រុងភ្នំពេញ
                អ្នកអាចទិញនៅតាមភ្នាក់ងារដែលនៅជិតលោកអ្នកបំផុត។
              </p>
              <img
                className="my-3"
                src="/images/photofile/map cambodia.jpg"
                width="100%"
                alt=""
                style={{
                  borderTop: '10px solid #460ca7',
                  borderBottom: '10px solid #9901b7',
                  borderLeft: '10px solid #460ca7',
                  borderRight: '10px solid #9901b7',
                }}
              />
            </div>

            <div className="col-xl-3 col-lg-3 col-12 ">
              <h4>ទីភ្នាក់ងាររបស់ផេខេម</h4>
              <p>
                អ្នកអាចស្វែងរក ផេខេម របស់ភ្នាក់ងាររបស់យើងនៅក្នុងផែនទីខាងក្រោម។
              </p>
              <GoogleMaps />
              <iframe
                src="https://www.youtube.com/embed/x5yzatBFS5Y"
                width="100%"
                frameBorder="0"
              ></iframe>
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
