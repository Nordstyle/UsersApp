import { FETCH_USER_DATA } from './constants';

export const fetchUserData = () => ({
  type: FETCH_USER_DATA,
  payload: {
    name: 'Anatoliy',
    surname: 'Zolotukhin',
    city: 'Novosibirsk',
    country: 'Russia',
    position: 'Front-end developer'
  }
});