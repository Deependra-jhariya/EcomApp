import {StyleSheet} from 'react-native';
import { COLORS } from '../../../themes/AppColors/AppColors';

export const HeaderStyle = StyleSheet.create({
  headerContainer: {
    height: 80,
    backgroundColor: COLORS?.AppBgColor,
  },
  headerView: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  logoView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoSty: {
    // height: 25,
    width: 200,
    resizeMode: 'contain',
  },
  menuIconView: {
    alignSelf: 'center',
  },
  tittleStyle: {
    fontSize: 25,
    color:COLORS?.WhiteColor
  },
});
