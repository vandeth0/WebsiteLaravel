import React, { Component } from 'react';
import Main_header from '../Data/Main_header';
import Main_footer from '../Data/Main_footer';

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
import { inject, observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';

@inject('root')
@observer
export default class LoginUser extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.loginProvider;
  }

  render() {
    const { session, showPassword, showPasswordHide } = this.store;
    return (
      <>
        <div>
          <Main_header />
        </div>
        <div className="d-flex justify-content-center align-items-center font-khmer-language">
          <div className="login-user border">
            <div className="text-center"></div>
            <p>
              បញ្ចូលទិន្នន័យ{' '}
              <span style={{ color: '#fa69ff' }}>របស់គណនីអ្នក</span>
            </p>
            <div className="login-form">
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                className=""
                placeholder="Username"
                type="text"
                value={session.username}
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
                value={session.password}
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
                <FontAwesomeIcon icon={faEye} /> បង្ហាញ
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
                <FontAwesomeIcon icon={faEyeSlash} /> បិទ
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
              >
                <NavLink to="/ទំព័រដើម">ចូលគណនី</NavLink>
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
