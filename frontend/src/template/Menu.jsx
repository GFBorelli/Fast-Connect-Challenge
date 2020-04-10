import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { logout } from '../auth/authActions'

import { Navbar, Nav } from 'react-bootstrap'
import { FaRegChartBar } from 'react-icons/fa';
import { GiExitDoor } from 'react-icons/gi'

class Menu extends Component {
    render() {
        const { name } = this.props.user
        if (!this.props.user) return false
        return (
            <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark'>
                <Navbar.Brand href='#sales'>
                    <FaRegChartBar />{' '}
                    Fast Connect Challenge
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href='#sales'>Relatório</Nav.Link>
                        <Nav.Link href='#about'>Sobre</Nav.Link>
                    </Nav>
                    <Nav>
                        <Navbar.Text >Usuário: {name}</Navbar.Text>
                        <Nav.Link href="#" onClick={this.props.logout}><GiExitDoor size='1.8rem' /> Sair</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        )
    }
}
const mapStateToProps = state => ({ user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Menu)