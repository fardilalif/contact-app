import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../../assets/theme/colors.js';
import Icon from '../Icon/index.js';
import styles from './styles.js';
import ImagePickerCropper from 'react-native-image-crop-picker';

const ImagePicker = React.forwardRef(({onFileSelected}, ref) => {
  const options = [
    {
      name: 'Take a picture',
      icon: <Icon name="camera" color={colors.grey} size={21} />,
      onPress: () => {
        ImagePickerCropper.openCamera({
          width: 300,
          height: 400,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(image => {
            onFileSelected(image);
          })
          .catch(error => console.log(`error`, error));
      },
    },
    {
      name: 'Choose from a gallery',
      icon: <Icon name="image" color={colors.grey} size={21} />,
      onPress: () => {
        ImagePickerCropper.openPicker({
          width: 300,
          height: 400,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(image => {
            onFileSelected(image);
          })
          .catch(error => console.log(`error`, error));
      },
    },
  ];

  return (
    <RBSheet
      ref={ref}
      height={150}
      openDuration={250}
      closeOnDragDown
      customStyles={{
        container: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
      }}>
      <View style={styles.optionsWrapper}>
        {options.map(option => {
          const {name, icon, onPress} = option;

          return (
            <TouchableOpacity
              key={name}
              style={styles.option}
              onPress={onPress}>
              {icon}
              <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </RBSheet>
  );
});
export default ImagePicker;
