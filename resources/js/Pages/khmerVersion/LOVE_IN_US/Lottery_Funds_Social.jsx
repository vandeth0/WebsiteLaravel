import React, { Component } from 'react';
import Main_header from '../Data/Main_header';
import Main_footer from '../Data/Main_footer';

export default class Lottery_Funds_Social extends Component {
  render() {
    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="container font-khmer-language">
          <div className="row">
            <div className="col-12 my-4">
              <h4>LOVE IN US</h4>
              <p>មូលនិធិឆ្នោតសង្គម</p>
            </div>

            <div className="col-12 text-center">
              <h4>មូលនិធិឆ្នោតសង្គម</h4>
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
              <h4>មូលនិធិឆ្នោតសង្គម</h4>
              <p>
                ថវិការៃអង្គាសបានពីការលក់ឆ្នោត
                និងចែកចាយដល់មណ្ឌលកុមារកំព្រា។ហើយមានការចូលរួមម្តងម្កាលនៅក្នុងសង្គម
                ការបែងចែកទៅផ្នែកផ្សេងៗដូចជា កីឡា ការជួយជនក្រីក្រ និងអ្នកខ្វះខាត។
              </p>
            </div>

            <div className="col-12">
              <img
                className="my-3"
                src="images/photofile/paycam-global.jpg"
                width="100%"
                alt=""
                style={{
                  borderStyle: 'solid',
                  borderColor: '#460ca7 #9901b7 #460ca7 #9901b7',
                }}
              />
              <p>
                មូលនិធិឆ្នោតត្រូវបានផ្តល់មូលនិធិដោយមូលនិធិដែលបានមកពីការចេញសំបុត្រឆ្នោត
                ប្រាក់ចំណូលពីប្រតិបត្តិការនៃមូលនិធិឆ្នោត
                និងការឈ្នះដែលលក្ខខណ្ឌៈនៃការកំណត់ត្រូវបានបញ្ចប់។ កាត់ប្រាក់ឈ្នះ
                និងចំណាយប្រតិបត្តិការពីការលក់ឆ្នោត។
              </p>
            </div>

            <div className="col-12">
              <h4>
                គម្រោងវិភាគទានសង្គម
                <span style={{ color: 'red' }}> Love </span>
                <span style={{ color: '#460ca7' }}>in </span>
                <span style={{ color: '#33ff00' }}>Us</span>
              </h4>
              <p>
                ការរួមចំណែកដល់សង្គម, មូលនិធិឆ្នោត, សុខភាពរឹងមាំ និងសុខុមាលភាព
              </p>
            </div>

            <div className="col-12">
              <h4>
                ប្រាក់ចំណេញឆ្នោតចូលរួមចំណែក
                <span style={{ color: '#6426ff' }}>​ តាមរយៈ :</span>
              </h4>
              <ul>
                <li>វិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យា</li>
                <li>ការផ្សព្វផ្សាយកីឡាជាតិ</li>
                <li>កម្មវិធីសុខុមាលភាពការងារ</li>
                <li>កម្មវិធីសុខុមាលភាពបន្ថែមមូលដ្ឋាន</li>
                <li>កម្មវិធីសុខុមាលភាពវេជ្ជសាស្រ្ត</li>
                <li>
                  ការ​សាងសង់​លំនៅឋាន​សម្រាប់​គ្រួសារ​ដែល​មាន​ចំណូល​ទាប
                  និង​បុគ្គល​អាជីវកម្ម​សាធារណៈ​ដែល​បង្កើត​ឡើង​ដោយ​ប្រទេស​កម្ពុជា។
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
