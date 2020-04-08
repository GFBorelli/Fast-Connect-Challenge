import React from 'react'

import PageHeader from '../template/PageHeader'
import SaleForm from './SaleForm'
import SaleList from './SaleList'

export default props => (
    <div>
        <PageHeader name='Vendas' small='Relatório' />
        <SaleForm />
        <SaleList />
    </div>
)