import { axiosWithAuth } from "../../utils/axiosWithAuth";

// Grabs User's Profile which returns their object of information
// Passes User's object as payload
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const fetchProfile = () => dispatch => {
  dispatch({ type: FETCH_START });
  const userId = localStorage.getItem("userId");
  axiosWithAuth()
    .get(`/api/user/${userId}/listings`)
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

// Logs in the user
// Saves Authorization token to localStorage
// Sends user to dashboard
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post("/api/auth/login", credentials)
    .then(res => {
      console.log(res.data)
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.user_id);
      localStorage.setItem("message", res.data.message);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.message });
      // history.push({ pathname: '/dashBoard' })
    })
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err.reponse }));
};

// Registers the user
// Saves authorization token to localStorage
// Sends users to dashboard
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const register = credentials => dispatch => {
  dispatch({ type: REGISTER_START });
 return axiosWithAuth()
    .post("/api/auth/register", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.user_id);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data.message });
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err.response.data.detail });
    });
};