/* eslint-disable no-param-reassign */
/* eslint-disable default-case */

import produce from 'immer';
import * as types from '../constants/actionTypes';
/* eslint-disable */

export const initialState = {
    historyData: '',
    addressData: {},
  
};

const spacexReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.SPACEX_ADDRESS:
        draft.addressData = action.addressData
        break;
  
        case types.SPACEX_HISTORY:
        draft.historyData = action.historyData
        break;

    }
  });

export default spacexReducer;
