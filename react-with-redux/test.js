import { combineReducers, createStore } from "redux"

const calculatorReducer = (currentValue = 0, action) => {
        if (action.type === 'ADD_ONE') {
            return currentValue++
        }
        if (action.type === 'SUBTRACT_ONE') {
            return currentValue--
        }

        return currentValue
    }

    const history = (historyList = ['START'], action) => {
        if (action.type === 'ADD_ONE') {
            return historyList.push('adding one')
        }
        if (action.type === 'SUBTRACT_ONE') {
            return historyList.push('subtracting one')
        }

        return historyList
    }
    
    const store = createStore(combineReducers({calculatorReducer: calculatorReducer, histoyReducer: history}))

    store.dispatch({type: 'ADD_ONE', payload: ''})

    store.dispatch({type: 'ADD_ONE', payload: ''})

    console.log(store.getState())
