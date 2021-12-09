import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../../../constants/actionTypes/index.js';
import axiosInstance from '../../../helpers/axiosInstance.js';

const saveToLocal = async (key, data) => {
  if (key === 'token') {
    try {
      await AsyncStorage.setItem(key, data.token);
    } catch (e) {
      console.log(`e`, e);
    }
  } else {
    try {
      const jsonValue = JSON.stringify(data.user);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.log(`e`, e);
    }
  }
};

export default ({userName: username, password}, authDispatch) => {
  authDispatch({
    type: LOGIN_LOADING,
  });

  axiosInstance
    .post('/auth/login', {username, password})
    .then(response => {
      console.log(`response.data`, response.data);
      authDispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
      saveToLocal('token', response.data);
      saveToLocal('user', response.data);
    })
    .catch(error => {
      console.log(`error`, error);
      authDispatch({
        type: LOGIN_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'Something went wrong'},
      });
    });
};
