import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/Amine.png`} alt=""/>
      </Link>
      <header>
        <h2>Amine Laarej</h2>
        <p><a href="mailto:laarej.amine@gmail.com">laarej.amine@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Amine. I like building things.
        I have recently completed a Master's degree in <a href = "https://www.concordia.ca/academics/graduate/quality-systems-masc.html">Quality Systems Engineering</a> from <a href="https://www.concordia.ca/ginacody/info-systems-eng.html">Concordia University</a>.<br/><br/>
        My <a href={"https://dblp.org/pid/169/6098.html"}>research</a> was mainly in model checking Multi-agent Systems and Automatic Model-based test generation for safety critical systems.
      </p>
        <p>
            <b>I am currently looking for a Java Developer position in the Montreal Area.</b>
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
