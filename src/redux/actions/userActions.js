import { axiosWithAuth } from "../../utils/axiosWithAuth";
// Logs in the user
// Saves Authorization token to localStorage
// Sends user to dashboard
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post("/api/login/", credentials)
    .then(res => {
      console.log(res.data)
      localStorage.setItem("Token", res.data.key);
      
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });

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
    .post("/api/registration/", credentials)
    .then(res => {
      // localStorage.setItem("token", res.data.token);
      // localStorage.setItem("userID", res.data.user_id);
      dispatch({ type: REGISTER_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err.response });
    });
};