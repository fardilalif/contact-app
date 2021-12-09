import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import colors from '../../../assets/theme/colors.js';
import styles from './styles.js';

const Input = ({
  label,
  value,
  icon,
  iconPosition,
  onChangeText,
  error,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else {
        return 'row-reverse';
      }
    }
  };

  const getBorderColor = () => {
    if (error) {
      return colors.danger;
    }
    if (isFocused) {
      return colors.primary;
    } else {
      return colors.grey;
    }
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text style={{fontWeight: 'bold'}}>{label}</Text>}

      <View
        style={[
          styles.wrapper,
          {
            borderColor: getBorderColor(),
            flexDirection: getFlexDirection(),
            alignItems: icon ? 'center' : 'stretch',
          },
        ]}>
        <View>{icon && icon}</View>

        <TextInput
          value={value}
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
