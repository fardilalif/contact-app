import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles.js';

const Container = ({children, style}) => {
  return (
    <ScrollView>
      <View style={[styles.wrapper, style]}>{children}</View>
    </ScrollView>
  );
};

export default Container;
