import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import AuthNavigator from './AuthNavigator.js';
import DrawerNavigator from './DrawerNavigator.js';
import {GlobalContext} from '../context/Provider.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator, Text, View} from 'react-native';
import {SET_ISLOGGEDIN} from '../constants/actionTypes/index.js';
import {navigationRef} from './SideMenu/RootNavigation.js';
import SplashScreen from 'react-native-splash-screen';
import colors from '../assets/theme/colors.js';

const AppNavContainer = () => {
  const {
    authState: {isLoggedIn},
    authDispatcher,
  } = useContext(GlobalContext);
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = useState(false);

  const getUser = async () => {
    const user = await AsyncStorage.getItem('user');
    if (user) {
      setAuthLoaded(true);
      setIsAuthenticated(true);
      authDispatcher({
        type: SET_ISLOGGEDIN,
      });
    } else {
      setAuthLoaded(true);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    getUser();
  }, [isLoggedIn]);

  useEffect(() => {
    if (authLoaded) {
      SplashScreen.hide();
    }
  }, [authLoaded]);

  return (
    <>
      {authLoaded ? (
        <NavigationContainer ref={navigationRef}>
          {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      ) : (
        <ActivityIndicator color={colors.primary} />
      )}
    </>
  );
};

export default AppNavContainer;
