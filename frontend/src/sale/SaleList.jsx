import React from 'react'
import moment from 'moment'

import { connect } from 'react-redux'

import { Table } from 'react-bootstrap'

const SaleList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(sale => (
            <tr key={sale._id}>
                <td>{sale.description}</td>
                <td>{sale.saleWay}</td>
                <td>{moment(sale.createdAt).format('D-MM-YY, h:mm:ss')}</td>
            </tr>
        ))
    }

    return (
        <Table hover responsive>
            <thead>
                <tr>
                    <th>Item vendido</th>
                    <th className='saleCol'>Forma da venda</th>
                    <th className='saleCol'>Data da venda</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </Table >
    )
}

const mapStateToProps = state => ({ list: state.sale.list })

export default connect(mapStateToProps)(SaleList)