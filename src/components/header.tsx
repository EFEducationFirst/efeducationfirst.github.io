/* eslint-disable max-len,react/button-has-type,jsx-a11y/anchor-is-valid,react/self-closing-comp */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@ef-global/web-ui-react/lib/logos/LogoSimple';

export const Header: React.FC = () => (
  <header className="ef-header -condensed" data-activate="ef-header" data-type="condensed">
    <div className="ef-header__main">
      <div className="container md:mx-auto sm:mx-2 ef-header__group -standalone">
        <div className="ef-header__item ef-header__product">
          <div className="ef-header__logo ef-logo--go-ahead">
            <Logo />
          </div>
        </div>
        <button className="ef-header__menu-toggle ef-nav__toggle">
          <svg className="ef-icon ef-header__icon -animated -animated-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <g className="line1">
              <rect className="rect1" y="9" width="32" height="3" rx="1" ry="1" />
            </g>
            <g className="line2">
              <rect className="rect2" y="20" width="32" height="3" rx="1" ry="1" />
            </g>
          </svg>
        </button>
        <div className="ef-header__group -nav">
          <nav className="ef-nav ef-header__item">
            <ul className="ef-nav__menu">
              <li className="ef-nav__item">
                <Link to="/" className="ef-nav__link">Home</Link>
              </li>
              <li className="ef-nav__item">
                <Link to="/handbook" className="ef-nav__link">Handbook</Link>
              </li>
              <li className="ef-nav__item">
                <a className="ef-nav__link" href="https://github.com/efeducationfirst" target="_blank" rel="noreferrer">GitHub</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
);
