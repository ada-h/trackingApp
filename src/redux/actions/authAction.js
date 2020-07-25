import {REGISTERING_USER, LOGGING_IN_USER, REGISTERED_SUCCESSFULLY,
     REGISTRATION_ERROR, LOGIN_SUCCESSFUL} from './types'
import axios from "axios";
import config from "./config"
import qs from 'qs'

//Register Customer

const apiconfig = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
}

export const registerCustomer = (name, email, password) => {
    let data = {
        name: name,
        email: email,
        password: password
    }

    return (dispatch) => {
        dispatch({
            type: REGISTERING_USER,
            payload: true
        })
        axios.post(config.apiUrl + `/customers/create`, qs.stringify(data), apiconfig)
            .then(res => {
                dispatch({
                    type: REGISTERING_USER,
                    payload: false
                })
                dispatch({
                    type: REGISTERED_SUCCESSFULLY,
                    payload: true
                })
                console.log(res)
            })
            .catch(err => {
                dispatch({
                    type: REGISTRATION_ERROR,
                    payload: err.response.data.error.message
                })
                dispatch({
                    type: REGISTERING_USER,
                    payload: false
                })
            })

    }
}

//Login Customer
export const loginCustomer = (email, password) => {
    let data = {
        email: email,
        password: password
    }

    return (dispatch) => {
        dispatch({
            type: LOGGING_IN_USER,
            payload: true
        })
        if (email !== '' && password !== '') {
            axios.post(config.apiUrl + '/customers/login', qs.stringify(data), apiconfig)
                .then(res => {
                    dispatch({
                        type: LOGGING_IN_USER,
                        payload: false
                    })
                    dispatch({
                        type: LOGIN_SUCCESSFUL,
                        payload: res.data
                    })
                    
                    dispatch(customerInfo(res.data.customer_id))
                })
                .catch(err => {
                    console.log(err)
                    dispatch({
                        type: LOGGING_IN_USER,
                        payload: false
                    })
                })
        }


    }
}

//Get Customer Info
export const customerInfo = (customerId) => {

    return (dispatch) => {
        axios.get(config.apiUrl + `/customer?customer_id=${customerId}`)
            .then(res => {
                console.log(res, 'i am the customer information')
            })
            .catch(err => {
                console.log(err)
            })

    }
}

//Update customer's personal information
export const updatePersonal = (customerId, name, day_phone, eve_phone, mob_phone) => {
    let body={
        "customer_id": customerId,
        "name": name,
        "day_phone": day_phone,
        "eve_phone": eve_phone,
        "mob_phone": mob_phone
    }
    return (dispatch) => {
        
        axios.post(config.apiUrl + `/customer/update`, body)
            .then(res => {
                console.log(res, 'i am the update customer info part')
            })
            .catch(err => {
                console.log(err)
            })

    }
}

//Update customer's address
export const updateAddress = (customerId, address_1, address_2, city, region, postal_code, country) => {
    let body={
        "customer_id": customerId,
        "address_1": address_1,
        "address_2":address_2,
        "city": city,
        "region": region,
        "postal_code": postal_code,
        "country": country
      }
    return (dispatch) => {
        
        axios.post(config.apiUrl + `/customer/address`, body)
            .then(res => {
                console.log(res, 'i am the update customer address part')
            })
            .catch(err => {
                console.log(err)
            })

    }
}