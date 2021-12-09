import React, {useState} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import styles from './styles.js';

const ImageComponent = ({src}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const onLoadStart = () => {
    setIsLoading(true);
  };

  const onLoadEnd = () => {
    setIsLoading(false);
  };

  const onError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <View style={styles.imageContainer}>
      {isLoading && <Text style={styles.loadingText}>Loading...</Text>}
      <Image
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        onError={onError}
        source={{uri: src}}
        style={styles.profilePicture}
      />
    </View>
  );
};

export default ImageComponent;
