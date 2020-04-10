import React from 'react';
import { HashRouter } from 'react-router-dom'

import './App.css';
import { Container } from 'react-bootstrap'

import Menu from './template/Menu'
import Routes from './routes'

function App() {
  return (
    <HashRouter>
      <Container>
        <Menu />
        <Routes />
      </Container>
    </HashRouter>
  );
}

export default App;
