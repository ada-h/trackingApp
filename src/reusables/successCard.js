import React, { Component } from 'react'
import { connect } from 'react-redux'
import { switchAuthForm} from '../redux/actions'
import Loader from '../reusables/formLoader'

class Login extends Component {
    render() {
        const { email, password, loggingUser} = this.props
      
      
        return (
            <div className="modal-dialog modal-md">
                <a className="close close-btn" data-dismiss="modal" aria-label="Close"> x </a>
                <div className="modal-content">
                    <div className="login-wrap text-center">
                        <img src="../assets/img/icons/success.png" alt="success"/>
                        <h5> Registration Sucessful!</h5>
                        
                    </div>
                    <div className="create-accnt">
                        <h2 data-toggle="modal" className="title-2">
                             <a onClick={()=>this.props.switchAuthForm(0)} className="green-clr under-line">
                                 Back to Login
                            </a> 
                        </h2>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
   
    return {
       
    }
}

export default connect(mapStateToProps, {switchAuthForm})(Login)