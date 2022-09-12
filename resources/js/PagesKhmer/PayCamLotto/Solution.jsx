import React, { Component } from 'react';
import Main_header from 'PagesKhmer/Data/Main_header';
import Main_footer from 'PagesKhmer/Data/Main_footer';
import { inject, observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';

inject('root');
@observer
export default class Solution extends Component {
  render() {
    window.scrollTo(0, 0);
    const array1 = [
      'The first international lottery company in Cambodia, established in 2021...',
      'The first international lottery company in Cambodia, established in 2021...',
      'The first international lottery company in Cambodia, established in 2021...',
      'The first international lottery company in Cambodia, established in 2021...',
    ];

    // pass a function to map
    const data_lotto = array1.map((x, id) => (
      <div
        key={id}
        className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 border"
      >
        <div
          className="row text-center pt-2"
          style={{
            background: 'linear-gradient(to right,#9901b7,#460ca7)',
            color: '#fff',
          }}
        >
          <h4>Lastest Lottery News</h4>
        </div>
        <div className="row">
          <div className="col-6 p-2">
            <img src="/images/photofile/315wdgwshwre.jpg" width="100%" alt="" />
          </div>
          <div className="col-6 p-2">
            <div>
              <span style={{ fontWeight: 'bold' }}>WL Paycam (Cambodia)</span>{' '}
              <br />
              {x}
            </div>
          </div>
        </div>
      </div>
    ));

    // pass a function to map
    const title1 = [
      'ស្កេន QR Code',
      'ជ្រើសរើសលេខនិងបញ្ចាក់',
      'អោយ QR Code របស់អ្នកដែលបានរើសអោយទៅកានអ្នកលក់',
      'សន្លឺកជ្រើសរើសលេខ',
    ];
    const text1 = [
      'អ្វីដែលអ្នកត្រូវធ្វើគឺយកស្មាតហ្វូនរបស់អ្នក ហើយបើកកាមេរ៉ាដើម្បីស្កេន។ ចុចលើ QR Code ដើម្បីជ្រើសរើសអ្នករើសលេខសំណាងអ្នក​ស្រឡាញ់។',

      'ក្រោយពីលោកអ្នកអាចជ្រើសរើសលេខសំណាងហើយលោកអ្នកអាចចុច បូតុង (Comfirm) លេខរបស់លោកអ្នករើសនឹងលោតចូលតារាងខាងក្រោម ដើម្បីអោយលោកអ្នកផ្ទៀងផ្ទាត់ បន្ទាប់មកលោកអ្នកគ្រាន់តែចុចបូតុង (Ticket Issue) ដើម្បីទទួលបាន QR Code។',

      'បន្ទាប់មកអោយ QR Code របស់លោកអ្នកទៅកាន់ផ្នែកលក់ឆ្នោតរបស់ពួកយើងដើម្បីស្កេននិងចេញជាសន្លឹកឆ្នោតអោយលោកអ្នក និងបង់ថ្លៃសន្លឹកឆ្នោតជាការស្រេច។',

      'ប្រសិនបើលោកអ្នកគ្មាន​ អុិនធឺណែត រឺ ទូរស័ព្ទ Smart Phone ខាងយើងក៏មានជាក្រដាស      សម្រាប់កត់ត្រាលេខឆ្នោតបានផងដែរហើយក្រដាសទាំងនោះលោកអ្នកសុំពីសាខារបស់ក្រុមហ៊ុន WL PAYCAM  រឺក៏មកកាន់ Office ផ្ទាល់ផងដែរ។',
    ];
    const photo1 = [
      '/images/photofile/qr code scan-01.jpg',
      '/images/photofile/photo scan qrcode.jpg',
      '/images/photofile/machine lotto.jpg',
      '/images/photofile/ticket lotto select number.jpg',
    ];
    const data_lotto_buy = text1.map((x, idx) => (
      <div key={idx} className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
        <img src={photo1[idx]} width="100%" className="my-3" />
        <h4>{title1[idx]}</h4>
        <p className="text-secondary">{x}</p>
      </div>
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
              <p>ដំណោះស្រាយ</p>
            </div>

            <div className="col-xl-8 col-lg-8 col-12">
              <h4>ដំណោះស្រាយ</h4>
              <p className="text-secondary">
                សមាសភាពដំណោះស្រាយ លទ្ធផលនៃការអភិវឌ្ឍន៍ដំណោះស្រាយអនាគត
                សមាសភាពកម្មវិធី ផេខេម សមាសភាពនៃដំណោះស្រាយ (ការរួមផ្សំ)
                លទ្ធផលនៃការអភិវឌ្ឍដំណោះស្រាយ អនាគតនៃ ផេខេម ឡូតូ សមាសភាពកម្មវិធី
                កម្មវិធីគ្រប់គ្រង កម្មវិធីតាមដាន ធនាគារ
                កម្មវិធីគ្រប់គ្រងកម្មវិធីលក់សំបុត្រ លេខសៀវភៅដៃ កម្មវិធីជ្រើសរើស
                សមាសភាពនៃកម្មវិធី កម្មវិធីគ្រប់គ្រង កម្មវិធីតាមដាន
                កម្មវិធីគ្រប់គ្រងធនាគារ កម្មវិធីលក់សំបុត្រ
                កម្មវិធីជ្រើសរើសលេខធ្វើដោយដៃ
              </p>
              <div className="row">{data_lotto}</div>
              <div className="row">
                <div className="col-12 my-3">
                  <p className="text-secondary">
                    របៀបនៃការលេងឆ្នោត <br />
                    ដើម្បីភាពងាយស្រួល ពួកយើងមានជា QR Code សម្រាប់លោកអ្នក
                    ស្កេនដើម្បីជ្រើសរើសលេខដោយខ្លួនឯង។
                  </p>
                  <h4>ទិញសន្លឹកឆ្នោត - របៀបដែលវាដំណើរការ</h4>
                </div>

                <hr></hr>
                {data_lotto_buy}
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 moblie-view">
              <iframe
                src="https://www.youtube.com/embed/OeITwGpahw8"
                width="100%"
                frameBorder="0"
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/cGQ_uoMhJLM"
                width="100%"
                frameBorder="0"
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/OkQHT4EnKc0"
                width="100%"
                frameBorder="0"
              ></iframe>
              <NavLink to="/khmer/winningresults/How_To_Get_Your_Prizes">
                <img
                  src="/images/photofile/1st2nd3rd.jpg"
                  width="100%"
                  alt=""
                />
              </NavLink>
              <NavLink to="/khmer/paycamlotto639/Agency">
                <img
                  src="/images/photofile/map cambodia.jpg"
                  width="100%"
                  alt=""
                />
              </NavLink>
            </div>

            <div className="col-12 my-3">
              <p className="text-secondary">
                កម្មវិធីគ្រប់គ្រង (L639) ការគ្រប់គ្រងមូលដ្ឋាននៃហាង៖ ការចុះឈ្មោះ
                និងការលុបហាងជាដើម។ ប្រតិបត្តិការហាងលក់ ការគ្រប់គ្រង៖
                ការចាប់ឆ្នោតប្រចាំសប្តាហ៍ និងការគ្រប់គ្រងឈ្នះ ពេលវេលាពិត
                ការត្រួតពិនិត្យ ការគ្រប់គ្រងស្ថិតិ ការគ្រប់គ្រងការទូទាត់រង្វាន់។
                ការគ្រប់គ្រងស្ថានភាពលក់៖ ការគ្រប់គ្រងបរិមាណលក់ (ស្ថានភាពលក់,
                ស្ថានភាពប្រាក់បញ្ញើ ស្ថានភាពទូទាត់ប្រាក់ PAYCAM) ការទូទាត់ការលក់
                ការគ្រប់គ្រង និងទិន្នផល, A/S និងការគ្រប់គ្រងការប្រើប្រាស់,
                ម៉ាស៊ីនមេ និងការគ្រប់គ្រងប្រព័ន្ធ) កម្មវិធីត្រួតពិនិត្យ (L639)
                ស្ថានភាពចូលប្រើ តាមហាង ការរកឃើញការសាកល្បងការចូលប្រើខាងក្រៅ។
                ការគ្រប់គ្រងធនាគារ កម្មវិធី (L639) ការគ្រប់គ្រងសាខាធនាគារ
                ការដាក់ប្រាក់ និងដកប្រាក់ នៅហាង ដំណោះស្រាយ Lotto
                ភ្ជាប់ការគ្រប់គ្រងចំណុច រង្វាន់ ប្រាក់
                ការគ្រប់គ្រងមូលនិធិនៃហាងគ្រប់គ្រងផ្ទាល់ និង
                កម្មវិធីលក់សំបុត្រការិយាល័យកណ្តាល (កម្មវិធីស្ថានីយ M639)
                ការចេញឆ្នោត, ការបោះពុម្ពស្ថិតិលក់ពីហាង, កម្មវិធីប្រើប្រាស់ និង
                A/S ការបញ្ជាក់អ្នកឈ្នះ និងការចេញសារជាថ្មី សំបុត្រ
                ការគ្រប់គ្រងប្រាក់បញ្ញើ និងដកប្រាក់របស់ធនាគារ PAYCAM ប្រាក់
                កម្មវិធីជ្រើសរើសលេខសៀវភៅដៃគ្រប់គ្រង (QR639) អ្នកទិញអាចធ្វើបាន
                ជ្រើសរើសលេខប្រាំមួយពីលេខ 1 ដល់លេខ 39 ដោយប្រើ QR639 បង្កើត QR និង
                QR ដែលត្រូវបានបង្កើតត្រូវបានទទួលស្គាល់ដោយឧបករណ៍សម្គាល់ QR
                ដែលបានដំឡើងនៅលើ M639 ហើយអ្នកទិញអាចជ្រើសរើស និងទិញបានយ៉ាងឆាប់រហ័ស
                និងត្រឹមត្រូវ។ លេខដែលចង់បាន។ ដូចគ្នានេះដែរ លេខប្រាំមួយអាចជា
                បានបង្កើតហ្គេមរហូតដល់ 10 ក្នុងពេលដំណាលគ្នា និងទទួលស្គាល់ថាជា QR
                ។ អ្នកគ្រប់គ្រង (L639) ការគ្រប់គ្រងជាមូលដ្ឋាននៃហាង៖
                ការចុះឈ្មោះហាង និងការលុបចោលហាងជាដើម។ ការគ្រប់គ្រងការលក់ក្នុងហាង៖
                ការចាប់រង្វាន់ប្រចាំសប្តាហ៍ និងការគ្រប់គ្រងឈ្នះ,
                ការត្រួតពិនិត្យពេលវេលាពិតប្រាកដស្ថិតិ ការគ្រប់គ្រង,
                ការគ្រប់គ្រងរង្វាន់។ ការគ្រប់គ្រងស្ថានភាពលក់៖ ការលក់
                ការគ្រប់គ្រងបរិមាណ (ស្ថានភាពលក់ ស្ថានភាពដាក់ប្រាក់ ការទូទាត់
                PayPal ស្ថានភាពប្រាក់) ការទូទាត់ការលក់ និងការគ្រប់គ្រងទិន្នផល
                A/S ការគ្រប់គ្រង និងការប្រើប្រាស់ការគ្រប់គ្រងម៉ាស៊ីនមេ
                និងការគ្រប់គ្រងប្រព័ន្ធ
              </p>
            </div>
            <div className="col-12 my-3">
              <h4 style={{ color: '#460ca7' }}>ហ្គេមឡូតូ</h4>
              <p className="text-secondary">
                ហ្គេមដែលមានជំនាញទាបដែលមានតម្លៃទាបជួយអ្នកឱ្យឈ្នះរង្វាន់ធំផ្លាស់ប្តូរជីវិត។
              </p>
              <button
                className="btn"
                style={{
                  background: 'linear-gradient(to right,#9901b7,#460ca7)',
                  color: '#fff',
                }}
              >
                ទិញ
              </button>
              <button
                className="btn"
                style={{
                  background: 'linear-gradient(to right,#9901b7,#460ca7)',
                  color: '#fff',
                }}
              >
                ចាប់ផ្ដើម
              </button>
            </div>

            <hr />
          </div>
        </div>
        <div>
          <Main_footer />
        </div>
      </>
    );
  }
}
