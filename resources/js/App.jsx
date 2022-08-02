import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import RootProvider from './Modules/Providers';
// import MainFile from 'Pages/Main/MainFile';
import Pages from 'Pages/Pages';
import Test1 from 'Pages/Test1';
import Test from 'Pages/Test';
import Solution from 'Pages/PayCamLotto/Solution';
import Draw_Results from 'Pages/PayCamLotto/Draw_Results';
import Lottery_Equipment from 'Pages/PayCamLotto/Lottery_Equipment';
import How_To_Buy from 'Pages/PayCamLotto/How_To_Buy';
import Direct_Management from 'Pages/PayCamLotto/Direct_Management';
import All_Winning_Numbers from 'Pages/Winning_Results/All_Winning_Numbers';
import Check_Winning_Numbers from 'Pages/Winning_Results/Check_Winning_Numbers';
import Details_of_Winners from 'Pages/Winning_Results/Details_of_Winners';
import How_To_Get_Your_Prizes from 'Pages/Winning_Results/How_To_Get_Your_Prizes';
import Draw_Broadcast from 'Pages/Winning_Results/Draw_Broadcast';
import Weekly_Lottery from 'Pages/Winning_Results/Weekly_Lottery';
import Instant_Lottery from 'Pages/Winning_Results/Instant_Lottery';
import Notice from 'Pages/Community/Notice';
import WL_PAYCAM_Event from 'Pages/Community/WL_PAYCAM_Event';
import News from 'Pages/Community/News';
import News_of_PLP from 'Pages/Community/News_of_PLP';
import Store_of_The_Week from 'Pages/Community/Store_of_The_Week';
import QnA from 'Pages/Community/QnA';
import Lottery_Funds_Social from 'Pages/LOVE_IN_US/Lottery_Funds_Social';
import Social_Contribution from 'Pages/LOVE_IN_US/Social_Contribution';
import Donation_Report from 'Pages/LOVE_IN_US/Donation_Report';
import Community_Service from 'Pages/LOVE_IN_US/Community_Service';
import Hobakdungkul_Holdings from 'Pages/MenuFooterList/Hobakdungkul_Holdings';
import PayCam_Lotto_Protocol from 'Pages/MenuFooterList/PayCam_Lotto_Protocol';
import WL_PAYCAM_CAMBODIA from 'Pages/MenuFooterList/WL_PAYCAM_CAMBODIA';
import Terms_of_Service from 'Pages/MenuFooterList/Terms_of_Service';
import Policy_and_Privacy from 'Pages/MenuFooterList/Policy_and_Privacy';
import Agency from 'Pages/PayCamLotto/Agency';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';
import Main_body from 'Pages/Data/Main_body';
import ទំព័រដើម from './Pages/khmerVersion/ទំព័រដើម';
import LoginUserkh from './Pages/khmerVersion/Desk_khmer/LoginUser';
import LoginUser from './Pages/Desk/LoginUser';
import ទីភ្នាក់ងារ from 'Pages/khmerVersion/PayCamLotto/Agency';
import ការគ្រប់គ្រងផ្ទាល់ from 'Pages/khmerVersion/PayCamLotto/Direct_Management';
import លទ្ធផលការចាប់ឆ្នោត from 'Pages/khmerVersion/PayCamLotto/Draw_Results';
import របៀបទិញ from 'Pages/khmerVersion/PayCamLotto/How_To_Buy';
import ឧបករណ៍ឆ្នោត from 'Pages/khmerVersion/PayCamLotto/Lottery_Equipment';
import ដំណោះស្រាយ from 'Pages/khmerVersion/PayCamLotto/Solution';
import All_Winning_NumbersKH from 'Pages/khmerVersion/Winning_Results/All_Winning_Numbers';
import Check_Winning_NumbersKH from 'Pages/khmerVersion/Winning_Results/Check_Winning_Numbers';
import Details_of_WinnersKH from 'Pages/khmerVersion/Winning_Results/Details_of_Winners';
import How_To_Get_Your_PrizesKH from 'Pages/khmerVersion/Winning_Results/How_To_Get_Your_Prizes';
import Draw_BroadcastKH from 'Pages/khmerVersion/Winning_Results/Draw_Broadcast';
import Weekly_LotteryKH from 'Pages/khmerVersion/Winning_Results/Weekly_Lottery';
import Instant_LotteryKH from 'Pages/khmerVersion/Winning_Results/Instant_Lottery';
import NewsKh from 'Pages/khmerVersion/Community/News';
import News_of_PLPKH from 'Pages/khmerVersion/Community/News_of_PLP';
import NoticeKH from 'Pages/khmerVersion/Community/Notice';
import QnAKH from 'Pages/khmerVersion/Community/QnA';
import Store_of_The_WeekKH from 'Pages/khmerVersion/Community/Store_of_The_Week';
import WL_PAYCAM_EventKH from 'Pages/khmerVersion/Community/WL_PAYCAM_Event';
import Community_ServiceKH from 'Pages/khmerVersion/LOVE_IN_US/Community_Service';
import Donation_ReportKH from 'Pages/khmerVersion/LOVE_IN_US/Donation_Report';
import Lottery_Funds_SocialKH from 'Pages/khmerVersion/LOVE_IN_US/Lottery_Funds_Social';
import Social_ContributionKH from 'Pages/khmerVersion/LOVE_IN_US/Social_Contribution';
import Hobakdungkul_HoldingsKH from 'Pages/khmerVersion/MenuFooterList/Hobakdungkul_Holdings';
import PayCam_Lotto_ProtocolKH from 'Pages/khmerVersion/MenuFooterList/PayCam_Lotto_Protocol';
import Policy_and_PrivacyKH from 'Pages/khmerVersion/MenuFooterList/Policy_and_Privacy';
import Terms_of_ServiceKH from 'Pages/khmerVersion/MenuFooterList/Terms_of_Service';
import WL_PAYCAM_CAMBODIAKH from 'Pages/khmerVersion/MenuFooterList/WL_PAYCAM_CAMBODIA';
import FAQKH from 'Pages/khmerVersion/MenuFooterList/FAQKH';
import FAQ from 'Pages/MenuFooterList/FAQ';
import Info_Edit from 'Pages/Edit_Data/Info_Edit';
import News_Info from 'Pages/Edit_Data/News_Info';
import Search from 'Pages/Data/Search';

import '../sass/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import './bootstrap';
import 'Lib';
import '../sass/style.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.store = new RootProvider();
  }

  componentWillUnmount = () => {
    this.store = null;
  };

  render() {
    console.log(new Date().format('yyyy-MM-dd'));
    return (
      <Provider root={this.store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main_body} />
            <Route exact path="/LoginUser" component={LoginUser} />
            <Route exact path="/Search" component={Search} />
            <Route exact path="/ទំព័រដើម" component={ទំព័រដើម} />
            <Route exact path="/FAQKH" component={FAQKH} />
            <Route exact path="/FAQ" component={FAQ} />
            <Route exact path="/Info_Edit" component={Info_Edit} />
            <Route exact path="/News_Info" component={News_Info} />
            <Route
              exact
              path="/Hobakdungkul_HoldingsKH"
              component={Hobakdungkul_HoldingsKH}
            />
            <Route
              exact
              path="/PayCam_Lotto_ProtocolKH"
              component={PayCam_Lotto_ProtocolKH}
            />
            <Route
              exact
              path="/Policy_and_PrivacyKH"
              component={Policy_and_PrivacyKH}
            />
            <Route
              exact
              path="/Terms_of_ServiceKH"
              component={Terms_of_ServiceKH}
            />
            <Route
              exact
              path="/WL_PAYCAM_CAMBODIAKH"
              component={WL_PAYCAM_CAMBODIAKH}
            />
            <Route
              exact
              path="/Community_ServiceKH"
              component={Community_ServiceKH}
            />
            <Route
              exact
              path="/Donation_ReportKH"
              component={Donation_ReportKH}
            />
            <Route
              exact
              path="/Lottery_Funds_SocialKH"
              component={Lottery_Funds_SocialKH}
            />
            <Route
              exact
              path="/Social_ContributionKH"
              component={Social_ContributionKH}
            />
            <Route exact path="/NewsKh" component={NewsKh} />
            <Route exact path="/News_of_PLPKH" component={News_of_PLPKH} />
            <Route exact path="/NoticeKH" component={NoticeKH} />
            <Route exact path="/QnAKH" component={QnAKH} />
            <Route
              exact
              path="/Store_of_The_WeekKH"
              component={Store_of_The_WeekKH}
            />
            <Route
              exact
              path="/WL_PAYCAM_EventKH"
              component={WL_PAYCAM_EventKH}
            />
            <Route
              exact
              path="/All_Winning_NumbersKH"
              component={All_Winning_NumbersKH}
            />
            <Route
              exact
              path="/Check_Winning_NumbersKH"
              component={Check_Winning_NumbersKH}
            />
            <Route
              exact
              path="/Details_of_WinnersKH"
              component={Details_of_WinnersKH}
            />
            <Route
              exact
              path="/How_To_Get_Your_PrizesKH"
              component={How_To_Get_Your_PrizesKH}
            />
            <Route
              exact
              path="/Draw_BroadcastKH"
              component={Draw_BroadcastKH}
            />
            <Route
              exact
              path="/Weekly_LotteryKH"
              component={Weekly_LotteryKH}
            />
            <Route
              exact
              path="/Weekly_LotteryKH"
              component={Weekly_LotteryKH}
            />
            <Route
              exact
              path="/Instant_LotteryKH"
              component={Instant_LotteryKH}
            />
            <Route
              exact
              path="/ការគ្រប់គ្រងផ្ទាល់"
              component={ការគ្រប់គ្រងផ្ទាល់}
            />
            <Route
              exact
              path="/លទ្ធផលការចាប់ឆ្នោត"
              component={លទ្ធផលការចាប់ឆ្នោត}
            />
            <Route exact path="/របៀបទិញ" component={របៀបទិញ} />
            <Route exact path="/ទីភ្នាក់ងារ" component={ទីភ្នាក់ងារ} />
            <Route exact path="/ឧបករណ៍ឆ្នោត" component={ឧបករណ៍ឆ្នោត} />
            <Route exact path="/ដំណោះស្រាយ" component={ដំណោះស្រាយ} />
            <Route exact path="/LoginUserkh" component={LoginUserkh} />

            <Route exact path="/Solution" component={Solution} />
            <Route exact path="/Draw_Broadcast" component={Draw_Broadcast} />
            <Route exact path="/Draw_Results" component={Draw_Results} />
            <Route exact path="/How_To_Buy" component={How_To_Buy} />
            <Route exact path="/Weekly_Lottery" component={Weekly_Lottery} />
            <Route exact path="/Instant_Lottery" component={Instant_Lottery} />
            <Route exact path="/Notice" component={Notice} />
            <Route exact path="/WL_PAYCAM_Event" component={WL_PAYCAM_Event} />
            <Route exact path="/News" component={News} />
            <Route exact path="/News_of_PLP" component={News_of_PLP} />
            <Route exact path="/Agency" component={Agency} />
            <Route
              exact
              path="/Policy_and_Privacy"
              component={Policy_and_Privacy}
            />
            <Route
              exact
              path="/Terms_of_Service"
              component={Terms_of_Service}
            />
            <Route
              exact
              path="/Hobakdungkul_Holdings"
              component={Hobakdungkul_Holdings}
            />
            <Route
              exact
              path="/PayCam_Lotto_Protocol"
              component={PayCam_Lotto_Protocol}
            />
            <Route
              exact
              path="/WL_PAYCAM_CAMBODIA"
              component={WL_PAYCAM_CAMBODIA}
            />
            <Route
              exact
              path="/Lottery_Funds_Social"
              component={Lottery_Funds_Social}
            />
            <Route
              exact
              path="/Social_Contribution"
              component={Social_Contribution}
            />
            <Route exact path="/Donation_Report" component={Donation_Report} />
            <Route
              exact
              path="/Community_Service"
              component={Community_Service}
            />
            <Route
              exact
              path="/Store_of_The_Week"
              component={Store_of_The_Week}
            />
            <Route exact path="/QnA" component={QnA} />
            <Route
              exact
              path="/How_To_Get_Your_Prizes"
              component={How_To_Get_Your_Prizes}
            />
            <Route
              exact
              path="/Details_of_Winners"
              component={Details_of_Winners}
            />
            <Route
              exact
              path="/Check_Winning_Numbers"
              component={Check_Winning_Numbers}
            />
            <Route
              exact
              path="/All_Winning_Numbers"
              component={All_Winning_Numbers}
            />
            <Route
              exact
              path="/Direct_Management"
              component={Direct_Management}
            />
            <Route
              exact
              path="/Lottery_Equipment"
              component={Lottery_Equipment}
            />
            <Route exact path="/Test" component={Test} />

            {/* <Route exact path="/login" component={Login} />
            <Route path="/page" component={Main} />
            <Route path="/popup" component={Popup} />
            <Route path="/qr_record" component={Popup} />
            <Route path="/etn" component={ExcelToNumbering} />
            <Route component={SessionCheck} /> */}
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
