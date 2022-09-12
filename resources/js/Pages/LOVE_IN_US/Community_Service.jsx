import React, { Component } from 'react';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';

export default class Community_Service extends Component {
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
              <p>Community Service</p>
            </div>

            <div className="col-12">
              <h4>Community Service</h4>
              <p>
                Community service is exactly what it sounds like: services that
                you do to benefit your community. If that sounds a little broad,
                it’s because it is community service can take a lot of different
                forms since there’s SO much you can do to help folks out in your
                area.
              </p>
              <h4>Collect Things For Your Community :</h4>
              <p>
                If you look around your community, you’ll probably find at least
                a few places that accept donations -- like food pantries, family
                shelters, and schools, just to name a few. Here’s a super
                comprehensive guide on running your own donation drive,
              </p>
            </div>

            <div className="col-12 my-3">
              <img
                src="/images/photofile/1632627546132 (2).jpg"
                width="100%"
                alt=""
                className="my-3"
              />
              <h4>
                and here are some picture of Places That Accept Donations​ ៖
              </h4>
              <p>
                Community service is a non-paying job performed by one person or
                a group of people for the benefit of their community or its
                institutions.
              </p>
              <p>
                Community service is unpaid work performed by a person or group
                of people for the benefit and betterment of their community
                without any form of compensation. Community service can be
                distinct from volunteering, since it is not always performed on
                a voluntary basis and may be compulsory.
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
