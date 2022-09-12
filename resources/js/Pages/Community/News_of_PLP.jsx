import React, { Component } from 'react';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';

export default class News_of_PLP extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 my-2">
              <h4>Community</h4>
              <p>News of PLP</p>
            </div>

            <div className="col-12 my-5">
              <h4>News of PLP</h4>

              <p>
                Hello, PAYCAM users! Do you want to know about the distribution
                of global users by country? PAYCAM is especially popular in
                Philippines, which accounts for 54% of the total users. Thanks
                for supporting PAYCAM! North America has the second highest
                number of users making up 19% of the total number of users.
                Third place was South Korea with 13%, Indonesia made it to the
                fourth place with 12%, Cambodia made it to the fifth place with
                2%, and India made it to sixth with 1%.Thanks to all of you
                PAYCAM families around the world for loving and supporting the
                PAYCAM project!
              </p>
              <img
                src="/images/photofile/paycam-global.jpg"
                width="100%"
                alt=""
              />
              <p>
                We have some exciting news to share with you about the official
                opening of the PAYCAM Lotto. The official opening will be held
                in two trenches. Starting with lottery sales, the first trench
                consists of “pre-sale opening” and “official opening” which will
                be aired via Cambodian terrestrial TV channel. The official
                timeline for the opening is when PAYCAM directly managed stores
                and affiliated stores open.Pre-sale of PAYCAM Lotto will be
                available at contracted agencies, and all sales tickets are
                accumulated until the 1st PAYCAM Lotto draw which will be held
                on January 1, 2022. In order to maximize the effect of the first
                round of marketing, the PAYCAM Foundation will distribute a
                lottery ticket worth $100,000 (approximately 120 million won) to
                Phnom Penh local citizens on a first-come, first-served basis,
                and the amount will be deposited as a cumulative prize.
              </p>
              <img
                src="/images/photofile/315wdgwshwre.jpg"
                width="100%"
                alt=""
              />
              <p>
                The first model of the PAYCAM Lotto lottery machine has arrived
                at the office. The lottery system adopts air-breath process
                which allows viewers to see a transparent automatic drawing
                process. This method is structured for viewers to easily
                understand the lottery process through broadcasting. The lottery
                system extracts the winning ball through the drum ring rotation
                extraction method (Drum Catch) by the air mixing method. The
                various features of the lottery system increases the level of
                security and fairness of the entire lottery process to the next
                level. After the Cambodia scholarship quiz aired on Cambodian
                public broadcasting, the final test of the lottery machine to be
                used in the lottery broadcast is coming to an end. All of the
                staff dispatched to Cambodia are doing their best to complete
                all preparations on site prior to the grand opening. Thank you
                to everyone who has been supporting the upcoming grand opening
                of PAYCMA Lotto.
              </p>
              <img src="/images/photofile/135gdagw4y.jpg" width="100%" alt="" />
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
