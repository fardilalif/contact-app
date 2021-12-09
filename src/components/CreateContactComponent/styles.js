import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors.js';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
  },
  chooseText: {
    textAlign: 'center',
    color: colors.primary,
  },
  isFavourite: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
});
