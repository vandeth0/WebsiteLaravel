import React, { Component } from 'react';
import Main_header from 'PagesKhmer/Data/Main_header';
import Main_footer from 'PagesKhmer/Data/Main_footer';

export default class News_Info extends Component {
  render() {
    const dataInfo = [
      {
        title: 'Title name of information about paycam',
        photo: 'images/photofile/1632627546132 (2).jpg',
        descript:
          'WL PAYCAM (CAMBODIA) CO.,LTD. WONLIM HOLDINGS CO.,LTD entered Cambodia in 2001. WL PAYCAM (CAMBODIA) CO., LTD., a joint venture between Korea’s PAYCAM FOUNDATION and WONLIM HOLDINGS CO., LTD, was established in Cambodia in 2021 through know-how acquired through various businesses in Cambodia for 20 years. We want to become a company that shares with the local community rather than pursuing corporate profits in starting lotto business in Cambodia.In addition, we want to take the lead in the development of the local community by distributing profits through the ‘Love in us’ business. And ‘The Love in us Paycam Challenge’ runs a scholarship quiz with the slogan of Education to help young people create a bright future.We, WL PAYCAM(CAMBODIA) CO., LTD., will gradually expand the business field starting with the lotto business and will become a company that develops over and over by demonstrating the corporate spirit of win-win. ',
      },
    ];
    const showData = dataInfo.map((item) => (
      <>
        <div className="col-12">
          <span className="btn-danger mx-2">New </span>
          {new Date().format('dd-mm-yyyy')}
        </div>
        <div className="col-12 my-3">
          <h4>{item.title}</h4>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <img src={item.photo} width="100%" alt="" />
        </div>
        <div className="col-12 mt-2">
          <span className="text-danger">Like: 123 | </span>
          <span className="text-success">Comment: 3 | </span>
          <span className="text-warning">Share: 2</span>
        </div>
        <hr />
        <div className="col-12">
          <button className="btn btn-primary mx-2">Like</button>
          <button className="btn btn-success mx-2">Comment</button>
          <button className="btn btn-warning mx-2">Share</button>
        </div>
        <div className="col-12 my-3">
          <p className="text-secondary">{item.descript}</p>
        </div>
      </>
    ));
    return (
      <>
        <div>
          <Main_header />
        </div>

        <div className="row my-3">{showData}</div>
        <div>
          <Main_footer />
        </div>
      </>
    );
  }
}
