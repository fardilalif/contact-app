import React, {useContext, useEffect, useState} from 'react';
import {GlobalContext} from '../../context/Provider.js';
import loginAction, {
  clearLoginState,
} from '../../context/actions/auth/loginAction.js';
import {useRoute, useFocusEffect} from '@react-navigation/native';
import LoginComponent from '../../components/LoginComponent/index.js';

const Login = () => {
  const [form, setForm] = useState({});
  const {
    authDispatcher,
    authState: {data, loading, error},
  } = useContext(GlobalContext);
  const {params} = useRoute();
  const [justSignedUp, setJustSignedUp] = useState(false);

  useEffect(() => {
    if (params?.data) {
      setForm({...form, userName: params.data.username});
      setJustSignedUp(true);
    }
  }, [params]);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    setJustSignedUp(false);
  };

  const onSubmit = () => {
    if (form.userName && form.password) {
      loginAction(form, authDispatcher);
    }
  };

  return (
    <LoginComponent
      error={error}
      loading={loading}
      form={form}
      justSignedUp={justSignedUp}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default Login;
