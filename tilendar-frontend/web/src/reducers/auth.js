import { actionTypes } from '../actions/auth';

const initialState = {
  currentUser: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.userData,
      }
    default:
      return state;
  }
};
