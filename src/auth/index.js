import React, { Component } from 'react'
import {connect} from 'react-redux'
import Login from './login'
import Register from './register'
import Success from '../reusables/successCard'



class index extends Component {
    render() {
        const { authForm} = this.props
        return (
            <div className="modal fade login-popup" id="login-popup" tabIndex={-1} role="dialog" aria-hidden="true">
                {authForm == 0 ? <Login/> : authForm == 1 ? <Register/> : authForm == 3 ? <Success/> : ''}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    const {authForm}= state.General
    return{
     authForm
    }
}

export default connect(mapStateToProps, {})(index)