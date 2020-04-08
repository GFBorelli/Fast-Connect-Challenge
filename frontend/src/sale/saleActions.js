import axios from 'axios'

const URL = 'http://localhost:3003/api/sales'

export const search = () => {
    return (dispatch, getState) => {
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => dispatch({ type: 'SALA_SEARCHED', payload: resp.data }))
    }
}