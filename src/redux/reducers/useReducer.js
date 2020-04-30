import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
 
} from "../actions";

const initialState = {
  loading: false,
  error: null,
  message: "",
  success:false,
  navButton:""
};

export const useReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      console.log("from reducer", action.payload);
      return {
        ...state,
        loading: false,
        success:true,
        navButton:"LOGOUT"
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        err: action.payload,
        load: false,
      };
    case REGISTER_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        success:true
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
