import {
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
} from '../../../constants/actionTypes/index.js';
import axiosInstance from '../../../helpers/axiosInstance.js';

export default id => contactDispatcher => onSuccess => {
  contactDispatcher({
    type: DELETE_CONTACT_LOADING,
  });

  axiosInstance
    .delete(`/contacts/${id}`)
    .then(() => {
      contactDispatcher({
        type: DELETE_CONTACT_SUCCESS,
        payload: id,
      });
      onSuccess();
    })
    .catch(error => {
      contactDispatcher({
        type: DELETE_CONTACT_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'Something went wrong, try again'},
      });
    });
};
