import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors.js';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: colors.white,
    minHeight: 300,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  title: {
    fontSize: 18,
    marginLeft: 100,
  },

  body: {
    minHeight: 300,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  footer: {
    justifyContent: 'space-evenly',
    paddingVertical: 7,
    alignItems: 'center',
    flexDirection: 'row',
  },

  termsView: {
    width: 5,
    height: 5,
    borderRadius: 100,
    backgroundColor: colors.grey,
  },

  footerSeparator: {
    height: 0.7,
    backgroundColor: colors.grey,
  },

  footerItems: {
    width: '100%',
    padding: 10,
  },

  footerText: {
    fontSize: 12,
  },
});
