import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HOME_NAVIGATOR} from '../constants/routeNames.js';
import HomeNavigator from './HomeNavigator.js';
import SideMenu from './SideMenu/index.js';
import {GlobalContext} from '../context/Provider.js';

const DrawerNavigator = () => {
  // return an object with two properties: Navigator and Screen
  const Drawer = createDrawerNavigator();
  const {authDispatcher} = useContext(GlobalContext);

  const getDrawerContent = (navigation, authDispatcher) => {
    return <SideMenu navigation={navigation} authDispatcher={authDispatcher} />;
  };

  return (
    <Drawer.Navigator
      screenOptions={{drawerType: 'slide', headerShown: false}}
      drawerContent={({navigation}) =>
        getDrawerContent(navigation, authDispatcher)
      }>
      <Drawer.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
