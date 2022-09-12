import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faCoffee,
  faPlus,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
@inject('root')
@observer
export default class BallShow extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.ballListProvider;
    this.store.readBallListOut();
    this.ss = props.root.ballApiProvider;

    this.ss.ballApiResult();
  }
  render() {
    const { ballListOut } = this.store;
    const { ballApiList, ballApiResults, appear, valueBallList } =
      this.props.root.ballApiProvider;
    return (
      <Fragment>
        {/* =======================Ball List ====================== */}
        <div className="row">
          <div className="col-12" id="loading-result">
            {ballApiResults
              .slice(valueBallList.start, valueBallList.end)
              .map((item, idx) => {
                this.ss.createdBallApi(item.weekly);
                return (
                  <p key={idx}>
                    Weekly Lottery Results {item.weekly} ({item.date_draw})
                  </p>
                );
              })}
            {appear == 1 && (
              <ul className="list-unstyled">
                <li className="list-inline-item">
                  <div
                    className="ball-list"
                    style={{ backgroundColor: '#2B3990' }}
                  >
                    <span className="ball-list-1"></span>
                    <span className="ball-list-2"></span>
                    <span className="ball-list-3"></span>
                    <span className="ball-list-4"></span>
                    <div className="color-ball">
                      <span>{ballApiList['winLotto'][0]}</span>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div
                    className="ball-list"
                    style={{ backgroundColor: '#006838' }}
                  >
                    <span className="ball-list-1"></span>
                    <span className="ball-list-2"></span>
                    <span className="ball-list-3"></span>
                    <span className="ball-list-4"></span>
                    <div className="color-ball">
                      <span>{ballApiList['winLotto'][1]}</span>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div
                    className="ball-list"
                    style={{ backgroundColor: '#2B3990' }}
                  >
                    <span className="ball-list-1"></span>
                    <span className="ball-list-2"></span>
                    <span className="ball-list-3"></span>
                    <span className="ball-list-4"></span>
                    <div className="color-ball">
                      <span>{ballApiList['winLotto'][2]}</span>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div
                    className="ball-list"
                    style={{ backgroundColor: '#006838' }}
                  >
                    <span className="ball-list-1"></span>
                    <span className="ball-list-2"></span>
                    <span className="ball-list-3"></span>
                    <span className="ball-list-4"></span>
                    <div className="color-ball">
                      <span>{ballApiList['winLotto'][3]}</span>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div
                    className="ball-list"
                    style={{ backgroundColor: '#BE1E2D' }}
                  >
                    <span className="ball-list-1"></span>
                    <span className="ball-list-2"></span>
                    <span className="ball-list-3"></span>
                    <span className="ball-list-4"></span>
                    <div className="color-ball">
                      <span>{ballApiList['winLotto'][4]}</span>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div
                    className="ball-list"
                    style={{ backgroundColor: '#BE1E2D' }}
                  >
                    <span className="ball-list-1"></span>
                    <span className="ball-list-2"></span>
                    <span className="ball-list-3"></span>
                    <span className="ball-list-4"></span>
                    <div className="color-ball">
                      <span>{ballApiList['winLotto'][5]}</span>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item">
                  <span>
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                </li>
                <li className="list-inline-item">
                  <div
                    className="ball-list"
                    style={{
                      background: 'linear-gradient(to right, #9901b7,#460ca7)',
                    }}
                  >
                    <span className="ball-list-1"></span>
                    <span className="ball-list-2"></span>
                    <span className="ball-list-3"></span>
                    <span className="ball-list-4"></span>
                    <div className="color-ball">
                      <span>{ballApiList['winBonus']}</span>
                    </div>
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>
        {/* =======================Ball List ====================== */}
      </Fragment>
    );
  }
}
