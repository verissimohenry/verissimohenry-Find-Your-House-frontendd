let url = '';

if (process.env.NODE_ENV === 'production') {
    url = 'https://tranquil-tundra-99565.herokuapp.com/';
} else {
    url = 'http://localhost:3001/';
}

export const API_ID = 'https://tranquil-tundra-99565.herokuapp.com/';
export const API_LOGIN = 'sessions';
export const API_REGISTER = 'registrations';
export const API_HOUSE = 'houses';
export const API_FAVOURITE = 'favourites';
