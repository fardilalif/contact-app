import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  CREATE_CONTACT,
  LOGOUT,
  SETTINGS,
} from '../constants/routeNames.js';
import ContactDetail from '../screens/ContactDetail/index.js';
import Contacts from '../screens/Contacts/index.js';
import CreateContact from '../screens/CreateContact/index.js';
import Settings from '../screens/Settings/index.js';
import Logout from '../screens/Logout/index.js';

const HomeNavigator = () => {
  // return an object with two properties: Navigator and Screen
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen
        name={CONTACT_LIST}
        component={Contacts}></HomeStack.Screen>
      <HomeStack.Screen
        name={CONTACT_DETAIL}
        component={ContactDetail}></HomeStack.Screen>
      <HomeStack.Screen
        name={CREATE_CONTACT}
        component={CreateContact}></HomeStack.Screen>
      <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
      <HomeStack.Screen name={LOGOUT} component={Logout}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
