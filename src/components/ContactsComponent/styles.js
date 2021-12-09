import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors.js';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  name: {
    fontSize: 17,
  },
  phoneNumber: {
    opacity: 0.6,
    fontSize: 14,
    paddingVertical: 5,
  },
  profilePicture: {
    width: 45,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: colors.grey,
  },
  floatingActionButton: {
    position: 'absolute',
    bottom: 10,
    right: 5,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'red',
  },
});
