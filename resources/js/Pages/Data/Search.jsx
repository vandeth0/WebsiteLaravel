import React, { Component } from 'react';
// import { Html5QrcodeScanner } from 'html5-qrcode';
import Main_header from 'Pages/Data/Main_header';
import MenuFooter from './MenuFooter';
import { inject, observer } from 'mobx-react';

@inject('root')
@observer
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.userLoginProvider;
    this.stores = props.root.ballListProvider;
    this.store.qrCode('reader');
  }

  render() {
    const { checkResultBall, numberShowResult } = this.store;
    const { ballListOut } = this.stores;

    return (
      <div>
        {/* {this.store.qrCode('reader')} */}
        <Main_header />

        {numberShowResult == 1 &&
          ballListOut.map((item, idx) => {
            if (item.weekly == checkResultBall.round) {
              var b = document.getElementById('bg-black');
              b.style.display = 'none';
              var bs = document.getElementById('bg-blacks');
              bs.style.display = 'none';
              let ResultsShow1 = '';
              let ResultsShow2 = '';
              let ResultsShow3 = '';
              let ResultsShow4 = '';
              let ResultsShow5 = '';
              let NumberResult1 = 0;
              let NumberResult2 = 0;
              let NumberResult3 = 0;
              let NumberResult4 = 0;
              let NumberResult5 = 0;

              let BonusResult1 = 0;
              let BonusResult2 = 0;
              let BonusResult3 = 0;
              let BonusResult4 = 0;
              let BonusResult5 = 0;
              // console.log('Round: ' + checkResultBall.round);
              if (checkResultBall.lotto1 == '') {
                ResultsShow1 +=
                  "<td colspan='6' class='text-danger'> NONE </td>";
              } else {
                checkResultBall.lotto1.map((items) => {
                  if (
                    items == item.num1 ||
                    items == item.num2 ||
                    items == item.num3 ||
                    items == item.num4 ||
                    items == item.num5 ||
                    items == item.num6
                  ) {
                    // console.log('2: ' + items);
                    ResultsShow1 +=
                      "<td class='text-danger'> " + items + ' </td>';
                    NumberResult1++;
                  } else if (items == item.bonus) {
                    ResultsShow1 +=
                      "<td class='text-info'> " + items + ' </td>';
                    BonusResult1++;
                  } else {
                    ResultsShow1 +=
                      "<td class='text-dark'> " + items + ' </td>';
                  }
                });
              }
              if (checkResultBall.lotto2 == '') {
                ResultsShow2 +=
                  "<td colspan='6' class='text-danger'> NONE </td>";
              } else {
                checkResultBall.lotto2.map((items) => {
                  if (
                    items == item.num1 ||
                    items == item.num2 ||
                    items == item.num3 ||
                    items == item.num4 ||
                    items == item.num5 ||
                    items == item.num6
                  ) {
                    // console.log('2: ' + items);
                    ResultsShow2 +=
                      "<td class='text-danger'> " + items + ' </td>';
                    NumberResult2++;
                  } else if (items == item.bonus) {
                    ResultsShow2 +=
                      "<td class='text-info'> " + items + ' </td>';
                    BonusResult2++;
                  } else {
                    ResultsShow2 +=
                      "<td class='text-dark'> " + items + ' </td>';
                  }
                });
              }
              if (checkResultBall.lotto3 == '') {
                ResultsShow3 +=
                  "<td colspan='6' class='text-danger'> NONE </td>";
              } else {
                checkResultBall.lotto3.map((items) => {
                  if (
                    items == item.num1 ||
                    items == item.num2 ||
                    items == item.num3 ||
                    items == item.num4 ||
                    items == item.num5 ||
                    items == item.num6
                  ) {
                    // console.log('3: ' + items);
                    ResultsShow3 +=
                      "<td class='text-danger'> " + items + ' </td>';
                    NumberResult3++;
                  } else if (items == item.bonus) {
                    ResultsShow3 +=
                      "<td class='text-info'> " + items + ' </td>';
                    BonusResult3++;
                  } else {
                    ResultsShow3 +=
                      "<td class='text-dark'> " + items + ' </td>';
                  }
                });
              }
              if (checkResultBall.lotto4 == '') {
                ResultsShow4 +=
                  "<td colspan='6' class='text-danger'> NONE </td>";
              } else {
                checkResultBall.lotto4.map((items) => {
                  if (
                    items == item.num1 ||
                    items == item.num2 ||
                    items == item.num3 ||
                    items == item.num4 ||
                    items == item.num5 ||
                    items == item.num6
                  ) {
                    // console.log('4: ' + items);
                    ResultsShow4 +=
                      "<td class='text-danger'> " + items + ' </td>';
                    NumberResult4++;
                  } else if (items == item.bonus) {
                    ResultsShow4 +=
                      "<td class='text-info'> " + items + ' </td>';
                    BonusResult4++;
                  } else {
                    ResultsShow4 +=
                      "<td class='text-dark'> " + items + ' </td>';
                  }
                });
              }
              if (checkResultBall.lotto5 == '') {
                ResultsShow5 +=
                  "<td colspan='6' class='text-danger'> NONE </td>";
              } else {
                checkResultBall.lotto5.map((items) => {
                  if (
                    items == item.num1 ||
                    items == item.num2 ||
                    items == item.num3 ||
                    items == item.num4 ||
                    items == item.num5 ||
                    items == item.num6
                  ) {
                    // console.log('5: ' + items);
                    ResultsShow5 +=
                      "<td class='text-danger'> " + items + ' </td>';
                    NumberResult5++;
                  } else if (items == item.bonus) {
                    ResultsShow5 +=
                      "<td class='text-info'> " + items + ' </td>';
                    BonusResult5++;
                  } else {
                    ResultsShow5 +=
                      "<td class='text-dark'> " + items + ' </td>';
                  }
                });
              }
              if (NumberResult1 == 6) {
                NumberResult1 = '<span class="text-warning">Win 1st</span>';
              } else if (NumberResult1 == 5 && BonusResult1 == 1) {
                NumberResult1 = '<span class="text-warning">Win 2nd</span>';
              } else if (NumberResult1 == 5) {
                NumberResult1 = '<span class="text-warning">Win 3rd</span>';
              } else if (NumberResult1 == 4) {
                NumberResult1 = '<span class="text-warning">Win 4th</span>';
              } else if (NumberResult1 == 3) {
                NumberResult1 = '<span class="text-warning">Win 5th</span>';
              } else {
                NumberResult1 = 'You Lose';
              }
              if (NumberResult2 == 6) {
                NumberResult2 = '<span class="text-warning">Win 1st</span>';
              } else if (NumberResult2 == 5 && BonusResult2 == 1) {
                NumberResult2 = '<span class="text-warning">Win 2nd</span>';
              } else if (NumberResult2 == 5) {
                NumberResult2 = '<span class="text-warning">Win 3rd</span>';
              } else if (NumberResult2 == 4) {
                NumberResult2 = '<span class="text-warning">Win 4th</span>';
              } else if (NumberResult2 == 3) {
                NumberResult2 = '<span class="text-warning">Win 5th</span>';
              } else {
                NumberResult2 = 'You Lose';
              }
              if (NumberResult3 == 6) {
                NumberResult3 = '<span class="text-warning">Win 1st</span>';
              } else if (NumberResult3 == 5 && BonusResult3 == 1) {
                NumberResult3 = '<span class="text-warning">Win 2nd</span>';
              } else if (NumberResult3 == 5) {
                NumberResult3 = '<span class="text-warning">Win 3rd</span>';
              } else if (NumberResult3 == 4) {
                NumberResult3 = '<span class="text-warning">Win 4th</span>';
              } else if (NumberResult3 == 3) {
                NumberResult3 = '<span class="text-warning">Win 5th</span>';
              } else {
                NumberResult3 = 'You Lose';
              }
              if (NumberResult4 == 6) {
                NumberResult4 = '<span class="text-warning">Win 1st</span>';
              } else if (NumberResult4 == 5 && BonusResult4 == 1) {
                NumberResult4 = '<span class="text-warning">Win 2nd</span>';
              } else if (NumberResult4 == 5) {
                NumberResult4 = '<span class="text-warning">Win 3rd</span>';
              } else if (NumberResult4 == 4) {
                NumberResult4 = '<span class="text-warning">Win 4th</span>';
              } else if (NumberResult4 == 3) {
                NumberResult4 = '<span class="text-warning">Win 5th</span>';
              } else {
                NumberResult4 = 'You Lose';
              }
              if (NumberResult5 == 6) {
                NumberResult5 = '<span class="text-warning">Win 1st</span>';
              } else if (NumberResult5 == 5 && BonusResult5 == 1) {
                NumberResult5 = '<span class="text-warning">Win 2nd</span>';
              } else if (NumberResult5 == 5) {
                NumberResult5 = '<span class="text-warning">Win 3rd</span>';
              } else if (NumberResult5 == 4) {
                NumberResult5 = '<span class="text-warning">Win 4th</span>';
              } else if (NumberResult5 == 3) {
                NumberResult5 = '<span class="text-warning">Win 5th</span>';
              } else {
                NumberResult5 = 'You Lose';
              }
              var x = document.getElementById('reader');
              x.innerHTML =
                '<div class="text-center my-3"><h2 class="font-khmer-language text-warning">លទ្ធផលរបស់អ្នក</h2><h4 class="text-secondary">Your Results</h4></div><table class="table border " style="font-weight: bold"><thead class="text-light font-khmer-language" style="background:linear-gradient(to right, rgb(153, 1, 183), rgb(70, 12, 167))"><tr><th>លេខ <br/>No</th><th colspan="6">លេខឆ្នោតឡូតូ <br/>Lottery Number</th><th>លទ្ធផល <br/>Results</th></tr></thead><tbody style="background: #f5f5f5"><tr><td class="text-secondary">A</td>' +
                ResultsShow1 +
                '<td>' +
                NumberResult1 +
                '</td></tr><tr><td class="text-secondary">B</td>' +
                ResultsShow2 +
                '<td>' +
                NumberResult2 +
                '</td></tr><tr><td class="text-secondary">C</td>' +
                ResultsShow3 +
                '<td>' +
                NumberResult3 +
                '</td></tr><tr><td class="text-secondary">D</td>' +
                ResultsShow4 +
                '<td>' +
                NumberResult4 +
                '</td></tr><tr><td class="text-secondary">E</td>' +
                ResultsShow5 +
                '<td>' +
                NumberResult5 +
                '</td></tr><tr class="text-center" style="border-top: 2px solid #000; background: #fff"><td colspan="8" class="font-khmer-language">លទ្ធផលឆ្នោតប្រចាំសប្ដាហ៍ទី់ ' +
                '<span style="font-family: Limon S1; font-size: 30px">' +
                item.weekly +
                '</span><br/><span style="font-family: "Arial Rounded MT Bold";> Weekly Lottery Results ' +
                item.weekly +
                '</span></td></tr><tr class="text-center " style="background: #fff"><td class="ball-list-show" colspan="8"><div class="d-flex justify-content-start"><ul>' +
                '<li class="list-inline-item"><div class="ball-list" style= "background-color: #BE1E2D"><span class="ball-list-1"></span><span class="ball-list-2"></span><span class="ball-list-3"></span><span class="ball-list-4"></span><div class="color-ball"> <span style="font-size: 14px; font-weight: bold">' +
                item.num1 +
                '</span></div></div> </li>' +
                '<li class="list-inline-item"><div class="ball-list" style= "background-color: #2B3990"><span class="ball-list-1"></span><span class="ball-list-2"></span><span class="ball-list-3"></span><span class="ball-list-4"></span><div class="color-ball"> <span style="font-size: 14px; font-weight: bold">' +
                item.num2 +
                '</span></div></div> </li>' +
                '<li class="list-inline-item"><div class="ball-list" style= "background-color: #BE1E2D"><span class="ball-list-1"></span><span class="ball-list-2"></span><span class="ball-list-3"></span><span class="ball-list-4"></span><div class="color-ball"> <span style="font-size: 14px; font-weight: bold">' +
                item.num3 +
                '</span></div></div> </li>' +
                '<li class="list-inline-item"><div class="ball-list" style= "background-color: #006838"><span class="ball-list-1"></span><span class="ball-list-2"></span><span class="ball-list-3"></span><span class="ball-list-4"></span><div class="color-ball"> <span style="font-size: 14px; font-weight: bold">' +
                item.num4 +
                '</span></div></div> </li>' +
                '<li class="list-inline-item"><div class="ball-list" style= "background-color: #2B3990"><span class="ball-list-1"></span><span class="ball-list-2"></span><span class="ball-list-3"></span><span class="ball-list-4"></span><div class="color-ball"> <span style="font-size: 14px; font-weight: bold">' +
                item.num5 +
                '</span></div></div> </li>' +
                '<li class="list-inline-item"><div class="ball-list" style= "background-color: #006838"><span class="ball-list-1"></span><span class="ball-list-2"></span><span class="ball-list-3"></span><span class="ball-list-4"></span><div class="color-ball"> <span style="font-size: 14px; font-weight: bold">' +
                item.num6 +
                '</span></div></div> </li>' +
                '<li class="list-inline-item"><div class="ball-list"><span class="ball-list-1"></span><span class="ball-list-2"></span><span class="ball-list-3"></span><span class="ball-list-4"></span><div class="color-ball"> <span style="font-size: 14px; font-weight: bold"> +' +
                '</span></div></div> </li>' +
                '<li class="list-inline-item"><div class="ball-list" style= "background: linear-gradient(to right, rgb(153, 1, 183), rgb(70, 12, 167))"><span class="ball-list-1"></span><span class="ball-list-2"></span><span class="ball-list-3"></span><span class="ball-list-4"></span><div class="color-ball"> <span style="font-size: 14px; font-weight: bold">' +
                item.bonus +
                '</span></div></div> </li>' +
                '</div></ul></td></tr></tbody></table><div class="font-khmer-language text-center"><a href="How_To_Get_Your_Prizes" class="btn btn-primary m-1"><i class="fa-solid fa-eye"></i> ព័ត៌មាននៃរង្វាន់ (Preview Detail Prize)</a><br/><a class="btn btn-dark text-light m-1" href="/Search"><i class="fa-solid fa-magnifying-glass"></i> សាកល្បងម្ដងទៀត (Try Again)</a></div><div class="my-3 text-center"><h4 class="text-dark my-3">Follow us :</h4><a  href="https://www.youtube.com/channel/UCmUFVzBi1gymawt1Pwt58Gw/featured"  class="m-2"  target="_blank">  <img src="images/photofile/youtube-icon.png" width="30px" alt="" /></a><a  href="https://twitter.com/official_paycam"  class="m-2"  target="_blank">  <img src="images/photofile/twitter-12.png" width="30px" alt="" /></a><a  href="https://www.instagram.com/paycam_official/"  class="m-2"  target="_blank">  <img src="images/photofile/instagram=123.png" width="30px" alt="" /></a><a href="mailto:help@paycamlotto.com" class="m-2" target="_blank">  <img src="images/photofile/google.png" width="30px" alt="" /></a><a  href="https://web.facebook.com/paycamcambodia/"  class="m-2"  target="_blank"><img src="images/photofile/facebook1231.png" width="30px" alt="" /></a></div>';
            } else {
              return ' ';
            }
          })}
        <MenuFooter />
      </div>
    );
  }
}
