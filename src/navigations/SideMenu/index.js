import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Container from '../../components/common/Container/index.js';
import {SETTINGS} from '../../constants/routeNames.js';
import logoutAction from '../../context/actions/auth/logoutAction.js';
import styles from './styles.js';
import Icon from '../../components/common/Icon';

const SideMenu = ({navigation, authDispatcher}) => {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout', 'You sure want to logout?', [
      {text: 'Cancel', onPress: () => {}},
      {
        text: 'Confirm',
        onPress: () => {
          console.log('Logout button clicked');
          logoutAction()(authDispatcher);
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Icon type="fontisto" size={17} name="player-settings" />,
      name: 'Settings',
      onPress: () => navigation.navigate(SETTINGS),
    },
    {
      icon: <Icon type="material" size={17} name="logout" />,
      name: 'Logout',
      onPress: handleLogout,
    },
  ];

  return (
    <SafeAreaView>
      <Container>
        <Image
          width={70}
          height={70}
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
        />

        <View style={{alignItems: 'center'}}>
          {menuItems.map(({icon, name, onPress}) => (
            <TouchableOpacity key={name} onPress={onPress} style={styles.item}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
