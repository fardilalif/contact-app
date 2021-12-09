import {
  CREATE_CONTACT_FAIL,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
} from '../../../constants/actionTypes/index.js';
import axiosInstance from '../../../helpers/axiosInstance.js';

export default form => contactDispatcher => onSuccess => {
  const requestPayload = {
    country_code: form.phoneCode || '',
    first_name: form.firstName || '',
    last_name: form.lastName || '',
    phone_number: form.phoneNumber || '',
    contact_picture: form.contactPicture || undefined,
    is_favorite: form.isFavorite || false,
  };

  contactDispatcher({
    type: CREATE_CONTACT_LOADING,
  });

  axiosInstance
    .post('/contacts/', requestPayload)
    .then(response => {
      console.log(`Create contact response`, response.data);
      contactDispatcher({
        type: CREATE_CONTACT_SUCCESS,
        payload: response.data,
      });
      onSuccess(response.data);
    })
    .catch(error => {
      console.log(`Create contact error`, error.response);
      return contactDispatcher({
        type: CREATE_CONTACT_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'Something went wrong, try again'},
      });
    });
};
