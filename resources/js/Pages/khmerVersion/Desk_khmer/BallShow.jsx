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
  }
  render() {
    const { ballListOut } = this.store;
    return (
      <Fragment>
        {/* =======================Ball List ====================== */}
        <div className="row ball-list-show font-khmer-language">
          <div className="col-12">
            {ballListOut.slice(0, 1).map((item, idx) => {
              return (
                <ul key={idx} className="list-unstyled">
                  <p>លទ្ធផលការចាប់ឆ្នោតសប្ដាហ៍ទី {item.weekly}</p>

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
                        <span>{item.num1}</span>
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
                        <span>{item.num2}</span>
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
                        <span>{item.num3}</span>
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
                        <span>{item.num4}</span>
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
                        <span>{item.num5}</span>
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
                        <span>{item.num6}</span>
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
                        background:
                          'linear-gradient(to right, #9901b7,#460ca7)',
                      }}
                    >
                      <span className="ball-list-1"></span>
                      <span className="ball-list-2"></span>
                      <span className="ball-list-3"></span>
                      <span className="ball-list-4"></span>
                      <div className="color-ball">
                        <span>{item.bonus}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
        {/* =======================Ball List ====================== */}
      </Fragment>
    );
  }
}
