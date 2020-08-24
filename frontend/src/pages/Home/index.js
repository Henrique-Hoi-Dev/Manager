import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import gerenciador from '~/assets/gerenciador.svg';

function Home() {
  return (
    <Container>
      <img src={gerenciador} alt="logodohome" width="300" height="300" />
      <ul>
        <Link to="/manager">Manager</Link>
        <Link to="/main">Task List</Link>
      </ul>
    </Container>
  );
}

export default Home;
