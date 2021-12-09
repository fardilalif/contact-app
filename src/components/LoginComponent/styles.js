import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors.js';

export default StyleSheet.create({
  logoImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  form: {
    marginTop: 20,
  },
  createSection: {
    flexDirection: 'row',
  },
  infoText: {
    fontSize: 17,
  },
  linkBtn: {
    fontSize: 17,
    color: colors.primary,
    paddingLeft: 7,
  },
});
