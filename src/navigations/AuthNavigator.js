import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN, REGISTER} from '../constants/routeNames.js';
import Login from '../screens/Login/index.js';
import Register from '../screens/Register/index.js';

const AuthNavigator = () => {
  // return an object with two properties: Navigator and Screen
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator
      initialRouteName={LOGIN}
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
      <AuthStack.Screen name={REGISTER} component={Register}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
