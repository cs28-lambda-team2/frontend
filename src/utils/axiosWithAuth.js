import axios from 'axios';

export const axiosWithAuth = () => {
  const Token = localStorage.getItem('Token');
  // return an instance of axios
  return axios.create({
    baseURL: 'https://calm-reaches-19822.herokuapp.com',
    headers: {
      Authorization: Token
    }
  });
};