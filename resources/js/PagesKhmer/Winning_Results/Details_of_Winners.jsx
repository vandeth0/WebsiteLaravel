import React, { Component } from 'react';
import Main_header from 'PagesKhmer/Data/Main_header';
import Main_footer from 'PagesKhmer/Data/Main_footer';

import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faCoffee,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

export default class Details_of_Winners extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="container-fluid font-khmer-language">
          <div className="container">
            <div className="row">
              <div className="col-12 my-4">
                <h4>លទ្ធផលឆ្នោតឡូតូ</h4>
                <p>ព័ត៌មានលំអិតនៃការឈ្នះឆ្នោត</p>
              </div>

              <div className="col-12">
                <p className="text-secondary">
                  រង្វាន់ : $154,201 <br />
                  អត្រាការប្រាក់គឺ 50% នៃតម្លៃលក់សរុប។
                </p>
              </div>

              <div className="col-12">
                <table
                  className="table border "
                  style={{
                    background: 'linear-gradient(to right,#9901b7,#460ca7)',
                    color: '#fff',
                  }}
                >
                  <thead>
                    <tr className="text-left">
                      <th className="h4">
                        <b>ព័ត៌មានអំពីឆ្នោត</b>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>ឆ្នោតដែលចេញសរុប</td>
                      <td className=" border text-center">$---</td>
                    </tr>
                    <tr>
                      <td>រង្វាន់ទី ១</td>
                      <td className=" border text-center">$---</td>
                    </tr>
                    <tr>
                      <td>ទី១</td>
                      <td className="border text-center">$---</td>
                    </tr>
                    <tr>
                      <td>ទី២</td>
                      <td className=" border text-center">$---</td>
                    </tr>
                    <tr>
                      <td>ទី៣</td>
                      <td className=" border text-center">$---</td>
                    </tr>
                    <tr>
                      <td>ទី៤</td>
                      <td className=" border text-center">$---</td>
                    </tr>
                    <tr>
                      <td>ទី៥</td>
                      <td className=" border text-center">$---</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row py-5 my-5" style={{ background: '#f1f2f2' }}>
            <div className="col-12">
              <div className="container">
                <div className="row">
                  <div className="col-12 text-center">
                    <h4>
                      <b>មនុស្សដែលបានទិញ</b>
                    </h4>
                    <p>
                      ជ្រើសរើសលេខដែលអ្នកចូលចិត្ត។ <br />
                      សាកល្បងសំណាងរបស់អ្នកឥឡូវនេះ។
                    </p>
                  </div>
                  <div className="col-6 text-center">
                    <h4>
                      <b>ប្រជាជន</b>
                    </h4>
                    <p>ប្រជាជនបានចុះឈ្មោះហើយ។</p>
                    <div className="d-flex align-items-center justify-content-center">
                      <div>
                        <button
                          className="btn"
                          style={{
                            background:
                              'linear-gradient(to right,#9901b7,#460ca7)',
                            color: '#fff',
                          }}
                        >
                          {' '}
                          ចូលរួម
                        </button>
                        <span className="mx-5"> | </span>
                        <span>
                          <FontAwesomeIcon icon={faUser} /> 103,492
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-12 py-3  text-center">
                    <h4>
                      <b>ទិញចាប់ពី ១​ ដុល្លារ ឡើងទៅ</b>
                    </h4>
                    <p>ជ្រើសរើសលេខដែលអ្នកចូលចិត្ត</p>
                    <div className="d-flex align-items-center justify-content-center">
                      <div>
                        <button
                          className="btn"
                          style={{
                            background:
                              'linear-gradient(to right,#9901b7,#460ca7)',
                            color: '#fff',
                          }}
                        >
                          {' '}
                          ទិញ
                        </button>
                        <span className="mx-5"> | </span>
                        <span>
                          <FontAwesomeIcon icon={faUser} /> 103,492
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mt-5 text-center">
                    <h4>វីដេអូនៃការចាប់ឆ្នោតឡូតូ</h4>
                    <p>នេះជាវីដេអូពេញនៃការចាប់ឆ្នោត</p>
                    <iframe
                      src="https://www.youtube.com/embed/rBCROqvElRg"
                      frameBorder="0"
                      width="100%"
                    ></iframe>
                    <p>
                      ជាមួយនឹងឆ្នោតជាច្រើនប្រភេទដែលអាចរកបានសម្រាប់អ្នក លេង
                      ហើយ​ភាព​ងាយ​ស្រួល​ក្នុង​ការ​ចូល​ដំណើរ​ការ​យើង​ទាំង​អស់​គ្នា​មាន​អ៊ីនធឺណិត
                      សព្វ​ថ្ងៃ​នេះ
                      មនុស្ស​ជា​ច្រើន​ចូល​ចិត្ត​ពិនិត្យ​ឆ្នោត​យ៉ាង​ឆាប់​រហ័ស
                      លទ្ធផលតាមអ៊ីនធឺណិត។ ប្រសិនបើអ្នកបានទិញសំបុត្រឆ្នោត
                      អ្នក​នឹង​មាន​ការ​អន្ទះសា​ដើម្បី​រក​ឃើញ​ថា​តើ​លេខ​ដែល​ឈ្នះ​
                      គឺសម្រាប់ការចាប់ឆ្នោតជាក់លាក់នោះ។
                    </p>
                  </div>
                </div>
              </div>
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
