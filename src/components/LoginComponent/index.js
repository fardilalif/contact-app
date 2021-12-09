import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Container from '../../components/common/Container/index.js';
import CustomButton from '../../components/common/CustomButton/index.js';
import Input from '../../components/common/Input/index.js';
import {REGISTER} from '../../constants/routeNames.js';
import Message from '../common/Message/index.js';
import styles from './styles.js';

const LoginComponent = ({
  error,
  loading,
  form,
  justSignedUp,
  onChange,
  onSubmit,
}) => {
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
        <Text style={styles.subtitle}>Please login here</Text>

        <View style={styles.form}>
          {justSignedUp && (
            <Message
              onDismiss={() => {}}
              success
              message="Account created successfully"
            />
          )}

          {error && !error.error && (
            <Message
              onDismiss={() => {}}
              danger
              message="Invalid Credentials"
            />
          )}

          {error?.error && (
            <Message message={error.error} danger onDismiss={() => {}} />
          )}

          <Input
            label="Username"
            placeholder="Enter username"
            value={form.userName || null}
            error={error?.username?.[0]}
            onChangeText={value => onChange({name: 'userName', value})}
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
            n
            error={error?.password?.[0]}
            onChangeText={value => onChange({name: 'password', value})}
          />
        </View>

        <CustomButton
          onPress={onSubmit}
          loading={loading}
          disabled={loading}
          title="Login"
          primary></CustomButton>

        <View style={styles.createSection}>
          <Text style={styles.infoText}>Need an account?</Text>
          <TouchableOpacity onPress={() => navigate(REGISTER)}>
            <Text style={styles.linkBtn}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
