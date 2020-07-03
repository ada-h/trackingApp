import {TRACKED_PRODUCT, TRACKING_ERROR} from '../actions/types'

const initialState = {
    trackedProduct : [],
    trackingError: ''

}

const Loading = (state = initialState, action) => {
    switch (action.type) {

        case TRACKED_PRODUCT:
            return{...state, trackedProduct: action.payload}

        case TRACKING_ERROR:
            return{...state,  trackingError: action.payload}

        default: 
            return {... state}

    }
}



export default Loading