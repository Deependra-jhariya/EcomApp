import {Platform, StyleSheet} from 'react-native';
import {COLORS} from '../../themes/AppColors/AppColors';

export const BottomTabStyle = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: COLORS?.WhiteColor,
    height: Platform.OS == 'android' ? 65 : 80,
    flexDirection: 'row',
    paddingHorizontal: 10,
    width: '100%',
  },
  tabBarIconView: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: '200%',
  },
  tabBarText: {
    fontSize: 10,
    marginTop: 5,
  },
  wishListCountStyle: {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 5,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
