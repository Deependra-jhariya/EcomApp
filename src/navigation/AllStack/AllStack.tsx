import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "../../screens/SplashScreen/SplashScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../../screens/Dashboard/Dashboard";
import { BottomNav } from "../BottomTab/BottomTab";
import ProductList from "../../screens/ProductList/ProductList";
import ProductDetails from "../../screens/ProductDetails/ProductDetails";

const AllStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="BottomNav" component={BottomNav} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      
    </Stack.Navigator>
  );
};

export default AllStack;

const styles = StyleSheet.create({});
