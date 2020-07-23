import { ALL_COUNTRIES, ALL_STATES, ALL_CITIES } from "./types";
import axios from "axios";
import config from "./config";


export const getCountries = () => {
    return (dispatch) => {
      axios
        .get(config.apiUrl + `/country`)
        .then((res) => {
          dispatch({
            type: ALL_COUNTRIES,
            payload: res.data.countries,
          });
        })
        .catch((err) => {
        });
    };
  };
  