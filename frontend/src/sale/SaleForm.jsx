import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription, search, clear } from './saleActions'

import { Col, Form, Button } from 'react-bootstrap'
import { FaSearch, FaTimes } from 'react-icons/fa'

class SaleForm extends Component {
    constructor(props) {
        super(props)

        this.shortCuts = this.shortCuts.bind(this)
    }

    componentDidMount() {
        this.props.search()
    }

    shortCuts = (e) => {
        const { search, clear } = this.props
        if (e.key === 'Enter') {
            search()
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { search, clear } = this.props
        return (
            <Form className='mt-3 mb-4' >
                <Form.Row>
                    <Col xs='12' sm='9' md='10'>
                        <Form.Group>
                            <Form.Control
                                placeholder='Digite o nome do item que deseja procurar'
                                onChange={this.props.changeDescription}
                                value={this.props.description}
                                onKeyUp={this.shortCuts}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs='12' sm='3' md='2'>
                        <Form.Group>
                            <Button variant='info' onClick={search}> <FaSearch /> </Button>{' '}
                            <Button variant='secondary' onClick={clear}> <FaTimes /> </Button>
                        </Form.Group>
                    </Col>
                </Form.Row>
            </Form>
        )
    }
}

const mapStateToProps = state => ({ description: state.sale.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SaleForm)