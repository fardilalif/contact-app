import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors.js';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 5,
    marginTop: 5,
  },
  inputContainer: {
    paddingVertical: 12,
  },
  textInput: {
    flex: 1,
  },
  error: {
    color: colors.danger,
    marginTop: 5,
    fontSize: 13,
  },
});
