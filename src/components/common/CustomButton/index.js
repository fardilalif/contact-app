import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import colors from '../../../assets/theme/colors.js';
import styles from './styles.js';

const CustomButton = ({
  title,
  disabled,
  primary,
  secondary,
  danger,
  loading,
  onPress,
  style,
}) => {
  const getBgColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.primary;
    }
    if (secondary) {
      return colors.secondary;
    }
    if (danger) {
      return colors.danger;
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, {backgroundColor: getBgColor()}, style]}>
      <View style={[styles.loader]}>
        {loading && (
          <ActivityIndicator color={primary ? colors.white : colors.primary} />
        )}

        {title && (
          <Text
            style={{
              color: disabled ? 'black' : colors.white,
              paddingLeft: loading ? 5 : 0,
            }}>
            {loading ? 'Please wait...' : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
