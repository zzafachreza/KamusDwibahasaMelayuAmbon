import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,

  Feature,




} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';
import MenuRambuK3 from '../pages/RambuK3';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen name="Feature" component={Feature} options={{ headerShown: false }} />







      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />






    </Stack.Navigator>
  );
}
