import React, { Component, Fragment } from 'react';

export default class Event_Paycam extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-12 text-center font-khmer-language">
          <h4 style={{ fontWeight: 'bold' }}>
            ព្រឹត្តិការណ៍ ដាប់បែលយូអិលផេខេម
          </h4>
          <p className="font-list-a">
            យើងត្រូវធ្វើព្រឹត្តិការណ៍ម្តងក្នុងមួយសប្តាហ៍
            ព្រឹត្តិការណ៍នេះអាចធ្វើនៅការិយាល័យសាខា ឬភ្នាក់ងារ ផេខេម​ របស់យើង។
          </p>
        </div>

        <div className="col-12 my-3">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
              <div style={{ padding: '10px' }}>
                <img
                  src="/images/photofile/Coffee promotion Paycam123.jpg"
                  width="100%"
                  alt=""
                />
                <div className="row p-2">
                  <div className="col-6">
                    <h4>ចាប់ផ្តើម</h4>
                    <p className="font-list-a">កាលបរិច្ឆេទ : 01-06-2022</p>
                  </div>
                  <div
                    className="col-6"
                    style={{ borderLeft: '2px solid #d3d3d3' }}
                  >
                    <h4>ចប់</h4>
                    <p className="text-danger font-list-a">
                      កាលបរិច្ឆេទ : 30-06-2022
                    </p>
                  </div>
                  <div className="col-12">
                    <h5>ទិញ ១ ដុល្លារ ទទួលបានកាហ្វេឥតគិតថ្លៃ</h5>
                    <p className="font-list-a">
                      លោកអ្នកអាចរកទិញបាននៅសាខាមុនីវង្ស
                      ដើម្បីទទួលបានកាហ្វេដោយឥតគិតថ្លៃត្រឹមតែ ១ ដុល្លារ ។
                    </p>
                  </div>
                  <div className="col-12">
                    <img
                      src="/images/photofile/logo paycam lotto.png"
                      width="100%"
                      alt=""
                    />
                  </div>

                  <button className="btn btn-dark mt-3">ចូលរួមឥឡូវនេះ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
