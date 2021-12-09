import {
  CLEAR_AUTH_STATE,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../../constants/actionTypes/index.js';
import axiosInstance from '../../../helpers/axiosInstance.js';

export const clearAuthState = () => authDispatcher => {
  authDispatcher({
    type: CLEAR_AUTH_STATE,
  });
};

export default ({
    firstName: first_name,
    lastName: last_name,
    userName: username,
    email,
    password,
  }) =>
  authDispatcher =>
  onSuccess => {
    authDispatcher({
      type: REGISTER_LOADING,
    });

    axiosInstance
      .post('/auth/register', {
        first_name,
        last_name,
        username,
        email,
        password,
      })
      .then(response => {
        console.log(`Register response`, response.data);
        authDispatcher({
          type: REGISTER_SUCCESS,
          payload: response.data,
        });
        onSuccess(response.data);
      })
      .catch(error => {
        console.log(`Register error`, error.response.data);
        authDispatcher({
          type: REGISTER_FAIL,
          payload: error.response
            ? error.response.data
            : {error: 'Something went wrong'},
        });
      });
  };
