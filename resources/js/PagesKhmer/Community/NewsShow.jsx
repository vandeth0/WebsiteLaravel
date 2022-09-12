import React, { Component, Fragment } from 'react';
import Main_header from 'PagesKhmer/Data/Main_header';
import Main_footer from 'PagesKhmer/Data/Main_footer';
import { inject, observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlignLeft,
  faBars,
  faBook,
  faBookReader,
  faCaretDown,
  faCoffee,
  faEye,
  faGlobe,
  faStreetView,
  faUser,
  faUsersViewfinder,
} from '@fortawesome/free-solid-svg-icons';

@inject('root')
@observer
export default class NewsShow extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.newsProvider;
    this.store.addModalShow();
    this.store.readNews();
  }
  render() {
    const { newsList, newsShowList } = this.store;
    return (
      <>
        {newsList &&
          newsList.length > 0 &&
          newsList
            .slice(newsShowList.start, newsShowList.end)
            .map((item, idx) => {
              return (
                <Fragment key={idx}>
                  <div className="col-12 my-2 font-khmer-language">
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        src={`/storage/News/${item.file_hash}`}
                        className="photo-news"
                      />
                    </div>
                    <hr className="my-5" />
                    <div
                      className="text-dark mt-3 pb-5"
                      style={{ position: 'relative' }}
                    >
                      <h2
                        className="my-3"
                        style={{ whiteSpace: 'normal', fontWeight: 'bold' }}
                      >
                        {item.title}
                      </h2>
                      <p style={{ whiteSpace: 'normal' }}>
                        <span className="text-secondary">{item.contents}</span>
                      </p>
                      <p
                        style={{
                          whiteSpace: 'normal',
                          color: '#bdbdbd',
                          fontSize: '10px',
                        }}
                      >
                        {item.register_at}
                      </p>
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '0',
                          right: '0',
                        }}
                      >
                        <h4 className="text-dark m-2">Follow us :</h4>
                        <a
                          href="https://www.youtube.com/channel/UCmUFVzBi1gymawt1Pwt58Gw/featured"
                          className="m-2"
                          target="_blank"
                        >
                          <img
                            src="/images/photofile/youtube-icon.png"
                            width="30px"
                            alt=""
                          />
                        </a>
                        <a
                          href="https://twitter.com/official_paycam"
                          className="m-2"
                          target="_blank"
                        >
                          <img
                            src="/images/photofile/twitter-12.png"
                            width="30px"
                            alt=""
                          />
                        </a>
                        <a
                          href="https://www.instagram.com/paycam_official/"
                          className="m-2"
                          target="_blank"
                        >
                          <img
                            src="/images/photofile/instagram=123.png"
                            width="30px"
                            alt=""
                          />
                        </a>
                        <a
                          href="mailto:help@paycamlotto.com"
                          className="m-2"
                          target="_blank"
                        >
                          <img
                            src="/images/photofile/google.png"
                            width="30px"
                            alt=""
                          />
                        </a>
                        <a
                          href="https://web.facebook.com/paycamcambodia/"
                          className="m-2"
                          target="_blank"
                        >
                          <img
                            src="/images/photofile/facebook1231.png"
                            width="30px"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <hr />
                </Fragment>
              );
            })}
      </>
    );
  }
}
