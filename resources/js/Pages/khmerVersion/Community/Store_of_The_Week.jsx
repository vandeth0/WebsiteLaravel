import React, { Component } from 'react';
import Main_header from '../Data/Main_header';
import Main_footer from '../Data/Main_footer';

export default class Store_of_The_Week extends Component {
  render() {
    const array1 = [
      '#259, Russian BLV. Ta Nguon Village, Kakap Commune, Por San Chey District, Phnom Penh',
      '#259, Russian BLV. Ta Nguon Village, Kakap Commune, Por San Chey District, Phnom Penh',
      '#259, Russian BLV. Ta Nguon Village, Kakap Commune, Por San Chey District, Phnom Penh',
      '#259, Russian BLV. Ta Nguon Village, Kakap Commune, Por San Chey District, Phnom Penh',
      '#259, Russian BLV. Ta Nguon Village, Kakap Commune, Por San Chey District, Phnom Penh',
      '#259, Russian BLV. Ta Nguon Village, Kakap Commune, Por San Chey District, Phnom Penh',
      '#259, Russian BLV. Ta Nguon Village, Kakap Commune, Por San Chey District, Phnom Penh',
    ];
    const nameStore = [
      'Coffee',
      'Tea & Coffee',
      'Keo',
      'Restaurant',
      'BoBa',
      'Drink Tee',
      'Coffee Tee',
    ];
    // pass a function to map
    const dataList = array1.map((x, idx) => (
      <tr key={idx}>
        <td>{idx + 1}</td>
        <td>{nameStore[idx]}</td>
        <td>{idx + 1} Winner</td>
        <td>{x}</td>
      </tr>
    ));
    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="container font-khmer-language">
          <div className="row">
            <div className="col-12 my-4">
              <h4>សហគមន៍</h4>
              <p>ហាងប្រចាំសប្ដាហ៍</p>
            </div>

            <div className="col-12 text-center">
              <h4>ហាងប្រចាំសប្ដាហ៍</h4>
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
              <h4>ហាងប្រចាំសប្ដាហ៍</h4>
              <p>បញ្ជីឈ្មោះអ្នកឈ្នះ</p>
            </div>
            <div className="col-12">
              <table className="table border">
                <thead>
                  <tr>
                    <th
                      style={{
                        background: 'linear-gradient(to right,#9901b7,#460ca7)',
                        color: '#fff',
                      }}
                      colSpan="4"
                    >
                      <h4>
                        កាលបរិច្ឆេទ: 10-05-2022{' '}
                        <span style={{ color: 'red' }}>ថ្មី</span>
                      </h4>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ល.រ</td>
                    <td>ហាង</td>
                    <td>ចំនួនអ្នកឈ្នះ</td>
                    <td>អាសយដ្ឋាន</td>
                  </tr>
                  {dataList}
                </tbody>
              </table>
            </div>

            <hr />

            <div className="col-12 my-3">
              <h4>ទីភ្នាក់ងាររបស់ផេខេម</h4>
              <p>
                ភ្នាក់ងាររបស់យើង អ្នកអាចទិញទំនិញនៅភ្នាក់ងារ PAYCAM
                ដែលនៅជិតលោកអ្នកបំផុត។ អ្នកអាចទិញនៅភ្នាក់ងារ Paycam 24 ម៉ោង។
                Paycam មានភ្នាក់ងាររហូតដល់ 200 នាក់នៅក្នុងទីក្រុងភ្នំពេញ
                អ្នកអាចទិញនៅភ្នាក់ងារដែលនៅជិតលោកអ្នកបំផុត។
              </p>
              <img
                src="images/photofile/Screenshot_2022-05-06-14-18-08-50 (1).jpg"
                width="100%"
                alt=""
              />
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
