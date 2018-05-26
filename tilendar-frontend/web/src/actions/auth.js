const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const actionTypes = {
  SET_CURRENT_USER,
}

const setCurrentUser = (userData) => ({
    type: 'SET_CURRENT_USER',
    userData
});

export const actionCreators = {
  setCurrentUser,
};
