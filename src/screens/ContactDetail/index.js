import React, {useContext, useEffect, useRef, useState} from 'react';
import ContactDetailComponent from '../../components/ContactDetailComponent/index.js';
import {useRoute} from '@react-navigation/native';
import {
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '../../components/common/Icon/index.js';
import colors from '../../assets/theme/colors.js';
import {GlobalContext} from '../../context/Provider.js';
import deleteContact from '../../context/actions/contacts/deleteContact.js';
import {navigate} from '../../navigations/SideMenu/RootNavigation.js';
import {CONTACT_LIST} from '../../constants/routeNames.js';
import UploadImage from '../../helpers/UploadImage.js';
import editContact from '../../context/actions/contacts/editContact.js';

const ContactDetail = ({navigation}) => {
  console.log('Render contact detail ');
  const route = useRoute();
  const {setOptions} = navigation;
  const {params: {item = {}} = {}} = route;
  const {
    contactsState: {
      deleteContact: {loading},
    },
    contactsDispatcher,
  } = useContext(GlobalContext);
  const sheetRef = useRef(null);
  const [localFile, setLocalFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSucceeded, setUploadSucceeded] = useState(false);

  console.log(`item`, item);

  useEffect(() => {
    setOptions({
      title: item.first_name + ' ' + item.last_name,
      headerRight: () => {
        return (
          <View style={{flexDirection: 'row', paddingRight: 10}}>
            <TouchableOpacity onPress={() => {}}>
              <Icon
                name={item.is_favorite ? 'star' : 'star-border'}
                type="material"
                size={21}
                color={colors.grey}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  'Delete contact',
                  'Are your sure to delete ' + item.first_name + ' ? ',
                  [
                    {text: 'Cancel', onPress: () => {}},
                    {
                      text: 'Delete',
                      onPress: () => {
                        deleteContact(item.id)(contactsDispatcher)(() => {
                          navigate(CONTACT_LIST);
                        });
                      },
                    },
                  ],
                );
              }}>
              {loading ? (
                <ActivityIndicator color={colors.primary} size="small" />
              ) : (
                <Icon
                  name="delete"
                  type="material"
                  size={21}
                  color={colors.grey}
                />
              )}
            </TouchableOpacity>
          </View>
        );
      },
    });
  }, [item, loading]);

  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };

  const onFileSelected = image => {
    closeSheet();
    setLocalFile(image);
    setIsUploading(true);

    UploadImage(image)(url => {
      const {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        is_favorite: isFavorite,
        country_code: phoneCode,
      } = item;
      setIsUploading(false);
      editContact(
        {
          firstName,
          lastName,
          phoneNumber,
          isFavorite,
          phoneCode,
          contactPicture: url,
        },
        item.id,
      )(contactsDispatcher)(() => {
        setIsUploading(false);
        setUploadSucceeded(true);
      });
    })(error => {
      console.log('Error uploading image in contact detail');
      setIsUploading(false);
    });
  };

  return (
    <ContactDetailComponent
      contact={item}
      sheetRef={sheetRef}
      onFileSelected={onFileSelected}
      openSheet={openSheet}
      localFile={localFile}
      isUploading={isUploading}
      uploadSucceeded={uploadSucceeded}
    />
  );
};

export default ContactDetail;
