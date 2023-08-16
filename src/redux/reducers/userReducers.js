import {
  USER_REGISTER,
  USER_LOGIN,
  USER_LOGOUT,
  // USER_INFO,
} from "../actionsType/userType";

const token = localStorage.getItem("accessToken");

const initialState = token
  ? {
      isLogged: true,
      data: [],
      error: null,
    }
  : {
      isLogged: false,
      data: [],
      error: null,
    };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return {
        registerData: action.payload,
      };
    case USER_LOGIN:
      return {
        ...state,
        isLogged: true,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
};

export default userReducer;
