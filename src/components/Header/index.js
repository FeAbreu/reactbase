import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import '../../styles/GlobalStyle.css';
import './style.css';

export default function Header(){
  return (
      <section className="header">
         <div className="container">
            <div className="row">
                <div className="menu">
                  <div className="mobile">
                    <label className="mobile__label" for="checkbox">
                      <div className="mobile__label__content">
                        <span className="label__line"></span>
                        <span className="label__line"></span>
                      </div>
                      <div className="mobile__label__content">
                        <span className="label__line"></span>
                        <span className="label__line"></span>
                      </div>
                      <div className="mobile__label__content">
                        <span className="label__line"></span>
                        <span className="label__line"></span>
                      </div>
                    </label>
                      <input className="mobile__input" type="checkbox" id="checkbox" />
                      <nav className="mobile__nav">
                        <ul>
                          <li className="nav__item">
                            <Link to="/">Home</Link>
                          </li>
                          <li className="nav__item">
                          <Link to="/About">About</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                </div>
            </div>
            <div className="row">

            </div>
          </div>
      </section>
    )
}
