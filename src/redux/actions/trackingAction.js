import {TRACKED_PRODUCT, TRACKING_PRODUCT, CREATING_TRACK,TRACKING_ERROR} from './types'
import axios from "axios";
import config from './config'

//Track product
export const trackProducts = (trackingNo) =>{
    return(dispatch)=>{
        dispatch({
            type: TRACKING_PRODUCT,
            payload: true
        })
        axios.get(config.apiUrl + `/shipment/trackinginfo?tracking_no=${trackingNo}`)
        .then(res=>{
            dispatch({
                type: TRACKING_PRODUCT,
                payload: false
            })
            if(res.data.tracking !==null){
                dispatch({
                    type: TRACKED_PRODUCT,
                    payload: res.data.tracking
                })
            }else{
                dispatch({
                    type: TRACKING_ERROR,
                    payload: '*No information for this tracking number'
                })
            }
           
            console.log(res.data.tracking, 'i am the res')
        })
        .catch(err=>{
            dispatch({
                type: TRACKING_PRODUCT,
                payload: false
            })
            console.log(err, 'i am the err')
        })
    }
}

//Create tracking
export const createTrack = () =>{
    let data ={
        "tracking_id": 0,
        "tracking_no": "string",
        "tracking_description": "string",
        "location": "string",
        "timestamps": "Unknown Type: date",
        "quantity": 0,
        "shipment_id": 0,
        "shipping_to_id": 0,
        "shipping_from_id": 0
      }
    return(dispatch)=>{
        dispatch({
            type: CREATING_TRACK,
            payload: true
        })
        axios.post(config.apiUrl + `/shipment/createTracking`, data)
        .then(res=>{
            dispatch({
                type: CREATING_TRACK,
                payload: false
            })
          
            console.log(res.data, 'i am the res')
        })
        .catch(err=>{
            dispatch({
                type: CREATING_TRACK,
                payload: false
            })
            console.log(err, 'i am the err')
        })
    }
}
