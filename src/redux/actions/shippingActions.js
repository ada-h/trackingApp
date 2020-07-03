import {CREATING_SHIPMENT, CREATING_DOCUMENT, CREATING_SHIPPING_TO, CREATING_SHIPPING_FROM, 
    SHIPMENT_CREATED} from './types'
import axios from "axios";
import config from './config'

//Track product
export const createshipping = (shipmentName, shipmentType,goodsType,width,length,weight,containerNo) =>{
    console.log(shipmentName, shipmentType,goodsType,width,length,weight,containerNo)
    let data = {
        "name": shipmentName,
        "shipping_type": shipmentType,
        "container_no": containerNo,
        "length": length,
        "width":width,
        "height": 0,
        "weight":weight,
        "goodsType": goodsType,
        "additional_info": "string"
      }
    return(dispatch)=>{
        dispatch({
            type: CREATING_SHIPMENT,
            payload: true
        })
        axios.post(config.apiUrl + `/shipment/create`, data)
        .then(res=>{
            dispatch({
                type: CREATING_SHIPMENT,
                payload: false
            })
           if(res.data.status){
               dispatch({
                   type: SHIPMENT_CREATED,
                   payload: 1
               })
           }
            console.log(res, 'i am the res')
        })
        .catch(err=>{
            dispatch({
                type: CREATING_SHIPMENT,
                payload: false
            })
            console.log(err, 'i am the err')
        })
    }
}

//Create shipping document
export const createdocument = () =>{
    let data = {
        "shipping_doc_id": 0,
        "reference_no": "string",
        "doc_url": "string",
        "document_name": "string",
        "shipment_id": 0
      }
    return(dispatch)=>{
        dispatch({
            type: CREATING_DOCUMENT,
            payload: true
        })
        axios.post(config.apiUrl + `/shipment/createDocument`, data)
        .then(res=>{
            dispatch({
                type: CREATING_DOCUMENT,
                payload: false
            })
           
            console.log(res, 'i am the res')
        })
        .catch(err=>{
            dispatch({
                type: CREATING_DOCUMENT,
                payload: false
            })
            console.log(err, 'i am the err')
        })
    }
}

//Creating shipping to 
export const shippingto = (receiverName, receiverEmail, receiverPhone, receiverCompany, receiverCountry,
     receiverAddress1, receiverAddress2, receiverAddress3, postal_code, state, city ) =>{
    let data = {
        "shipping_to_id": 0,
        "receiver_name": receiverName,
        "receiver_company": receiverCompany,
        "receiver_country": receiverCountry,
        "shipment_id": 0,
        "receiver_address": receiverAddress1,
        "receiver_address_2": receiverAddress2,
        "receiver_address_3": receiverAddress3,
        "postal_code": postal_code,
        "state": state,
        "city": city,
        "email": receiverEmail,
        "phone_number": receiverPhone,
        "country_code": '+234',
        "taxt_no": "string"
    }
    return(dispatch)=>{
        dispatch({
            type: CREATING_SHIPPING_TO,
            payload: true
        })
        axios.post(config.apiUrl + `/shipment/createToInfo`, data)
        .then(res=>{
            dispatch({
                type: CREATING_SHIPPING_TO,
                payload: false
            })
            if(res.data.status){
                dispatch({
                    type: SHIPMENT_CREATED,
                    payload: 2
                })
            }
            console.log(res, 'i am the res')
        })
        .catch(err=>{
            dispatch({
                type: CREATING_SHIPPING_TO,
                payload: false
            })
            console.log(err, 'i am the err')
        })
    }
}


//Creating shipping from
export const shippingfrom = (senderName, senderCompany, senderCountry, senderAddress1, senderAddress2, senderAddress3, senderState, senderCity, senderEmail, senderPhone, senderVatNo) =>{
    let data = {
        "sender_name": senderName,
        "sender_company": senderCompany,
        "sender_country": senderCountry,
        "shipment_id": 0,
        "sender_address": senderAddress1,
        "sender_address_2": senderAddress2,
        "sender_address_3": senderAddress3,
        "postal_code": 0,
        "state": senderState,
        "city": senderCity,
        "email": senderEmail,
        "phone_number": senderPhone,
        "country_code": "+234",
        "taxt_no": "string",
        "vat_no": senderVatNo
    }
    return(dispatch)=>{
        dispatch({
            type: CREATING_SHIPPING_FROM,
            payload: true
        })
        axios.post(config.apiUrl + `/shipment/createFromInfo`, data)
        .then(res=>{
            dispatch({
                type: CREATING_SHIPPING_FROM,
                payload: false
            })
            if(res.data.status){
                dispatch({
                    type: SHIPMENT_CREATED,
                    payload: 3
                })
            }
            console.log(res, 'i am the res')
        })
        .catch(err=>{
            dispatch({
                type: CREATING_SHIPPING_FROM,
                payload: false
            })
            console.log(err, 'i am the err')
        })
    }
}
