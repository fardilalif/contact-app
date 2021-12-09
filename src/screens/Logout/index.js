import React, {useContext, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import logoutAction from '../../context/actions/auth/logoutAction.js';
import {GlobalContext} from '../../context/Provider.js';

const Logout = () => {
  console.log('Render logout screen');
  const {authDispatcher} = useContext(GlobalContext);

  useEffect(() => {
    logoutAction()(authDispatcher);
  }, []);

  return <ActivityIndicator />;
};

export default Logout;
