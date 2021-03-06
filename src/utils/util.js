import axios from 'axios';
import {
  API_ID, API_FAVOURITE, API_HOUSE, API_LOGIN, API_REGISTER,
} from '../api/railshouse';

export const handleFavoriteClick = (usr, houseId) => {
  axios.post(`${API_ID}${API_FAVOURITE}`, {
    house_id: houseId,
  }, {
    headers: {
      Authorization: usr,
    },
  },
  { withCredentials: true });
};

export const fetchFavourite = token => axios.get(`${API_ID}${API_FAVOURITE}`, {
  headers: {
    Authorization: token,
  },
});

export const fetchHouseDetail = id => axios.get(`${API_ID}${API_HOUSE}/${id}`);

export const fetchHouse = (house, favs) => axios.get(`${API_ID}${API_HOUSE}`, {
  house,
  favs,
});

export const handleLogin = (email, password) => axios.post(`${API_ID}${API_LOGIN}`, {
  email,
  password,
});

export const handleRegister = (username, email, password, passwordConfirmation) => axios.post(`${API_ID}${API_REGISTER}`, {
  username,
  email,
  password,
  password_confirmation: passwordConfirmation,
});
