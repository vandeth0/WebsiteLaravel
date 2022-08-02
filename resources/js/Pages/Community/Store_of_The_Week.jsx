import React, { Component } from 'react';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';

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
        <div className="container">
          <div className="row">
            <div className="col-12 my-2">
              <h4>Community</h4>
              <p>Store of The Week</p>
            </div>

            <div className="col-12 text-center">
              <h4>Store of The Week</h4>
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
              <h4>Store of The Week</h4>
              <p>List of Winners</p>
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
                        Data: 10-05-2022{' '}
                        <span style={{ color: 'red' }}>New</span>
                      </h4>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>No.</td>
                    <td>Store</td>
                    <td>The Number of Winners </td>
                    <td>Address</td>
                  </tr>
                  {dataList}
                </tbody>
              </table>
            </div>

            <hr />

            <div className="col-12 my-3">
              <h4>Agent's PayCam</h4>
              <p>
                Our Agency, You can shop at your nearest PAYCAM agent. You can
                buy at Paycam agents 24 hours. Paycam has up to 200 agents in
                Phnom Penh, you can buy at your nearest agency.
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
