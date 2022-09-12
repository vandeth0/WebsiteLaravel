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
    this.store = props.root.userLoginProvider;
  }
  render() {
    return (
      <div className="menu-moblie font-khmer-language">
        <ul style={{ fontSize: '10px' }}>
          <li>
            <NavLink
              to="/khmer"
              onClick={(e) => {
                e.stopPropagation();
                var x = document.getElementById('reader');
                x.style.display = 'none';
                var b = document.getElementById('bg-black');
                b.style.display = 'none';
                var bs = document.getElementById('bg-blacks');
                bs.style.display = 'none';
              }}
            >
              <FontAwesomeIcon icon={faHome} />
              <br />
              ទំព័រដើម
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/khmer/communiy/Notice"
              onClick={(e) => {
                e.stopPropagation();
                var x = document.getElementById('reader');
                x.style.display = 'none';
                var b = document.getElementById('bg-black');
                b.style.display = 'none';
                var bs = document.getElementById('bg-blacks');
                bs.style.display = 'none';
              }}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              <br />
              ដំណឹង
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/khmer/Search"
              onClick={(e) => {
                e.stopPropagation();
                var x = document.getElementById('reader');
                x.style.display = 'block';
                var b = document.getElementById('bg-black');
                b.style.display = 'block';
                var bs = document.getElementById('bg-blacks');
                bs.style.display = 'block';
              }}
            >
              <FontAwesomeIcon icon={faSearch} />
              <br />
              ស្វែងរក
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/khmer/winningresult/All_Winning_Numbers"
              onClick={(e) => {
                e.stopPropagation();
                var x = document.getElementById('reader');
                x.style.display = 'none';
                var b = document.getElementById('bg-black');
                b.style.display = 'none';
                var bs = document.getElementById('bg-blacks');
                bs.style.display = 'none';
              }}
            >
              <FontAwesomeIcon icon={faCheckCircle} />
              <br />
              លទ្ធផល
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/khmer/paycamlotto639/Agency"
              onClick={(e) => {
                e.stopPropagation();
                var x = document.getElementById('reader');
                x.style.display = 'none';
                var b = document.getElementById('bg-black');
                b.style.display = 'none';
                var bs = document.getElementById('bg-blacks');
                bs.style.display = 'none';
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
