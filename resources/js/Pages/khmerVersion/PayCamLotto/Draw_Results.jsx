import React, { Component } from 'react';
import Main_header from '../Data/Main_header';
import Main_footer from '../Data/Main_footer';

export default class Draw_Results extends Component {
  render() {
    const array = [
      '1st',
      '2nd',
      '3rd',
      '4th',
      '5th',
      '6th',
      '7th',
      '8th',
      '9th',
      '10th',
      '11th',
      '12th',
      '13th',
      '14th',
      '15th',
      '16th',
    ];

    const data_show_live = array.map((x, idx) => (
      <a key={idx} href="https://www.youtube.com/embed/RBvdeagLVS8" target="a">
        <button
          className="btn px-4"
          style={{
            background: 'linear-gradient(to right,#9901b7,#460ca7)',
            color: '#fff',
          }}
        >
          {x}
        </button>
      </a>
    ));

    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="container font-khmer-language">
          <div className="row">
            <div className="col-12 my-4">
              <h4>ផេខេមឡូតូ​ ៦/៣៩</h4>
              <p>លទ្ធផលការចាប់ឆ្នោត</p>
            </div>

            <div className="col-12 text-center">
              <h4>លទ្ធផលការចាប់ឆ្នោត</h4>
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
              <h4>លទ្ធផលការចាប់ឆ្នោត</h4>
              <p>
                លទ្ធផលឆ្នោតអន្តរជាតិ <br />
                ផ្សាយផ្ទាល់កម្មវិធីចាប់ឆ្នោតផ្សងសំណាង
              </p>
            </div>
            <div
              className="col-12"
              style={{
                whiteSpace: 'nowrap',
                overflowY: 'hidden',
                overflowX: ' auto',
              }}
            >
              {data_show_live}
            </div>
            <hr className="my-3" />
            <div className="col-12">
              <iframe
                name="a"
                src=""
                frameBorder="0"
                width="100%"
                height="350px"
              ></iframe>
              <p>
                ជាមួយនឹងឆ្នោតដ៏ច្រើនសន្ធឹកសន្ធាប់ដែលមានសម្រាប់អ្នកលេង
                ហើយភាពងាយស្រួលក្នុងការចូលប្រើ ពួកយើងទាំងអស់គ្នាមានអ៊ីនធឺណិត
                សព្វថ្ងៃនេះមនុស្សជាច្រើនចូលចិត្តពិនិត្យមើលលទ្ធផលឆ្នោតរបស់ពួកគេតាមអ៊ីនធឺណិតយ៉ាងឆាប់រហ័ស។
                ប្រសិនបើអ្នកបានទិញសំបុត្រឆ្នោត
                នោះអ្នកនឹងមានការថប់បារម្ភក្នុងការស្វែងរកថាតើលេខដែលឈ្នះសម្រាប់ការចាប់ឆ្នោតជាក់លាក់នោះ។
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
