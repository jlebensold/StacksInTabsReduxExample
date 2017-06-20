import * as types from '../actions/types';

const initialState = {
  name: null,
  photo: null,
  tinted: false,
  coordinate: { latitude: null, longitude: null },
};

const draftPostReducer = {
  draftPost: (state = initialState, action) => {
    switch (action.type) {
      case types.SET_DRAFT_POST_PARAMS:
        return Object.assign({}, state, action.params);
      default:
        return state;
    }
  },
};

export default draftPostReducer;
