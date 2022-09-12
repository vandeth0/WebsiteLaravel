import React, { Component } from 'react';
import Main_header from '../Data/Main_header';
import Main_footer from '../Data/Main_footer';

export default class FAQKH extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="container my-3">
          <div className="row">
            <div className="col-12 my-2">
              <h4>Frequently Asked Questions</h4>
            </div>

            <hr />

            <div className="col-12 details-list">
              <details>
                <summary>How to play lottery?</summary>
                <ol>
                  <li>Lotto is most popular lottery game above the world.</li>
                  <li>
                    In more than 90 countries, lotto is played as a public
                    lottery game and occupied 70% of lottery market.
                  </li>
                  <li>
                    As a international standard lottery service, WL Paycam
                    launched March 2022 in Cambodia.
                  </li>
                  <li>
                    Lotto 6/39 means customer select 6 number among 39 numbers.
                    When drawing number, all customers of 6 numbers matched with
                    6 drawn numbers, 1st prize will come.
                  </li>
                </ol>
                <hr />
              </details>
              <details>
                <summary>How to change the tickets?</summary>
                <ol>
                  <li>Lotto is most popular lottery game above the world.</li>
                  <li>
                    In more than 90 countries, lotto is played as a public
                    lottery game and occupied 70% of lottery market.
                  </li>
                  <li>
                    As a international standard lottery service, WL Paycam
                    launched March 2022 in Cambodia.
                  </li>
                  <li>
                    Lotto 6/39 means customer select 6 number among 39 numbers.
                    When drawing number, all customers of 6 numbers matched with
                    6 drawn numbers, 1st prize will come.
                  </li>
                </ol>
                <hr />
              </details>
              <details>
                <summary>Where can i buy lottery?</summary>
                <ol>
                  <li>Lotto is most popular lottery game above the world.</li>
                  <li>
                    In more than 90 countries, lotto is played as a public
                    lottery game and occupied 70% of lottery market.
                  </li>
                  <li>
                    As a international standard lottery service, WL Paycam
                    launched March 2022 in Cambodia.
                  </li>
                  <li>
                    Lotto 6/39 means customer select 6 number among 39 numbers.
                    When drawing number, all customers of 6 numbers matched with
                    6 drawn numbers, 1st prize will come.
                  </li>
                </ol>
                <hr />
              </details>
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
