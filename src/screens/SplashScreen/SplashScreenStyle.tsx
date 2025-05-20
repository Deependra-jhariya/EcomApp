import {StyleSheet} from 'react-native';
import {COLORS} from '../../themes/AppColors/AppColors';

export const SplashScreenStyle = StyleSheet.create({
  mainCOntainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS?.WhiteColor,
  },
  imgStyle:{
            height: 180,
            width: 180,
            resizeMode: 'contain',
          }
});
