import {Image, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import {AppImages} from '../../themes/AppImages/AppImages';
import {COLORS} from '../../themes/AppColors/AppColors';
import {SplashScreenStyle} from './SplashScreenStyle';
import { useAppNavigation } from '../../utils/navigationHelper';

const SplashScreen = () => {
  const {replaceTo} = useAppNavigation()

  useEffect(()=>{
    setTimeout(() => {
      replaceTo("BottomNav")
    }, 2000);
  },[])

  return (
    <View style={SplashScreenStyle?.mainCOntainer}>
      <Image source={AppImages?.AppLogo} style={SplashScreenStyle?.imgStyle} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
