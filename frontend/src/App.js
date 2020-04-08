import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap'

import Menu from './template/Menu'
import Routes from './routes'

function App() {
  return (
    <Container>
      <Menu />
      <Routes />
    </Container>
  );
}

export default App;
