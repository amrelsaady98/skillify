import {AUTH_LOGIN, AUTH_LOGOUT} from "../actions/authActions";

const initialState = {
  userItem: "",
  isLoggedIn: false,
  isAdmin: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      console.log(action.payload)
      return {
        ...state,
        userItem: action.payload,
        isLoggedIn: true,
        isAdmin: action.payload.user.email === 'admin@admin.com',
      };
    case AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;