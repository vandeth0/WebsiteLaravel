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
      <div className="menu-moblie">
        <ul>
          <li>
            <NavLink
              to="/"
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
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Notice"
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
              Notice
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Search"
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
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/All_Winning_Numbers"
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
              Results
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Agency"
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
              Agency
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
