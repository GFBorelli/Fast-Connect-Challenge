import React from 'react'

import PageHeader from '../template/PageHeader'
import SaleList from './SaleList'

export default props => (
    <div>
        <PageHeader name='Vendas' small='Relatório' />
        <SaleList />
    </div>
)