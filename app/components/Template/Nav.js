import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/Test2.png`} alt=""/>
      </Link>
      <header>
        <h2>Amine Laarej</h2>
        <p><a href="mailto:laarej.amine@gmail.com">laarej.amine@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Amine. I like building things.
        I am currently a Master's student at <a href="https://www.concordia.ca/ginacody/info-systems-eng.html">Concordia University</a>. I am
          pursuing a thesis option Master's degree in the field of Multi-Agent Systems. I also work on Automatic Model-Based test-generation, and Intelligent systems.
      </p>
        <p>
            <b>I expect to graduate by July 2020.</b>
        </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Amine Laarej <Link to="/">aminelaarej.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
