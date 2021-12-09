import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import ImageComponent from './ImageComponent.js';
import styles from './styles.js';
import Icon from '../common/Icon/index.js';
import colors from '../../assets/theme/colors.js';
import CustomButton from '../common/CustomButton/index.js';
import {useNavigation} from '@react-navigation/native';
import {CREATE_CONTACT} from '../../constants/routeNames.js';
import {DEFAULT_IMAGE_URI} from '../../constants/general.js';
import ImagePicker from '../common/ImagePicker/index.js';

const ContactDetailComponent = ({
  contact,
  localFile,
  sheetRef,
  onFileSelected,
  openSheet,
  isUploading,
  uploadSucceeded,
}) => {
  const {
    id,
    contact_picture,
    first_name,
    last_name,
    phone_number,
    is_favorite,
  } = contact;
  const {navigate} = useNavigation();

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {(contact_picture || uploadSucceeded) && (
          <ImageComponent src={contact_picture || localFile?.path} />
        )}

        {!contact_picture && !uploadSucceeded && (
          <View style={{alignItems: 'center', padding: 10}}>
            <Image
              source={{uri: localFile?.path || DEFAULT_IMAGE_URI}}
              style={styles.image}
            />
            <TouchableOpacity
              onPress={() => {
                openSheet();
              }}>
              <Text style={{color: colors.primary}}>
                {isUploading ? 'Uploading...' : 'Add picture'}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.content}>
          <Text style={styles.names}>{first_name + ' ' + last_name}</Text>
        </View>

        <View style={styles.hrLine}></View>

        <View style={styles.topCallOptions}>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="ionicon"
              name="call-outline"
              size={27}
              color={colors.primary}
            />
            <Text style={styles.optionText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="materialCommunity"
              name="message-text"
              size={27}
              color={colors.primary}
            />
            <Text style={styles.optionText}>Text</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="materialCommunity"
              name="video"
              size={27}
              color={colors.primary}
            />
            <Text style={styles.optionText}>Video</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.middleCallOptions}>
          <Icon
            type="ionicon"
            name="call-outline"
            color={colors.grey}
            size={27}
          />
          <View style={styles.mobilePhone}>
            <Text>{phone_number}</Text>
            <Text>Mobile</Text>
          </View>

          <View style={styles.middleCallOption}>
            <Icon
              type="materialCommunity"
              name="video"
              color={colors.primary}
              size={27}
            />
            <Icon
              type="materialCommunity"
              name="message-text"
              color={colors.primary}
              size={27}
            />
          </View>
        </View>

        <CustomButton
          title="Edit Contact"
          primary
          onPress={() => {
            navigate(CREATE_CONTACT, {contact: contact, editing: true});
          }}
          style={{
            width: 200,
            alignSelf: 'center',
          }}
        />
      </View>

      <ImagePicker ref={sheetRef} onFileSelected={onFileSelected} />
    </ScrollView>
  );
};

export default ContactDetailComponent;
