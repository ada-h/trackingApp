import {REGISTRATION_ERROR, LOGIN_SUCCESSFUL} from '../actions/types'
import axios from 'axios'


const initialState = {
    regErr: ''
}

const Auth = (state = initialState, action) => {
    switch (action.type) {

        case REGISTRATION_ERROR:
            return{...state, regErr: action.payload}

        case LOGIN_SUCCESSFUL:
            storeToken(action.payload.token)
            return{...state, }
      
        default: 
        return {... state}

    }
}


const storeToken = (payload) => {
    localStorage.setItem('bongoExpressToken', JSON.stringify(payload));
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + payload;
}

const saveUser = (payload) => {
    localStorage.setItem('adbasadorparticipant', JSON.stringify(payload));
}

export default Auth