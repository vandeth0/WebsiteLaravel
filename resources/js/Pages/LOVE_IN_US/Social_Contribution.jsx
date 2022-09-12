import React, { Component } from 'react';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';

export default class Social_Contribution extends Component {
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
              <h4>LOVE IN US</h4>
              <p>Social Contribution</p>
            </div>

            <div className="col-12 ">
              <h4>Social Contribution</h4>
              <p>
                Social Contribution Project "Love in Us" with "WL PAYCAM
                CAMBODIA CO.,LTD" Background of Project.
              </p>
            </div>

            <div className="col-12 my-5">
              <p>
                Team Work <br />
                Social Contribution Project Love in Us with WL PAYCAM CAMBODIA
                CO.,LTD Background of Project.Prior to starting a full-scale
                business in Cambodia, We want to show the image of "WL PAYCAM
                LOTTO", which sells lotto tickets by differentiating.
              </p>
              <img
                src="/images/photofile/2fbsvswv.jpg"
                width="100%"
                alt=""
                style={{
                  borderStyle: 'solid',
                  borderColor: '#460ca7 #9901b7 #460ca7 #9901b7',
                }}
              />
              <p className="my-3">
                We, "WL PAYCAM LOTTO", want to start with small sharing by
                conducting active social contribution activities in Cambodia and
                gradually expand.
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
