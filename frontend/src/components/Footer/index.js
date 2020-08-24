import React from 'react';
import { FiFacebook, FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';

import { Container } from './styles';

function footer() {
  return (
    <Container>
      <div>
        <a href="https://www.linkedin.com/in/henrique-hoinacki-a98b851a5/">
          <FiLinkedin />
          Linkedin{' '}
        </a>
        <a href="https://twitter.com/HenriqueHoi">
          <FiTwitter />
          Twitter{' '}
        </a>
        <a href="https://www.facebook.com/henrique.hoinacki">
          <FiFacebook />
          Facebook{' '}
        </a>
        <a href="https://github.com/Henrique-Hoi-Dev">
          <FiGithub />
          Github{' '}
        </a>
      </div>
    </Container>
  );
}

export default footer;
