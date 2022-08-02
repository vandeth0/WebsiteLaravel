import React, { Component } from 'react';
import Main_header from '../Data/Main_header';
import Main_footer from '../Data/Main_footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlignLeft,
  faBars,
  faCaretDown,
  faCoffee,
  faDotCircle,
  faGlobe,
  faMap,
  faMapLocation,
  faMapLocationDot,
  faMapMarked,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export default class How_To_Buy extends Component {
  render() {
    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="container font-khmer-language">
          <div className="row">
            <div className="col-12 my-4">
              <h4>ផេខេមឡូតូ​ ៦/៣៩</h4>
              <p>របៀបទិញ</p>
            </div>

            <div className="col-12 text-center">
              <h4>របៀបទិញ</h4>
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
              <h4>របៀបទិញ</h4>
              <p>
                ទីតាំងលក់ឆ្នោតឡូតូ <br />
                លោក​អ្នក​អាច​ទិញ​ទំនិញ​នៅ​ភ្នាក់ងារ PAYCAM ដែល​នៅ​ជិត​អ្នក​បំផុត
                ឬ​អាច​រក​ទិញ​នៅ​ការិយាល័យ​សាខា​ដែល​មាន​២៤​សាខា​ក្នុង​រាជធានី​ភ្នំពេញ។
                អ្នកអាចប៉ុន្តែភ្នាក់ងារ Paycam 25 ម៉ោង។ ហើយសម្រាប់ការប្តូរយកលេខ
                3 ឬ 4 ខ្ទង់ អ្នកអាចប្តូរជាមួយភ្នាក់ងាររបស់ Peck ។
                ប្រសិនបើវាចាប់ពី 5 ខ្ទង់ទៅ 6 ខ្ទង់
                វាត្រូវតែប្តូរជាមួយក្រុមហ៊ុនរបស់វា។
              </p>
              <a
                href="https://goo.gl/maps/XhjfDhSDwrsUer7PA"
                target="_blank"
                className="btn"
                style={{
                  background: 'linear-gradient(to right,#9901b7,#460ca7)',
                  color: '#fff',
                }}
              >
                <FontAwesomeIcon icon={faMapLocationDot} /> ដាប់បែលយូអិលផេខេម
              </a>
              <a
                href="https://goo.gl/maps/tDL2KLqhEsvDAKJR9"
                target="_blank"
                className="btn"
                style={{
                  background: 'linear-gradient(to right,#9901b7,#460ca7)',
                  color: '#fff',
                }}
              >
                <FontAwesomeIcon icon={faMapMarked} /> ការិយាល័យសាខា
              </a>
              <a
                href="https://goo.gl/maps/jgHj6tiWGp97Gxxp8"
                target="_blank"
                className="btn"
                style={{
                  background: 'linear-gradient(to right,#9901b7,#460ca7)',
                  color: '#fff',
                }}
              >
                <FontAwesomeIcon icon={faMapMarked} /> ការិយាល័យសាខា
              </a>
              <h4 className="my-3">ការិយាល័យសាខារបស់យើង</h4>
              <p>
                លេងចាប់ពី $1 ឡើងទៅ។ អាចជ្រើសរើសលេខ 6 ក្នុងចំណោមលេខ 39។
                អ្នកអាចជ្រើសរើសលេខដោយផ្ទាល់
                អ្នកក៏អាចជ្រើសរើសដោយស្វ័យប្រវត្តិផងដែរ។ រង្វាន់គឺ 3
                គ្រាប់ឬច្រើនជាងនេះ។
              </p>
            </div>

            <div className="col-12 my-3">
              <img
                src="images/photofile/branch-office.jpg"
                width="200px"
                alt=""
              />
              <img src="images/photofile/13412def2.png" width="200px" alt="" />
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
