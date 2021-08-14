import React from 'react';
import { Container } from 'react-bootstrap';
// import Fade from 'react-reveal/Fade';
// import Swing from 'react-reveal/Swing';
import { Link } from 'react-scroll';

const Header = () => (
  <section id="hero" className="jumbotron">
    <Container>
      {/* <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px"> */}
      <h1 className="hero-title">
        <span className="text-color-main">Dogukan Ermis</span>
        <br />
        Software Developer
      </h1>
      {/* </Fade> */}
      {/* <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px"> */}
      <p className="hero-cta">
        {/* <Swing bottom duration={1000} delay={800} distance="30px"> */}
        <Link to="about" className="cta-btn cta-btn--hero">
          Know more
        </Link>
        {/* </Swing> */}
      </p>
      {/* </Fade> */}
    </Container>
  </section>
);

export default Header;
