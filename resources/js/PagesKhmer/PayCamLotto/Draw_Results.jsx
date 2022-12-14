import React, { Component } from 'react';
import Main_header from 'PagesKhmer/Data/Main_header';
import Main_footer from 'PagesKhmer/Data/Main_footer';
import { NavLink } from 'react-router-dom';

export default class Draw_Results extends Component {
  render() {
    window.scrollTo(0, 0);
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
          className="btn px-4 mx-1"
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

            <div className="col-12">
              <h4>លទ្ធផលការចាប់ឆ្នោត</h4>
              <p>
                លទ្ធផលឆ្នោតអន្តរជាតិ <br />
                ផ្សាយផ្ទាល់កម្មវិធីចាប់ឆ្នោតផ្សងសំណាង
              </p>
            </div>
            <div className="col-xl-8 col-lg-8 col-12">
              <iframe
                name="a"
                src=""
                frameBorder="0"
                width="100%"
                height="350px"
                className="bg-dark"
              ></iframe>
              <p style={{ whiteSpace: 'normal' }}>
                ជាមួយនឹងឆ្នោតដ៏ច្រើនសន្ធឹកសន្ធាប់ដែលមានសម្រាប់អ្នកលេង
                ហើយភាពងាយស្រួលក្នុងការចូលប្រើ ពួកយើងទាំងអស់គ្នាមានអ៊ីនធឺណិត
                សព្វថ្ងៃនេះមនុស្សជាច្រើនចូលចិត្តពិនិត្យមើលលទ្ធផលឆ្នោតរបស់ពួកគេតាមអ៊ីនធឺណិតយ៉ាងឆាប់រហ័ស។
                ប្រសិនបើអ្នកបានទិញសំបុត្រឆ្នោត
                នោះអ្នកនឹងមានការថប់បារម្ភក្នុងការស្វែងរកថាតើលេខដែលឈ្នះសម្រាប់ការចាប់ឆ្នោតជាក់លាក់នោះ។
              </p>
            </div>

            <div className="col-xl-4 col-lg-4 col-12 moblie-view">
              <NavLink to="/khmer/paycamloto639/Solution">
                <img
                  src="/images/photofile/photo scan qrcode copy.png"
                  alt=""
                />
              </NavLink>
            </div>
          </div>
          <div
            className=""
            style={{
              whiteSpace: 'nowrap',
              overflowY: 'hidden',
              overflowX: ' auto',
            }}
          >
            {data_show_live}
          </div>
        </div>
        <div>
          <Main_footer />
        </div>
      </>
    );
  }
}
