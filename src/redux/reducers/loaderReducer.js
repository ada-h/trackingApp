import {REGISTERING_USER, LOGGING_IN_USER, TRACKING_PRODUCT, CREATING_SHIPMENT, CREATING_SHIPPING_TO, CREATING_SHIPPING_FROM} from '../actions/types'


const initialState = {
    loggingUser: false,
    registeringUser: false,
    trackingProducts: false,
    creatingShipment: false,
    creatingShippingTo: false,
    creatingShippingFrom: false

}

const Loading = (state = initialState, action) => {
    switch (action.type) {

        case REGISTERING_USER:
            return{...state, registeringUser: action.payload}

        case LOGGING_IN_USER:
            return{...state, loggingUser: action.payload}
       
        case TRACKING_PRODUCT:
            return{...state, trackingProducts: action.payload}

        case CREATING_SHIPMENT:
            return{...state, creatingShipment: action.payload}

        case CREATING_SHIPPING_TO:
            return{...state,creatingShippingTo: action.payload }

        case CREATING_SHIPPING_FROM:
            return{...state, creatingShippingFrom: action.payload}

        default: 
            return {... state}

    }
}



export default Loading