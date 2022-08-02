import React, { Component } from 'react';
import Main_header from '../Data/Main_header';
import Main_footer from '../Data/Main_footer';
export default class PayCam_Lotto_Protocol extends Component {
  render() {
    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="container font-khmer-language">
          <div className="row">
            <div className="col-12 my-4">
              <h4>ព័ត៌មានអំពីក្រុមហ៊ុន​</h4>
              <p>PayCam Lotto Protocol(PLP)</p>
            </div>

            <div className="col-12 text-center">
              <h4>PayCam Lotto Protocol(PLP)</h4>
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
              <img
                style={{
                  borderTop: '15px solid #460ca7',
                  borderLeft: '15px solid #9901b7',
                  borderRight: '15px solid #460ca7',
                  borderBottom: '15px solid #9901b7',
                }}
                src="images/photofile/protocol.jpg"
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
                  PayCam Lotto Protocol (PLP) គឺជារូបិយប័ណ្ណឌីជីថលវិមជ្ឈការ
                  ប្រព័ន្ធដែលរួមបញ្ចូលលើអ៊ីនធឺណិត
                  និងក្រៅបណ្តាញដោយការរួមបញ្ចូលគ្នា blockchain
                  ជាមួយប្រព័ន្ធឆ្នោតដែលមានស្រាប់ដោយយកចិត្តទុកដាក់
                  ចំពោះសុវត្ថិភាពនិងភាពជឿជាក់នៃ blockchain ។ PayCam Lotto
                  ពិធីការ (PLP) គឺជាប្រព័ន្ធឆ្នោតគោលគំនិតថ្មីមួយដែលដំណើរការ
                  លើសពីវិធីសាស្រ្តប្រតិបត្តិការបិទជិត និងប្រពៃណីដែលមានស្រាប់
                  ការរួមបញ្ចូលគ្នារវាង blockchain និងប្រព័ន្ធឆ្នោត។
                  វាផ្តល់ឱ្យអ្នកប្រើប្រាស់ ឱកាសកាន់តែច្រើន និងកម្មវិធីរង្វាន់
                  PLP តាមរយៈអ្នកប្រើប្រាស់- ម៉ូឌុលកណ្តាល ទីផ្សារខ្លាំង
                  និងគំរូអាជីវកម្មតែមួយគត់។
                </p>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-12 ">
              <img src="images/photofile/bitforex.png" width="100%" alt="" />
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-12 my-3 d-flex align-items-center">
              <div>
                <p>
                  PayCam Lotto Protocol (PLP) គឺជារូបិយប័ណ្ណឌីជីថលវិមជ្ឈការ
                  ប្រព័ន្ធដែលរួមបញ្ចូលលើអ៊ីនធឺណិត
                  និងក្រៅបណ្តាញដោយការរួមបញ្ចូលគ្នា blockchain
                  ជាមួយប្រព័ន្ធឆ្នោតដែលមានស្រាប់ដោយយកចិត្តទុកដាក់
                  ចំពោះសុវត្ថិភាពនិងភាពជឿជាក់នៃ blockchain ។ PayCam Lotto
                  ពិធីការ (PLP) គឺជាប្រព័ន្ធឆ្នោតគោលគំនិតថ្មីមួយដែលដំណើរការ
                  លើសពីវិធីសាស្រ្តប្រតិបត្តិការបិទជិត និងប្រពៃណីដែលមានស្រាប់
                  ការរួមបញ្ចូលគ្នារវាង blockchain និងប្រព័ន្ធឆ្នោត។
                  វាផ្តល់ឱ្យអ្នកប្រើប្រាស់ ឱកាសកាន់តែច្រើន និងកម្មវិធីរង្វាន់
                  PLP តាមរយៈអ្នកប្រើប្រាស់- ម៉ូឌុលកណ្តាល ទីផ្សារខ្លាំង
                  និងគំរូអាជីវកម្មតែមួយគត់។
                </p>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-12 ">
              <img src="images/photofile/foblgate.png" width="100%" alt="" />
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
