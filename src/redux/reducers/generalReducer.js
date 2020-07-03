import { CHANGE_ACTIVE,FILL_OUT_FORM, SWITCH_AUTH, TRACKED_PRODUCT, REGISTERED_SUCCESSFULLY, LOGIN_SUCCESSFUL} from '../actions/types'




const initialState = {
    activePage: 1,
    email : '',
    password: '',
    authForm: 0,
    name: '',
    trackingNo: '',
    load: 0,
    shipmentName: '',
    shipmentType: '',
    goodsType: '',
    width: 0,
    length: 0,
    weight: 0,
    containerNo: 0,
    receiverName: '',
    receiverEmail:'',
    receiverPhone: '',
    receiverCompany: '',
    receiverCountry: '',
    receiverAddress1: '',
    receiverAddress2: '',
    receiverAddress3: '',
    postal_code: 0, 
    receiverState: '', 
    city: '',
    creatingShippingFrom: '', 
    senderName: '', 
    senderCompany: '', 
    senderCountry: '', 
    senderAddress1: '', 
    senderAddress2: '', 
    senderAddress3: '', 
    senderState: '', 
    senderCity: '',
    senderEmail: '', 
    senderPhone:'',
    senderVatNo: 0

}

const General = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_ACTIVE: 
                return {...state, activePage: action.payload}

        case FILL_OUT_FORM:
            return {...state, [action.payload.props]: action.payload.value, }

        case SWITCH_AUTH:
            return{...state, authForm: action.payload}

        case TRACKED_PRODUCT:
            return{...state, trackingNo: ''}

        case REGISTERED_SUCCESSFULLY:
            return{...state, authForm: 3}

        case LOGIN_SUCCESSFUL:
            return{...state, authForm: 4}

        default: 
        return {... state}

    }
}



export default General