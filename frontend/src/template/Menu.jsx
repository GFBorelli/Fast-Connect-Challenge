import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { FaRegChartBar } from 'react-icons/fa';

export default props => (

    <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#sales'>
            <FaRegChartBar />{' '}
            Fast Connect Challenge
        </Navbar.Brand>
        <Nav>
            <Nav.Link href='#sales'>Relatório</Nav.Link>
            <Nav.Link href='#about'>Sobre</Nav.Link>
        </Nav>
    </Navbar>
)