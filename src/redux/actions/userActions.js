import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from 'axios';
// Logs in the user
// Saves Authorization token to localStorage
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const login = credentials => dispatch => {
  console.log(credentials)
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://calm-reaches-19822.herokuapp.com/api/login/", credentials)
    .then(res => {
      localStorage.setItem("Token", res.data.key);
      
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });

    })
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err.reponse }));
};

// Registers the user
// Saves authorization token to localStorage
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const register = credentials => dispatch => {
  dispatch({ type: REGISTER_START });
 return axios
    .post("https://calm-reaches-19822.herokuapp.com/api/registration/", credentials)
    .then(res => {
     
      dispatch({ type: REGISTER_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err.response });
    });
};


export const INITIATE_START = "INITIATE_START";
export const INITIATE_SUCCESS = "INITIATE_SUCCESS";
export const INITIATE_FAILURE = "INITIATE_FAILURE";
export const initiate = () => dispatch => {
  dispatch({ type: INITIATE_START });
 return axiosWithAuth()
    .get("/api/adv/init/")
    .then(res => {
      dispatch({ type: INITIATE_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: INITIATE_FAILURE, payload: err.response });
    });
};


export const MOVE_START = "MOVE_START";
export const MOVE_SUCCESS = "MOVE_SUCCESS";
export const MOVE_FAILURE = "MOVE_FAILURE";
export const move = (direction) => dispatch => {
  dispatch({ type: MOVE_START });
 return axiosWithAuth()
    .post("/api/adv/move/",direction)
    .then(res => {
      dispatch({ type: MOVE_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: MOVE_FAILURE, payload: err.response });
    });
};