import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faCoffee,
  faPlus,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { indexOf } from 'lodash';

@inject('root')
@observer
export default class Ball_List_User extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.ballListProvider;
    this.store.readBallListOut();
  }
  render() {
    const { inputBallList, addModalFile, ballListOut } = this.store;
    const data_string = 'vandeth';
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>Update Lottery Winning Number</h4>
            <p>Enter Number 1 to 39</p>
            <input
              type="text"
              placeholder="Lottery Winning Number"
              name=""
              value={inputBallList.weekly}
              className="form-control"
              onChange={(e) => {
                e.stopPropagation();
                const { value } = e.target;
                this.store.inputBallListChange('weekly', value);
              }}
            />
            <hr />
          </div>
          <div className="col-12">
            <ul className="list-unstyled">
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
                    <span>
                      <input
                        type="text"
                        value={inputBallList.num1}
                        onChange={(e) => {
                          e.stopPropagation();
                          const { value } = e.target;
                          this.store.inputBallListChange('num1', value);
                        }}
                      />
                    </span>
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
                    <span>
                      <input
                        type="text"
                        value={inputBallList.num2}
                        onChange={(e) => {
                          e.stopPropagation();
                          const { value } = e.target;
                          this.store.inputBallListChange('num2', value);
                        }}
                      />
                    </span>
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
                    <span>
                      <input
                        type="text"
                        value={inputBallList.num3}
                        onChange={(e) => {
                          e.stopPropagation();
                          const { value } = e.target;
                          this.store.inputBallListChange('num3', value);
                        }}
                      />
                    </span>
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
                    <span>
                      <input
                        type="text"
                        value={inputBallList.num4}
                        onChange={(e) => {
                          e.stopPropagation();
                          const { value } = e.target;
                          this.store.inputBallListChange('num4', value);
                        }}
                      />
                    </span>
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
                    <span>
                      <input
                        type="text"
                        value={inputBallList.num5}
                        onChange={(e) => {
                          e.stopPropagation();
                          const { value } = e.target;
                          this.store.inputBallListChange('num5', value);
                        }}
                      />
                    </span>
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
                    <span>
                      <input
                        type="text"
                        value={inputBallList.num6}
                        onChange={(e) => {
                          e.stopPropagation();
                          const { value } = e.target;
                          this.store.inputBallListChange('num6', value);
                        }}
                      />
                    </span>
                  </div>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="ball-list">
                  <span className="ball-list-1"></span>
                  <span className="ball-list-2"></span>
                  <span className="ball-list-3"></span>
                  <span className="ball-list-4"></span>
                  <div className="color-ball">
                    <span>
                      <h4>+</h4>
                    </span>
                  </div>
                </div>
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
                    <span>
                      <input
                        type="text"
                        value={inputBallList.bonus}
                        onChange={(e) => {
                          e.stopPropagation();
                          const { value } = e.target;
                          this.store.inputBallListChange('bonus', value);
                        }}
                      />
                    </span>
                  </div>
                </div>
              </li>
            </ul>
            <div className="btn btn-primary my-3">{addModalFile}</div>
            <hr />
            <input
              type="date"
              className="form-control"
              onChange={this.store.addModalFileChange}
              placeholder="Date of Lottery"
            />
          </div>
          <div className="col-12 my-3">
            <button
              className="btn btn-success"
              color="primary"
              disabled={
                inputBallList.num1 &&
                inputBallList.num2 &&
                inputBallList.num3 &&
                inputBallList.num4 &&
                inputBallList.num5 &&
                inputBallList.num6 &&
                inputBallList.bonus &&
                inputBallList.dateDraw
                  ? false
                  : true
              }
              onClick={(e) => {
                e.stopPropagation();
                const confirmCheck = confirm('Save?');
                if (confirmCheck === true) {
                  this.store.createdBallList();
                }
              }}
            >
              <FontAwesomeIcon icon={faPlus} /> Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
