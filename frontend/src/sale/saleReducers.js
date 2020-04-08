  const INITIAL_STATE = {
    description: '',
    list: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'SALE_SEARCHED':
            return { ...state, list: action.payload }
        case 'SALE_CLEAR':
            return { ...state, description: '' }
        default:
            return state
    }
}