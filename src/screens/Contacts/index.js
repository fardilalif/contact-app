import React, {useContext, useEffect, useState, useRef} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '../../components/common/Icon/index.js';
import ContactsComponent from '../../components/ContactsComponent/index.js';
import getContact from '../../context/actions/contacts/getContacts.js';
import {GlobalContext} from '../../context/Provider.js';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CONTACT_DETAIL, SETTINGS} from '../../constants/routeNames.js';
import {navigate} from '../../navigations/SideMenu/RootNavigation.js';

const Contacts = ({navigation, route}) => {
  const {setOptions, toggleDrawer} = navigation;
  const {params: {item} = {}} = route;
  const {
    contactsDispatcher,
    contactsState: {
      getContacts: {data, loading},
    },
  } = useContext(GlobalContext);
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={toggleDrawer}>
          <Icon type="material" name="menu" size={21} style={{padding: 10}} />
        </TouchableOpacity>
      ),
    });
    getContact()(contactsDispatcher);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getSettings();
    }, []),
  );

  useEffect(() => {
    if (item) {
      console.log(`item that is params`, item);
      navigate(CONTACT_DETAIL, {item: item});
    }
  }, [item]);

  const getSettings = async () => {
    const sortPref = await AsyncStorage.getItem('sortBy');
    if (sortPref) {
      setSortBy(sortPref);
    }
  };

  return <ContactsComponent data={data} loading={loading} sortBy={sortBy} />;
};

export default Contacts;
