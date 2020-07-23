import {TRACKED_PRODUCT, TRACKING_ERROR, CALCULATED_PRICE, FILL_OUT_FORM, CALCULATING_COST_ERROR, UPDATE_TRACKER_FAIL} from '../actions/types'

const initialState = {
    trackedProduct : [],
    trackingError: '',
    calculatedPrice: 0,
    updateerr: '',
    calculatecosterr: ''
}

const Loading = (state = initialState, action) => {
    switch (action.type) {

        case TRACKED_PRODUCT:
            return{...state, trackedProduct: action.payload}

        case TRACKING_ERROR:
            return{...state,  trackingError: action.payload}
            
        case CALCULATED_PRICE:
            return{...state, calculatedPrice: action.payload}

        case FILL_OUT_FORM:
            return{...state, calculatedPrice:0 }

        case UPDATE_TRACKER_FAIL:
            return{...state, updateerr: action.payload}

        case CALCULATING_COST_ERROR:
            return{...state, calculatecosterr: action.payload}

        default: 
            return {... state}

    }
}



export default Loading