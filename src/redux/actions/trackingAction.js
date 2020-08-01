import {
  TRACKED_PRODUCT,
  TRACKING_PRODUCT,
  CREATING_TRACK,
  TRACKING_ERROR,
  UPDATE_TRACKER_FAIL,
  CALCULATING_COST,
  CALCULATING_COST_ERROR,
  CALCULATED_PRICE,
  UPDATING_TRACKING,
  UPDATE_TRACKER_SUCCESS,
  TRACKING_INFO,
} from "./types";
import axios from "axios";
import config from "./config";
import qs from "qs";

//Register Customer

const apiconfig = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

//Track product
export const trackProducts = (trackingNo) => {
  return (dispatch) => {
    dispatch({
      type: TRACKING_PRODUCT,
      payload: true,
    });
    axios
      .get(config.apiUrl + `/shipment/trackinginfo?tracking_no=${trackingNo}`)
      .then((res) => {
        dispatch({
          type: TRACKING_PRODUCT,
          payload: false,
        });
        if (res.data.tracking !== null) {
          dispatch({
            type: TRACKED_PRODUCT,
            payload: res.data.tracking,
          });
        } else {
          dispatch({
            type: TRACKING_ERROR,
            payload: "*No information for this tracking number",
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: TRACKING_PRODUCT,
          payload: false,
        });
        dispatch({
          type: TRACKING_ERROR,
          payload: err.response.data.error.message,
        });
      });
  };
};

//Create tracking
export const createTrack = (
  shippingId,
  shippingTo,
  shippingFrom,
  timestamp
) => {
  let data = {
    tracking_id: 0,
    tracking_no: "string",
    tracking_description: "string",
    location: "string",
    timestamps: timestamp,
    quantity: 0,
    shipment_id: shippingId,
    shipping_to_id: shippingTo,
    shipping_from_id: shippingFrom,
  };
  return (dispatch) => {
    dispatch({
      type: CREATING_TRACK,
      payload: true,
    });
    axios
      .post(config.apiUrl + `/shipment/createTracking`, data)
      .then((res) => {
        dispatch({
          type: CREATING_TRACK,
          payload: false,
        });
        dispatch({
          type: TRACKING_INFO,
          payload: res.data.tracking,
        });
        localStorage.removeItem("shipmentInfo");
        localStorage.removeItem("shipmentToInfo");
      })
      .catch((err) => {
        dispatch({
          type: CREATING_TRACK,
          payload: false,
        });
      });
  };
};

//Calculate Tracking Cost
export const calculatePackageCost = (height, width, depth, weight) => {
  let data = {
    height: height,
    width: width,
    depth: depth,
    weight: weight,
  };

  return (dispatch) => {
    if (height == 0 || width == 0 || depth == 0 || weight == 0) {
      dispatch({
        type: CALCULATING_COST_ERROR,
        payload: "Please fill out all fields",
      });
    } else {
      dispatch({
        type: CALCULATING_COST,
        payload: true,
      });
      axios
        .post(config.apiUrl + `/calculatePrice`, qs.stringify(data), apiconfig)
        .then((res) => {
          dispatch({
            type: CALCULATING_COST,
            payload: false,
          });
          dispatch({
            type: CALCULATED_PRICE,
            payload: res.data.calculatedPrice,
          });
        })
        .catch((err) => {
          dispatch({
            type: CALCULATING_COST_ERROR,
            payload: err.response.data.error.message,
          });
          dispatch({
            type: CALCULATING_COST,
            payload: false,
          });
        });
    }
  };
};

//Update tracking info
export const updateTracking = (trackingNo, trackingDescription, location) => {
  var date = new Date();
  var timestamp = date.getTime();
  return (dispatch) => {
    if (trackingNo == "" || location == "") {
      dispatch({
        type: UPDATE_TRACKER_FAIL,
        payload: "*Please fill out all fields",
      });
    } else {
      dispatch({
        type: UPDATING_TRACKING,
        payload: true,
      });
      axios
        .get(config.apiUrl + `/shipment/trackinginfo?tracking_no=${trackingNo}`)
        .then((res) => {
          console.log(res, ' ia m the res')
          console.log(res.data.tracking.location, 'i am the location')
          let ourlocation = JSON.parse(res.data.tracking.location);
          console.log(res.data.tracking.location, ourlocation, 'i am the location')
          let data = {
            tracking_id: res.data.tracking.tracking_id,
            tracking_no: trackingNo,
            tracking_description: trackingDescription,
            location:
            ourlocation.length == 0
                ? JSON.stringify([{ name: location, longitude: "", latitude: "" }])
                : JSON.stringify(ourlocation.push({
                    name: location,
                    longitude: "",
                    latitude: "",
                  })),
            timestamps: timestamp,
            quantity: res.data.tracking.quantity,
            shipment_id: res.data.tracking.shipment_id,
            shipping_to_id: res.data.tracking.shipping_to_id,
            shipping_from_id: res.data.tracking.shipping_from_id,
          };
          console.log(data, 'i am the data')
          axios
            .put(config.apiUrl + `/shipment/updateTracking`, data)
            .then((res) => {
              dispatch({
                type: UPDATING_TRACKING,
                payload: false,
              });
              dispatch({
                type: UPDATE_TRACKER_SUCCESS,
                payload: res.data,
              });
            })
            .catch((err) => {
              dispatch({
                type: UPDATING_TRACKING,
                payload: false,
              });
              dispatch({
                type: UPDATE_TRACKER_FAIL,
                payload: err.response.data.error.message,
              });
            });
        })
        .catch((err) => {});
    }
  };
};
