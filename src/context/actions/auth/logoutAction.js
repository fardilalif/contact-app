import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGOUT_USER} from '../../../constants/actionTypes/index.js';

export default () => authDispatcher => {
  console.log('Logout user');
  AsyncStorage.removeItem('token');
  AsyncStorage.removeItem('user');

  authDispatcher({
    type: LOGOUT_USER,
  });
};
