import React from 'react';
import {View, Text, Switch, Image, TouchableOpacity} from 'react-native';
import styles from './styles.js';
import Container from '../common/Container';
import Input from '../common/Input/index.js';
import CustomButton from '../common/CustomButton';
import CountryPicker from 'react-native-country-picker-modal';
import {DEFAULT_IMAGE_URI} from '../../constants/general.js';
import colors from '../../assets/theme/colors.js';
import ImagePicker from '../common/ImagePicker/index.js';

const CreateContactComponent = ({
  onChange,
  onSubmit,
  form,
  setForm,
  loading,
  error,
  toggleSwitch,
  sheetRef,
  openSheet,
  onFileSelected,
  localFile,
}) => {
  return (
    <View style={styles.container}>
      <Container>
        <Image
          source={{uri: localFile?.path || localFile || DEFAULT_IMAGE_URI}}
          style={styles.image}
        />
        <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseText}>Choose image</Text>
        </TouchableOpacity>
        <Input
          label="First name"
          placeholder="Please enter your first name"
          value={form.firstName || ''}
          error={error?.first_name?.[0]}
          onChangeText={value =>
            onChange({
              name: 'firstName',
              value: value,
            })
          }
        />
        <Input
          label="Last name"
          placeholder="Please enter your last name"
          value={form.lastName || ''}
          error={error?.last_name?.[0]}
          onChangeText={value =>
            onChange({
              name: 'lastName',
              value: value,
            })
          }
        />
        <Input
          icon={
            <CountryPicker
              withFilter
              withFlag
              withCallingCode
              withCallingCodeButton
              withEmoji
              countryCode={form.countryCode || undefined}
              onSelect={country => {
                const countryCode = country.cca2;
                const phoneCode = country.callingCode[0];

                setForm({
                  ...form,
                  countryCode: countryCode,
                  phoneCode: phoneCode,
                });
              }}
            />
          }
          iconPosition="left"
          style={{paddingLeft: 10}}
          label="Phone number"
          placeholder="Please enter your phone number"
          value={form.phoneNumber || ''}
          error={error?.phone_number?.[0]}
          onChangeText={value =>
            onChange({
              name: 'phoneNumber',
              value: value,
            })
          }
        />

        <View style={styles.isFavourite}>
          <Text style={{fontSize: 17}}>Add to favourite</Text>
          <Switch
            trackColor={{false: colors.danger, true: colors.primary}}
            thumbColor="FFFFFF"
            ios_backgroundColor="#3e3e3e"
            value={form.isFavorite}
            onValueChange={toggleSwitch}
          />
        </View>

        <ImagePicker ref={sheetRef} onFileSelected={onFileSelected} />

        <CustomButton
          loading={loading}
          disabled={loading}
          primary
          title="Submit"
          onPress={onSubmit}
        />
      </Container>
    </View>
  );
};

export default CreateContactComponent;
