import React, { Component } from 'react';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';

export default class Info_Edit extends Component {
  render() {
    const dataInfo = [
      {
        title: 'Company of WL Paycam Cambodia Co.,Ltd',
        info: '#00064',

        description:
          'Company of WL Paycam Cambodia Co.,Ltd Company of WL Paycam Cambodia Co.,Ltd. Company of WL Paycam Cambodia Co.,Ltd Company of WL Paycam Cambodia Co.,Ltd. Company of WL Paycam Cambodia Co.,Ltd Company of WL Paycam Cambodia Co.,Ltd. Company of WL Paycam Cambodia Co.,Ltd Company of WL Paycam Cambodia Co.,Ltd. Company of WL Paycam Cambodia Co.,Ltd Company of WL Paycam Cambodia Co.,Ltd. Company of WL Paycam Cambodia Co.,Ltd Company of WL Paycam Cambodia Co.,Ltd. Company of WL Paycam Cambodia Co.,Ltd Company of WL Paycam Cambodia Co.,Ltd. Company of WL Paycam Cambodia Co.,Ltd Company of WL Paycam Cambodia Co.,Ltd. ',
      },
      {
        title: 'Company of WL Paycam Cambodia Co.,Ltd',
        info: '#00037',
        description:
          'Company of WL Paycam Cambodia Co.,Ltd Company of WL Paycam Cambodia Co.,Ltd. Company of WL Paycam Cambodia Co.,Ltd Company of WL Paycam Cambodia Co.,Ltd. Company of WL Paycam Cambodia Co.,Ltd Company of WL Paycam Cambodia Co.,Ltd. Company of WL Paycam Cambodia Co.,Ltd Company of WL Paycam Cambodia Co.,Ltd. Company of WL Paycam Cambodia Co.,Ltd Company of WL Paycam Cambodia Co.,Ltd. Company of WL Paycam Cambodia Co.,Ltd Company of WL Paycam Cambodia Co.,Ltd. Company of WL Paycam Cambodia Co.,Ltd Company of WL Paycam Cambodia Co.,Ltd. Company of WL Paycam Cambodia Co.,Ltd Company of WL Paycam Cambodia Co.,Ltd. ',
      },
      {
        title: 'Company of WL Paycam Cambodia Co.,Ltd',
        info: '#00074',

        description:
          'Company of WL Paycam Cambodia Co.,Ltd Company of WL Paycam Cambodia Co.,Ltd. Company of WL Paycam Cambodia Co.,Ltd Company of WL Paycam Cambodia Co.,Ltd. Company of WL Paycam Cambodia Co.,Ltd Company of WL Paycam Cambodia Co.,Ltd. Company of WL Paycam Cambodia Co.,Ltd Company of WL Paycam Cambodia Co.,Ltd. Company of WL Paycam Cambodia Co.,Ltd Company of WL Paycam Cambodia Co.,Ltd. Company of WL Paycam Cambodia Co.,Ltd Company of WL Paycam Cambodia Co.,Ltd. Company of WL Paycam Cambodia Co.,Ltd Company of WL Paycam Cambodia Co.,Ltd. Company of WL Paycam Cambodia Co.,Ltd Company of WL Paycam Cambodia Co.,Ltd. ',
      },
    ];

    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 my-3">
              <h4>Information of WL Paycam</h4>
            </div>
            <hr />
            <div className="col-12">
              <ul className="list-unstyled">
                {dataInfo.map((item, idx) => (
                  <>
                    <li>Page: {idx + 1}</li>
                    <li>
                      <h4>{item.title}</h4>
                    </li>
                    <li>
                      <p>{item.info}</p>
                    </li>

                    <li>
                      <p className="text-secondary">{item.description}</p>
                    </li>
                    <hr />
                  </>
                ))}
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
