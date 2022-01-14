let url = '';

if (process.env.NODE_ENV === 'production') {
  url = 'https://tranquil-shore-53426.herokuapp.com/';
} else {
  url = 'http://localhost:3001/';
}

export const API_ID = url;
export const API_LOGIN = 'sessions';
export const API_REGISTER = 'registrations';
export const API_HOUSE = 'houses';
export const API_FAVOURITE = 'favourites';
