import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';

import {BottomTabStyle} from './BottomTabStyle';
import Dashboard from '../../screens/Dashboard/Dashboard';
import {COLORS} from '../../themes/AppColors/AppColors';
import CommonIcon from '../../components/Atoms/CommonIcon/CommonIcon';
import ProductList from '../../screens/ProductList/ProductList';
import ProductDetails from '../../screens/ProductDetails/ProductDetails';
import WishList from '../../screens/WishList/WishList';
import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

export const BottomNav = () => {
  const [wishlistCount, setWishlistCount] = useState(0);

useFocusEffect(
    useCallback(() => {
      const loadWishlistCount = async () => {
        try {
          const stored = await AsyncStorage.getItem('wishlist');
          const parsed = stored ? JSON.parse(stored) : [];
          setWishlistCount(parsed.length);
        } catch (error) {
          console.error('Error loading wishlist', error);
        }
      };

      loadWishlistCount();
    }, [])
  );


  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarStyle: BottomTabStyle?.tabBarStyle,
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIconStyle: {flex: 1},
          tabBarIcon: ({focused}) => (
            <View style={BottomTabStyle?.tabBarIconView}>
              <CommonIcon
                type="Ionicons"
                name={focused ? 'home' : 'home-outline'}
                size={30}
                color={focused ? COLORS?.BlackColor : COLORS?.grayColor}
              />
              <Text
                style={[
                  BottomTabStyle?.tabBarText,
                  {color: focused ? COLORS?.BlackColor : COLORS?.grayColor},
                ]}>
                {'Home'}
              </Text>
            </View>
          ),
        }}
      />
        <Tab.Screen
        name="WishList"
        component={WishList}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIconStyle: {flex: 1},
          tabBarIcon: ({focused}) => (
            <View style={BottomTabStyle?.tabBarIconView}>
              <View style={{position: 'relative'}}>
                <CommonIcon
                  type="Ionicons"
                  name={focused ? 'cart' : 'cart-outline'}
                  size={30}
                  color={focused ? COLORS?.BlackColor : COLORS?.grayColor}
                />
                {wishlistCount > 0 && (
                  <View
                    style={BottomTabStyle?.wishListCountStyle}>
                    <Text style={{color: 'white', fontSize: 10}}>
                      {wishlistCount}
                    </Text>
                  </View>
                )}
              </View>
              <Text
                style={[
                  BottomTabStyle?.tabBarText,
                  {color: focused ? COLORS?.BlackColor : COLORS?.grayColor},
                ]}>
                {'WishList'}
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
