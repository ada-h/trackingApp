import {SHIPMENT_CREATED} from '../actions/types'

const initialState = {
    shipmentCreated: 0

}

const Shipping = (state = initialState, action) => {
    switch (action.type) {
        
        case SHIPMENT_CREATED:
            return{...state, shipmentCreated: action.payload}
        default: 
            return {... state}

    }
}



export default Shipping