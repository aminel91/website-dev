import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>A beautiful, responsive, react app written with modern Javascript.</p>
        </div>
      </header>
      <p>Welcome to my website.</p>
      <p><b>I have just completed my Master's degree, and am now available for hire.<br/><br/>
      I am particularly interested in a position as
        a Java Developer in the Montreal area, but what I'm really looking for is an awesome team and a motivating position.</b></p>
      <p> Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/aminel91/aminel91.github.io">here</a>.</p>
    </article>
  </Main>
);

export default Index;
