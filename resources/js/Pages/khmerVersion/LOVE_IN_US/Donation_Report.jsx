import React, { Component } from 'react';
import Main_header from '../Data/Main_header';
import Main_footer from '../Data/Main_footer';

export default class Donation_Report extends Component {
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
              <p>របាយការណ៏បរិច្ចាគ</p>
            </div>

            <div className="col-12 text-center">
              <h4>របាយការណ៏បរិច្ចាគ</h4>
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
              <h4>របាយការណ៏បរិច្ចាគ</h4>
              <p>
                សេវាកម្មសហគមន៍គឺដូចទៅនឹងអ្វីដែរ៖
                សេវាកម្មដែលអ្នកធ្វើដើម្បីផ្តល់អត្ថប្រយោជន៍ដល់សហគមន៍របស់អ្នក។
                ប្រសិនបើនោះស្តាប់ទៅដូចជាទូលំទូលាយបន្តិច
                វាគឺដោយសារតែវាគឺជាសេវាសហគមន៍អាចមានទម្រង់ផ្សេងគ្នាជាច្រើន
                ដោយសារវាមានច្រើនណាស់ដែលអ្នកអាចធ្វើបានដើម្បីជួយមនុស្សក្នុងតំបន់របស់អ្នក។
              </p>
            </div>

            <div className="col-3">
              <img
                src="images/photofile/20210925_075252.jpg"
                width="100%"
                alt=""
              />
            </div>
            <div className="col-3">
              <img
                src="images/photofile/20210925_075311 (2).jpg"
                width="100%"
                alt=""
              />
            </div>
            <div className="col-3">
              <img
                src="images/photofile/1632416460921.jpg"
                width="100%"
                alt=""
              />
            </div>
            <div className="col-3">
              <img
                src="images/photofile/1632416463180 (2).jpg"
                width="100%"
                alt=""
              />
            </div>

            <div className="col-12 my-3">
              <h4>ការបរិច្ចាគសម្រាប់សហគមន៍របស់អ្នក៖</h4>
              <p>
                អំណោយដល់សហគមន៍ក្រីក្រខ្វះខាតថវិកាដូចជា ទឹកត្រី ទឹកស៊ីអ៊ីវ មី
                ប៊ីចេង ជាដើម។ នេះគឺជាការបរិច្ចាគដែលបានមកពីការលក់ឆ្នោតរបស់យើង
                និងការលើកទឹកចិត្តរបស់យើងក្នុងការជួយសហគមន៍របស់អ្នក។
              </p>

              <p>
                សេវាសហគមន៍ គឺជាការងារដែលមិនបានទទួលប្រាក់កម្រៃដែលធ្វើឡើងដោយបុគ្គល
                ឬក្រុមមនុស្ស ដើម្បីជាប្រយោជន៍
                និងធ្វើឱ្យសហគមន៍របស់ពួកគេកាន់តែប្រសើរឡើង
                ដោយគ្មានទម្រង់នៃសំណងណាមួយឡើយ។ សេវាសហគមន៍អាចខុសពីការស្ម័គ្រចិត្ត
                ដោយសារវាមិនតែងតែត្រូវបានអនុវត្តនៅលើមូលដ្ឋានស្ម័គ្រចិត្ត
                ហើយអាចជាការបង្ខិតបង្ខំ។
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
