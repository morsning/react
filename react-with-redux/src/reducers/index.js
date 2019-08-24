import { combineReducers } from 'redux'

const calculatorReducer = (currentValue = 0, action) => {
    if (action.type === 'ADD_ONE') {
        currentValue = currentValue + 1;
        return currentValue
    }
    if (action.type === 'SUBTRACT_ONE') {
        currentValue = currentValue - 1;
        return currentValue
    }
    if (action.type === 'ADD_SOMETHING') {
        currentValue = currentValue + action.payload;
        return currentValue
    }

    return currentValue
}

const history = (historyList = [], action) => {
    if (action.type === 'ADD_ONE') {
        return [...historyList, 'adding one']
    }
    if (action.type === 'SUBTRACT_ONE') {
        return [...historyList, 'subtracting one']
    }
    if (action.type === 'ADD_SOMETHING') {
        return [...historyList, 'adding any number']
    }
    if (action.type === 'CLEAR_HISTORY') {
        return []
    }

    return historyList
}

export default combineReducers({calculatorReducer: calculatorReducer, histoyReducer: history})