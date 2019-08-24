import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import History from './Components/History'
import Calculator from './Components/Calculator'
import reducers from './reducers'

const App = () => {

    return (
        <div>
            <History />
            <Calculator />
        </div>
    )
}

ReactDOM.render(<Provider store={createStore(reducers)}><App /></Provider>, document.getElementById('root'))