import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Container from '../../components/common/Container/index.js';
import CustomButton from '../../components/common/CustomButton/index.js';
import Input from '../../components/common/Input/index.js';
import {LOGIN} from '../../constants/routeNames.js';
import styles from './styles.js';
import Message from '../common/Message/index.js';

const RegisterComponent = ({error, loading, errors, onChange, onSubmit}) => {
  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <Container>
      <Image
        width={70}
        height={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome to RNcontact</Text>
        <Text style={styles.subtitle}>Create a free account</Text>
        <View style={styles.form}>
          {error?.error && (
            <Message
              danger
              retry
              retryFn={() => console.log(`2222`, 2222)}
              message={error?.error}
            />
          )}

          <Input
            label="First name"
            placeholder="Enter first name"
            onChangeText={value => onChange({name: 'firstName', value: value})}
            error={errors.firstName || error?.first_name?.[0]}
          />
          <Input
            label="Last name"
            placeholder="Enter last name"
            onChangeText={value => onChange({name: 'lastName', value: value})}
            error={errors.lastName || error?.last_name?.[0]}
          />
          <Input
            label="Username"
            placeholder="Enter username"
            onChangeText={value => onChange({name: 'userName', value: value})}
            error={errors.userName || error?.username?.[0]}
          />
          <Input
            label="Email"
            placeholder="Enter email"
            error={errors.email || error?.email?.[0]}
            onChangeText={value => onChange({name: 'email', value: value})}
          />
          <Input
            label="Password"
            icon={
              <TouchableOpacity onPress={() => setIsSecureEntry(prev => !prev)}>
                <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            secureTextEntry={isSecureEntry}
            placeholder="Enter password"
            onChangeText={value => onChange({name: 'password', value: value})}
            error={errors.password || error?.password?.[0]}
          />
        </View>

        <CustomButton
          onPress={onSubmit}
          loading={loading}
          disabled={loading}
          title="Register"
          primary></CustomButton>

        <View style={styles.createSection}>
          <Text style={styles.infoText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigate(LOGIN)}>
            <Text style={styles.linkBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
