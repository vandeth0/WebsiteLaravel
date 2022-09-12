import React, { Component } from 'react';
import Main_header from 'PagesKhmer/Data/Main_header';
import Main_footer from 'PagesKhmer/Data/Main_footer';

export default class Social_Contribution extends Component {
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
              <h4>LOVE IN US</h4>
              <p>ការរួមចំណែកក្នុងសង្គម</p>
            </div>

            <div className="col-12 ">
              <h4>ការរួមចំណែកក្នុងសង្គម</h4>
              <p>
                គម្រោងរួមចំណែកជួយសង្គម "ស្រលាញ់យើង" ជាមួយ "ដាប់បែលយូអិលផេខេម
                (ខេមបូឌា)​ ឯ.ក" ផ្នែកខាងក្រោយនៃគម្រោង.
              </p>
            </div>

            <div className="col-12 my-5">
              <p>
                ការងារជាក្រុម <br />
                គម្រោងវិភាគទានសង្គម Love in Us ជាមួយ ដាប់បែលយូអិលផេខេម
                (ខេមបូឌា)​ ឯ.ក ផ្នែកខាងក្រោយនៃគម្រោង​.
                មុនពេលចាប់ផ្តើមអាជីវកម្មពេញលេញនៅក្នុង
                ប្រទេសកម្ពុជាយើងចង់បង្ហាញរូបភាពនៃ "ផេខេម ឡូតូ"
                ដែលលក់សំបុត្រឆ្នោតដោយភាពខុសគ្នា។
              </p>
              <img
                src="/images/photofile/2fbsvswv.jpg"
                width="100%"
                alt=""
                style={{
                  borderStyle: 'solid',
                  borderColor: '#460ca7 #9901b7 #460ca7 #9901b7',
                }}
              />
              <p className="my-3">
                ពួកយើង "ផេខេម ឡូតូ" ចង់ចាប់ផ្តើមជាមួយនឹងការចែករំលែកតូចតាច
                ដោយធ្វើសកម្មភាពចូលរួមចំណែកសង្គមយ៉ាងសកម្មនៅក្នុងប្រទេសកម្ពុជា
                ហើយពង្រីកជាបណ្តើរៗ។
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
