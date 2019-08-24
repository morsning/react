import React from 'react'
import { connect } from 'react-redux'
import { addActionCreator, subtractActionCreator, addAnyActionCreator } from '../actions'

class Calculator extends React.Component {
    
    componentDidUpdate() {
        console.log("calculator component updated")
    }
    
    render() {
        return (
            <div>
                <p>{this.props.currentValue}</p>
                <button onClick={() => this.props.addActionCreator()}>Add</button>
                <button onClick={() => this.props.subtractActionCreator()}>Subtract</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {currentValue: state.calculatorReducer}
}

export default connect(mapStateToProps, {addActionCreator: addActionCreator, subtractActionCreator: subtractActionCreator, addAnyActionCreator: addAnyActionCreator})(Calculator)