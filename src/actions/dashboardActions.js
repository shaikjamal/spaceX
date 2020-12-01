/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import * as API_END_POINTS from '../constants/api';
import * as types from '../constants/actionTypes';

// Action function for get user transaction function
export const getAddress = (offset) => {
  return dispatch => {
    axios.get(`${API_END_POINTS.SPACEX_ADDRESS}?limit=10&offset=${offset}`)
      .then(response => {
        if (response && response.data) {
          dispatch({
            type: types.SPACEX_ADDRESS,
            addressData: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);

        // Handle Failed Request
      });
  };
};

// Action function for get user transaction function
export const getHistory = (offset) => {
  return dispatch => {
    axios.get(`${API_END_POINTS.SPACEX_HISTORY}?limit=5&offset=${offset}`)
      .then(response => {
        if (response && response.data) {
          dispatch({
            type: types.SPACEX_HISTORY,
            historyData: response.data,
          });
        }
      })
      .catch(error => {
        // Handle Failed Request
        console.log(error);
      });
  };
};

