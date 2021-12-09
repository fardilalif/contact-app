import {
  CREATE_CONTACT_FAIL,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
  EDIT_CONTACT_FAIL,
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_SUCCESS,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from '../../constants/actionTypes/index.js';

const contacts = (state, {type, payload}) => {
  switch (type) {
    case CREATE_CONTACT_LOADING: {
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: true,
        },
      };
    }
    case CREATE_CONTACT_SUCCESS: {
      console.log(`payload`, payload);
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: false,
          data: payload,
          error: null,
        },
        getContacts: {
          ...state.getContacts,
          loading: false,
          data: [payload, ...state.getContacts.data],
        },
      };
    }

    case CREATE_CONTACT_FAIL: {
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: false,
          error: payload,
        },
      };
    }

    case GET_CONTACTS_LOADING:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: true,
        },
      };

    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          data: payload,
          loading: false,
          error: null,
        },
      };

    case GET_CONTACTS_FAIL:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          data: null,
          loading: false,
          error: payload,
        },
      };

    case DELETE_CONTACT_LOADING:
      return {
        ...state,
        deleteContact: {
          ...state.deleteContact,
          loading: true,
        },
      };

    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        deleteContact: {
          ...state.deleteContact,
          loading: false,
          error: null,
        },
        getContacts: {
          ...state.getContacts,
          loading: false,
          error: null,
          data: state.getContacts.data.filter(item => item.id !== payload),
        },
      };

    case DELETE_CONTACT_FAIL:
      return {
        ...state,
        deleteContact: {
          ...state.deleteContact,
          loading: false,
          error: payload,
        },
      };

    case EDIT_CONTACT_LOADING:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: true,
          error: null,
        },
      };

    case EDIT_CONTACT_SUCCESS:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: false,
          error: null,
        },
        getContacts: {
          ...state.getContacts,
          loading: false,
          error: null,
          data: state.getContacts.data.map(item => {
            if (item.id === payload.id) {
              return payload;
            } else {
              return item;
            }
          }),
        },
      };

    case EDIT_CONTACT_FAIL:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default contacts;
