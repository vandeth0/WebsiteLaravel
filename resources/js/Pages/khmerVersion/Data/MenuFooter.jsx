import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faBuilding,
  faCheckCircle,
  faCoffee,
  faHome,
  faInfoCircle,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { inject, observer } from 'mobx-react';
import ReactDOM from 'react-dom';

@inject('root')
@observer
export default class MenuFooter extends Component {
  constructor(props) {
    super(props);
    this.store = props.root.loginProvider;
  }
  render() {
    return (
      <div className="menu-moblie font-khmer-language menu-khmer">
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={(e) => {
                e.stopPropagation();
                var x = document.getElementById('reader');
                x.style.display = 'none';
              }}
            >
              <FontAwesomeIcon icon={faHome} />
              <br />
              ទំព័រដើម
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Notice"
              onClick={(e) => {
                e.stopPropagation();
                var x = document.getElementById('reader');
                x.style.display = 'none';
              }}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              <br />
              ដំណឹង
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Search"
              onClick={(e) => {
                e.stopPropagation();
                this.store.qrCode('reader', 'show');
                var x = document.getElementById('reader');
                x.style.display = 'block';
              }}
            >
              <FontAwesomeIcon icon={faSearch} />
              <br />
              ស្វែងរក
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/All_Winning_Numbers"
              onClick={(e) => {
                e.stopPropagation();
                var x = document.getElementById('reader');
                x.style.display = 'none';
              }}
            >
              <FontAwesomeIcon icon={faCheckCircle} />
              <br />
              លទ្ធផល
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Agency"
              onClick={(e) => {
                e.stopPropagation();
                var x = document.getElementById('reader');
                x.style.display = 'none';
              }}
            >
              <FontAwesomeIcon icon={faBuilding} />
              <br />
              ភ្នាក់ងារ
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
