import React from 'react'
import { connect } from 'react-redux'
import { clearHistoryActionCreator } from '../actions'

class History extends React.Component {
    
    componentDidUpdate() {
        console.log("history component updated")
    }

    render() {
        console.log(this.props)
        return (
            <div>
                history
                {this.props.history.map(item => {return (<div>{item}</div>)})}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {history: state.histoyReducer}
}

export default connect(mapStateToProps, {clearHistoryActionCreator: clearHistoryActionCreator})(History)