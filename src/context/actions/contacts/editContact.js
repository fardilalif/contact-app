import {
  EDIT_CONTACT_FAIL,
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_SUCCESS,
} from '../../../constants/actionTypes/index.js';
import axiosInstance from '../../../helpers/axiosInstance.js';

export default (form, id) => contactDispatcher => onSuccess => {
  const requestPayload = {
    country_code: form.phoneCode || '',
    first_name: form.firstName || '',
    last_name: form.lastName || '',
    phone_number: form.phoneNumber || '',
    contact_picture: form.contactPicture || undefined,
    is_favorite: form.isFavorite || false,
  };

  contactDispatcher({
    type: EDIT_CONTACT_LOADING,
  });

  axiosInstance
    .put(`/contacts/${id}`, requestPayload)
    .then(response => {
      console.log(`Edit contact response`, response.data);
      contactDispatcher({
        type: EDIT_CONTACT_SUCCESS,
        payload: response.data,
      });
      onSuccess(response.data);
    })
    .catch(error => {
      console.log(`Edit contact error`, error.response.data);
      return contactDispatcher({
        type: EDIT_CONTACT_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'Something went wrong, try again'},
      });
    });
};
