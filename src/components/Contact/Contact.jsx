import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import Swing from 'react-reveal/Swing';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { btn } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">dogukan.ermis@pm.me</p>
            <Swing bottom duration={1000} delay={800} distance="30px">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--resume"
                href="mailto:dogukan.ermis@pm.me"
              >
                {btn || "Let's Talk"}
              </a>
            </Swing>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
