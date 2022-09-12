import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import RootProvider from './Modules/Providers';

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
import Main_body from 'Pages/Data/Main_body';
import FAQ from 'Pages/MenuFooterList/FAQ';
import Info_Edit from 'Pages/Edit_Data/Info_Edit';
import News_Info from 'Pages/Edit_Data/News_Info';
import Search from 'Pages/Data/Search';

import Kh_Solution from 'PagesKhmer/PayCamLotto/Solution';
import Kh_Draw_Results from 'PagesKhmer/PayCamLotto/Draw_Results';
import Kh_Lottery_Equipment from 'PagesKhmer/PayCamLotto/Lottery_Equipment';
import Kh_How_To_Buy from 'PagesKhmer/PayCamLotto/How_To_Buy';
import Kh_Direct_Management from 'PagesKhmer/PayCamLotto/Direct_Management';
import Kh_All_Winning_Numbers from 'PagesKhmer/Winning_Results/All_Winning_Numbers';
import Kh_Check_Winning_Numbers from 'PagesKhmer/Winning_Results/Check_Winning_Numbers';
import Kh_Details_of_Winners from 'PagesKhmer/Winning_Results/Details_of_Winners';
import Kh_How_To_Get_Your_Prizes from 'PagesKhmer/Winning_Results/How_To_Get_Your_Prizes';
import Kh_Draw_Broadcast from 'PagesKhmer/Winning_Results/Draw_Broadcast';
import Kh_Weekly_Lottery from 'PagesKhmer/Winning_Results/Weekly_Lottery';
import Kh_Instant_Lottery from 'PagesKhmer/Winning_Results/Instant_Lottery';
import Kh_Notice from 'PagesKhmer/Community/Notice';
import Kh_WL_PAYCAM_Event from 'PagesKhmer/Community/WL_PAYCAM_Event';
import Kh_News from 'PagesKhmer/Community/News';
import Kh_News_of_PLP from 'PagesKhmer/Community/News_of_PLP';
import Kh_Store_of_The_Week from 'PagesKhmer/Community/Store_of_The_Week';
import Kh_QnA from 'PagesKhmer/Community/QnA';
import Kh_Lottery_Funds_Social from 'PagesKhmer/LOVE_IN_US/Lottery_Funds_Social';
import Kh_Social_Contribution from 'PagesKhmer/LOVE_IN_US/Social_Contribution';
import Kh_Donation_Report from 'PagesKhmer/LOVE_IN_US/Donation_Report';
import Kh_Community_Service from 'PagesKhmer/LOVE_IN_US/Community_Service';
import Kh_Hobakdungkul_Holdings from 'PagesKhmer/MenuFooterList/Hobakdungkul_Holdings';
import Kh_PayCam_Lotto_Protocol from 'PagesKhmer/MenuFooterList/PayCam_Lotto_Protocol';
import Kh_WL_PAYCAM_CAMBODIA from 'PagesKhmer/MenuFooterList/WL_PAYCAM_CAMBODIA';
import Kh_Terms_of_Service from 'PagesKhmer/MenuFooterList/Terms_of_Service';
import Kh_Policy_and_Privacy from 'PagesKhmer/MenuFooterList/Policy_and_Privacy';
import Kh_Agency from 'PagesKhmer/PayCamLotto/Agency';
import Kh_Main_body from 'PagesKhmer/Data/Main_body';
import Kh_FAQ from 'PagesKhmer/MenuFooterList/FAQ';
import Kh_Info_Edit from 'PagesKhmer/Edit_Data/Info_Edit';
import Kh_News_Info from 'PagesKhmer/Edit_Data/News_Info';
import Kh_Search from 'PagesKhmer/Data/Search';

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
            <Route exact path="/Search" component={Search} />
            <Route exact path="/FAQ" component={FAQ} />
            <Route exact path="/Info_Edit" component={Info_Edit} />
            <Route exact path="/News_Info" component={News_Info} />
            <Route exact path="/paycamLotto639/Solution" component={Solution} />
            <Route
              exact
              path="/winningresults/Draw_Broadcast"
              component={Draw_Broadcast}
            />
            <Route
              exact
              path="/paycamLotto639/Draw_Results"
              component={Draw_Results}
            />
            <Route
              exact
              path="/paycamLotto639/How_To_Buy"
              component={How_To_Buy}
            />
            <Route
              exact
              path="/winningresults/Weekly_Lottery"
              component={Weekly_Lottery}
            />
            <Route
              exact
              path="/winningresults/Instant_Lottery"
              component={Instant_Lottery}
            />
            <Route exact path="/community/Notice" component={Notice} />
            <Route
              exact
              path="/community/WL_PAYCAM_Event"
              component={WL_PAYCAM_Event}
            />
            <Route exact path="/community/News" component={News} />
            <Route
              exact
              path="/community/News_of_PLP"
              component={News_of_PLP}
            />
            <Route exact path="/paycamLotto639/Agency" component={Agency} />
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
              path="/loveinus/Lottery_Funds_Social"
              component={Lottery_Funds_Social}
            />
            <Route
              exact
              path="/loveinus/Social_Contribution"
              component={Social_Contribution}
            />
            <Route
              exact
              path="/loveinus/Donation_Report"
              component={Donation_Report}
            />
            <Route
              exact
              path="/loveinus/Community_Service"
              component={Community_Service}
            />
            <Route
              exact
              path="/community/Store_of_The_Week"
              component={Store_of_The_Week}
            />
            <Route exact path="/community/QnA" component={QnA} />
            <Route
              exact
              path="/winningresults/How_To_Get_Your_Prizes"
              component={How_To_Get_Your_Prizes}
            />
            <Route
              exact
              path="/winningresults/Details_of_Winners"
              component={Details_of_Winners}
            />
            <Route
              exact
              path="/winningresults/Check_Winning_Numbers"
              component={Check_Winning_Numbers}
            />
            <Route
              exact
              path="/winningresults/All_Winning_Numbers"
              component={All_Winning_Numbers}
            />
            <Route
              exact
              path="/paycamLotto639/Direct_Management"
              component={Direct_Management}
            />
            <Route
              exact
              path="/paycamLotto639/Lottery_Equipment"
              component={Lottery_Equipment}
            />

            {/* ===========================Khmer version======================== */}

            <Route exact path="/khmer" component={Kh_Main_body} />
            <Route exact path="/khmer/Search" component={Kh_Search} />
            <Route exact path="/khmer/FAQ" component={Kh_FAQ} />
            <Route exact path="/khmer/Info_Edit" component={Kh_Info_Edit} />
            <Route exact path="/khmer/News_Info" component={Kh_News_Info} />
            <Route
              exact
              path="/khmer/paycamLotto639/Solution"
              component={Kh_Solution}
            />
            <Route
              exact
              path="/khmer/winningresults/Draw_Broadcast"
              component={Kh_Draw_Broadcast}
            />
            <Route
              exact
              path="/khmer/paycamLotto639/Draw_Results"
              component={Kh_Draw_Results}
            />
            <Route
              exact
              path="/khmer/paycamLotto639/How_To_Buy"
              component={Kh_How_To_Buy}
            />
            <Route
              exact
              path="/khmer/winningresults/Weekly_Lottery"
              component={Kh_Weekly_Lottery}
            />
            <Route
              exact
              path="/khmer/winningresults/Instant_Lottery"
              component={Kh_Instant_Lottery}
            />
            <Route exact path="/khmer/community/Notice" component={Kh_Notice} />
            <Route
              exact
              path="/khmer/community/WL_PAYCAM_Event"
              component={Kh_WL_PAYCAM_Event}
            />
            <Route exact path="/khmer/community/News" component={Kh_News} />
            <Route
              exact
              path="/khmer/community/News_of_PLP"
              component={Kh_News_of_PLP}
            />
            <Route
              exact
              path="/khmer/paycamLotto639/Agency"
              component={Kh_Agency}
            />
            <Route
              exact
              path="/khmer/Policy_and_Privacy"
              component={Kh_Policy_and_Privacy}
            />
            <Route
              exact
              path="/khmer/Terms_of_Service"
              component={Kh_Terms_of_Service}
            />
            <Route
              exact
              path="/khmer/Hobakdungkul_Holdings"
              component={Kh_Hobakdungkul_Holdings}
            />
            <Route
              exact
              path="/khmer/PayCam_Lotto_Protocol"
              component={Kh_PayCam_Lotto_Protocol}
            />
            <Route
              exact
              path="/WL_PAYCAM_CAMBODIA"
              component={Kh_WL_PAYCAM_CAMBODIA}
            />
            <Route
              exact
              path="/khmer/loveinus/Lottery_Funds_Social"
              component={Kh_Lottery_Funds_Social}
            />
            <Route
              exact
              path="/khmer/loveinus/Social_Contribution"
              component={Kh_Social_Contribution}
            />
            <Route
              exact
              path="/khmer/loveinus/Donation_Report"
              component={Kh_Donation_Report}
            />
            <Route
              exact
              path="/khmer/loveinus/Community_Service"
              component={Kh_Community_Service}
            />
            <Route
              exact
              path="/khmer/community/Store_of_The_Week"
              component={Kh_Store_of_The_Week}
            />
            <Route exact path="/khmer/community/QnA" component={Kh_QnA} />
            <Route
              exact
              path="/khmer/winningresults/How_To_Get_Your_Prizes"
              component={Kh_How_To_Get_Your_Prizes}
            />
            <Route
              exact
              path="/khmer/winningresults/Details_of_Winners"
              component={Kh_Details_of_Winners}
            />
            <Route
              exact
              path="/khmer/winningresults/Check_Winning_Numbers"
              component={Kh_Check_Winning_Numbers}
            />
            <Route
              exact
              path="/khmer/winningresults/All_Winning_Numbers"
              component={Kh_All_Winning_Numbers}
            />
            <Route
              exact
              path="/khmer/paycamLotto639/Direct_Management"
              component={Kh_Direct_Management}
            />
            <Route
              exact
              path="/khmer/paycamLotto639/Lottery_Equipment"
              component={Kh_Lottery_Equipment}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
