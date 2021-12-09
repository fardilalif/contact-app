import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors.js';

export default StyleSheet.create({
  scrollView: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
  },
  profilePicture: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  imageContainer: {
    width: '100%',
    height: 300,
  },
  loadingText: {
    alignSelf: 'center',
    paddingTop: 10,
  },
  content: {
    padding: 20,
  },
  names: {
    fontSize: 21,
  },
  hrLine: {
    height: 10,
    borderColor: colors.grey,
    borderBottomWidth: 0.4,
  },
  topCallOptions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
  },
  topCallOption: {
    alignItems: 'center',
  },
  optionText: {
    color: colors.primary,
    paddingVertical: 5,
  },
  middleCallOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  middleCallOption: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobilePhone: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  image: {width: 150, height: 150, borderRadius: 100},
});
