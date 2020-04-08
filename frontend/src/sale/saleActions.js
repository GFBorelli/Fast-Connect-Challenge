import axios from 'axios'

const URL = 'http://localhost:3003/api/sales'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED', payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().sale.description
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({ type: 'SALE_SEARCHED', payload: resp.data }))
    }
}

export const clear = () => {
    return [{ type: 'SALE_CLEAR' }, search()]
}