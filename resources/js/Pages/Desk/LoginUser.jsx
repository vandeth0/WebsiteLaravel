import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faCoffee,
  faEye,
  faEyeSlash,
  faLock,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import Main_header from '../Data/Main_header';
import Main_footer from '../Data/Main_footer';
import { inject, observer } from 'mobx-react';
import { action, observable } from 'mobx';
import { NavLink } from 'react-router-dom';

@inject('root')
@observer
export default class LoginUser extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.userLoginProvider;
  }

  render() {
    const { sessionEnter, showPassword, showPasswordHide } = this.store;
    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="login-user border">
            <div className="text-center"></div>
            <p>
              Login To <span style={{ color: '#fa69ff' }}>Your Account</span>
            </p>
            <div className="login-form">
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                className=""
                placeholder="Username"
                type="text"
                value={sessionEnter.username}
                onChange={(e) => {
                  e.stopPropagation();
                  const { value } = e.target;
                  this.store.enterSession('username', value);
                }}
              />
            </div>
            <br />
            <div className="login-form">
              <span>
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                placeholder="Password"
                type={showPassword}
                value={sessionEnter.password}
                onChange={(e) => {
                  e.stopPropagation();
                  const { value } = e.target;
                  this.store.enterSession('password', value);
                }}
              />
            </div>

            {showPasswordHide === 0 ? (
              <span
                className="btn btn-outline-dark my-3"
                onClick={(e) => {
                  e.stopPropagation();
                  this.store.checkedPassword('text');
                  this.store.changeShowHide(1);
                }}
              >
                <FontAwesomeIcon icon={faEye} /> Show
              </span>
            ) : (
              <span
                className="btn btn-outline-dark my-3"
                onClick={(e) => {
                  e.stopPropagation();
                  this.store.checkedPassword('password');
                  this.store.changeShowHide(0);
                }}
              >
                <FontAwesomeIcon icon={faEyeSlash} /> Hide
              </span>
            )}

            <div>
              <br />
              <button
                className="btn"
                style={{
                  backgroundColor: '#fa69ff',
                  color: '#fff',
                  width: '100%',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  this.store.enterUserLogin();
                }}
              >
                <NavLink to="/">Login</NavLink>
              </button>
            </div>
            <div style={{ textAlign: 'right' }}>
              <a href="" className="text-light">
                Forgot Password?
              </a>
            </div>
            <div className="text-center my-2">
              <p>-or-</p>
            </div>

            <div>
              <ul className="list-unstyled text-center">
                <li className="list-inline-item p-1">
                  <a href="">
                    <img
                      src="images/photofile/paycam-logo.png"
                      width="50px"
                      alt=""
                    />
                  </a>
                </li>
                <li className="list-inline-item p-1">
                  <a href="">
                    <img
                      src="images/photofile/google.png"
                      width="50px"
                      alt=""
                    />
                  </a>
                </li>
                <li className="list-inline-item p-1">
                  <a href="">
                    <img
                      src="images/photofile/facebook1231.png"
                      width="50px"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <span> Create Account?</span>
              <a href="" className="">
                <span> Sign up</span>
              </a>
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
