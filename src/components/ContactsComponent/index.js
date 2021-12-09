import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import colors from '../../assets/theme/colors.js';
import Icon from '../common/Icon/index.js';
import Message from '../common/Message/index.js';
import styles from './styles.js';
import {CREATE_CONTACT, CONTACT_DETAIL} from '../../constants/routeNames.js';

const ContactsComponent = ({data, loading, sortBy}) => {
  const {navigate} = useNavigation();

  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 50}}>
        <Message info message="No contacts available" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    const {contact_picture, first_name, last_name, country_code, phone_number} =
      item;

    return (
      <TouchableOpacity
        onPress={() => {
          navigate(CONTACT_DETAIL, {item});
        }}
        style={styles.itemContainer}>
        <View style={styles.item}>
          {contact_picture ? (
            <Image
              style={{width: 45, height: 45, borderRadius: 100}}
              source={{uri: contact_picture}}
            />
          ) : (
            <View style={styles.profilePicture}>
              <Text style={[styles.name, {color: colors.white}]}>
                {first_name[0]}
              </Text>
              <Text style={[styles.name, {color: colors.white}]}>
                {last_name[0]}
              </Text>
            </View>
          )}

          <View style={{paddingLeft: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>{first_name} </Text>
              <Text style={styles.name}>{last_name}</Text>
            </View>
            <Text
              style={
                styles.phoneNumber
              }>{`${country_code} ${phone_number}`}</Text>
          </View>
        </View>
        <Icon type="ant" name="right" size={17} color={colors.grey} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={styles.container}>
        {loading ? (
          <View style={{paddingVertical: 100, paddingHorizontal: 50}}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        ) : (
          <View style={{paddingVertical: 10}}>
            <FlatList
              data={
                data
                  ? sortBy
                    ? data.sort((a, b) => {
                        if (sortBy === 'First name') {
                          if (b.first_name > a.first_name) {
                            return -1;
                          } else {
                            return 1;
                          }
                        }
                        if (sortBy === 'Last name') {
                          if (b.last_name > a.last_name) {
                            return -1;
                          } else {
                            return 1;
                          }
                        }
                      })
                    : data
                  : data
              }
              keyExtractor={item => String(item.id)}
              renderItem={renderItem}
              ListEmptyComponent={ListEmptyComponent}
              ListFooterComponent={<View style={{height: 150}}></View>}
              ItemSeparatorComponent={() => (
                <View
                  style={{height: 0.5, backgroundColor: colors.grey}}></View>
              )}
            />
          </View>
        )}
      </View>

      <TouchableOpacity
        style={styles.floatingActionButton}
        onPress={() => navigate(CREATE_CONTACT)}>
        <Icon name="plus" size={21} color={colors.white} />
      </TouchableOpacity>
    </>
  );
};

export default ContactsComponent;
