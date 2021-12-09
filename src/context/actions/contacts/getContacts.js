import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from '../../../constants/actionTypes/index.js';
import axiosInstance from '../../../helpers/axiosInstance.js';
export default () => contactsDispatcher => {
  contactsDispatcher({
    type: GET_CONTACTS_LOADING,
  });

  axiosInstance
    .get('/contacts/')
    .then(response => {
      contactsDispatcher({
        type: GET_CONTACTS_SUCCESS,
        payload: response.data,
      });
    })
    .catch(error => {
      console.log(`error.response`, error.response);
      contactsDispatcher({
        type: GET_CONTACTS_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'Something went wrong, try again'},
      });
    });
};
