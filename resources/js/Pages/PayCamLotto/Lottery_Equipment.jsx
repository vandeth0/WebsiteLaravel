import React, { Component } from 'react';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';
import { NavLink } from 'react-router-dom';
import New_info from 'Pages/Main_Information/New_info';

export default class Lottery_Equipment extends Component {
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
              <h4>Paycam Lotto 6/39</h4>
              <p>Lottery Equipment</p>
            </div>

            <div className="col-xl-9 col-lg-9 col-12">
              <h4>Equipment</h4>
              <p>
                A lottery machine is the machine used to draw the winning
                numbers for a lottery. Early lotteries were done by drawing
                numbers, or winning tickets, from a container.
              </p>
              <img
                src="/images/photofile/315wdgwshwre.jpg"
                width="150px"
                height="150px"
                alt=""
              />
              <img
                src="/images/photofile/WinTV_Essencio_Vega_web_v2.jpg"
                width="150px"
                height="150px"
                alt=""
              />
              <h4>Random Number Generators</h4>
              <p>
                Some lotteries use computerized random number generators, either
                alongside or in place of a mechanical draw machine. These are
                more "cost-effective": with mechanical equipment, machines and
                balls have to be replaced periodically. However, these are not
                as interesting to watch, and may give a player a sense that the
                lottery is being rigged.
              </p>
              <img
                src="/images/photofile/random-number-generator-1200x768.png"
                width="250px"
                alt=""
              />
              <h4>Air Max</h4>
              <p>
                lottery machine has a fan in the bottom that blows the balls
                around the inside of the container. The winning numbers go up
                and out through a tube. This is mostly used in "pick 3" and
                "pick 4" games, however, it is occasionally used in "lotto"
                games. In the latter case, either several tubes are in the
                container, or a single tube is used, and the ball is
                mechanically pushed onto a tray. Though similar in style to the
                latter type of "air mix" machines, those currently used by the
                American Powerball game do not use air mix; it is more in tune
                with a "gravity pick" machine, with the mixing paddles at the
                bottom of the machine. As the mixing paddle slows down, the ball
                lands on a pedestal, where it is carried to the top of the
                machine and then pushed onto the tray. On rare occasions, a
                similar machine is used in a "pick 3" or "pick 4" game.
              </p>
              <img
                src="/images/photofile/WinTV_Essencio_Vega_web_v2.jpg"
                width="100%"
                alt=""
              />
            </div>
            <div
              className="col-col-3 col-lg-3 col-12 moblie-view menu-news-info"
              style={{
                height: '150vh',
              }}
            >
              <New_info />
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
