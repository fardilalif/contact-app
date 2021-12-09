import React, {useContext, useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeNames.js';
import registerAction, {
  clearAuthState,
} from '../../context/actions/auth/registerAction.js';
import {GlobalContext} from '../../context/Provider.js';
import RegisterComponent from '../../components/RegisterComponent/index.js';

const Register = ({navigation}) => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {navigate} = navigation;
  const {
    authDispatcher,
    authState: {error, data, loading},
  } = useContext(GlobalContext);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (name === 'password') {
      if (value.length < 8) {
        setErrors(prev => {
          return {...prev, [name]: 'Min 8 characters'};
        });
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      if (value !== '') {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      } else {
        setErrors(prev => {
          return {...prev, [name]: 'This field is required'};
        });
      }
    }
  };

  const onSubmit = () => {
    if (!form.firstName) {
      setErrors(prevErrors => {
        return {...prevErrors, firstName: 'Please add a first name'};
      });
    }
    if (!form.lastName) {
      setErrors(prevErrors => {
        return {...prevErrors, lastName: 'Please add a last name'};
      });
    }
    if (!form.userName) {
      setErrors(prevErrors => {
        return {...prevErrors, userName: 'Please add a username'};
      });
    }
    if (!form.email) {
      setErrors(prevErrors => {
        return {...prevErrors, email: 'Please add an email'};
      });
    }
    if (!form.password) {
      setErrors(prevErrors => {
        return {...prevErrors, password: 'Please add a password'};
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      registerAction(form)(authDispatcher)(response => {
        navigate(LOGIN, {data: response});
        // if (data || error) {
        //   clearAuthState()(authDispatcher);
        // }
      });
    }
  };

  return (
    <RegisterComponent
      errors={errors}
      error={error}
      loading={loading}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default Register;
