import React, { Component, Fragment } from 'react';
import Main_header from 'Pages/Data/Main_header';
import Main_footer from 'Pages/Data/Main_footer';
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
  faClock,
} from '@fortawesome/free-solid-svg-icons';

@inject('root')
@observer
export default class NoticeShow extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.noticeProvider;
    this.store.addModalShow();
    this.store.readNotice();
  }
  render() {
    const { noticeList, NoticeList } = this.store;
    return (
      <>
        {noticeList &&
          noticeList.length > 0 &&
          noticeList
            .slice(NoticeList.start, NoticeList.end)
            .map((item, idx) => {
              return (
                <Fragment key={idx}>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 font-khmer-language">
                    <img
                      src={`/storage/Notice/${item.file_hash}`}
                      alt=""
                      width="100%"
                      className="border"
                    />
                    <br />
                    <b>
                      <FontAwesomeIcon icon={faClock} /> {item.register_at}
                    </b>
                  </div>
                  <div
                    className="pb-5 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 font-khmer-language"
                    style={{
                      whiteSpace: 'nowrap',
                      overFlow: 'auto',
                      position: 'relative',
                    }}
                  >
                    <h4 className="my-3" style={{ whiteSpace: 'normal' }}>
                      {item.title}
                    </h4>
                    <p className="mb-5" style={{ whiteSpace: 'normal' }}>
                      {' '}
                      {item.contents}
                    </p>
                    <div
                      style={{ position: 'absolute', bottom: '0', right: '0' }}
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
                </Fragment>
              );
            })}
      </>
    );
  }
}
