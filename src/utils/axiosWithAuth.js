import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  const users_id= localStorage.getItem('userID')
  // return an instance of axios
  return axios.create({
    baseURL: 'https://airbnb-optimal-price-2.herokuapp.com',
    headers: {
      Authorization: token, users_id
    }
  });
};