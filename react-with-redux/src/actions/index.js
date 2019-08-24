export const clearHistoryActionCreator = () => {
    return {
        type: 'CLEAR_HISTORY'
    }
}

export const addActionCreator = () => {
    return {
        type: 'ADD_ONE'
    }
}

export const subtractActionCreator = () => {
    return {
        type: 'SUBTRACT_ONE'
    }
}

export const addAnyActionCreator = (value) => {
    return {
        type: 'ADD_SOMETHING',
        payload: value
    }
}