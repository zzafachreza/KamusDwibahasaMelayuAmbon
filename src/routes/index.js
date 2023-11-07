import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,

  Feature,
  Kelas,
  KelasData,
  KelasDetail,
  Jenis,
  JenisData,
  JenisDetail,
  Tentang,
  Petunjuk,
  Turunan,
  Pencarian,




} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';

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

      <Stack.Screen name="Kelas" component={Kelas} options={{
        headerShown: false,
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {

              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),


                },

              ],
            },
          };
        },

      }} />
      <Stack.Screen name="KelasData" component={KelasData} options={{
        headerShown: false,
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {

              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),


                },

              ],
            },
          };
        },

      }} />
      <Stack.Screen name="KelasDetail" component={KelasDetail} options={{
        headerShown: false,
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {

              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),


                },

              ],
            },
          };
        },

      }} />

      <Stack.Screen name="Jenis" component={Jenis} options={{
        headerShown: false,
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {

              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),


                },

              ],
            },
          };
        },

      }} />
      <Stack.Screen name="JenisData" component={JenisData} options={{
        headerShown: false,
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {

              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),


                },

              ],
            },
          };
        },

      }} />
      <Stack.Screen name="JenisDetail" component={JenisDetail} options={{
        headerShown: false,
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {

              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),


                },

              ],
            },
          };
        },

      }} />


      <Stack.Screen name="Tentang" component={Tentang} options={{
        headerShown: false,
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {

              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),


                },

              ],
            },
          };
        },

      }} />

      <Stack.Screen name="Petunjuk" component={Petunjuk} options={{
        headerShown: false,
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {

              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),


                },

              ],
            },
          };
        },

      }} />

      <Stack.Screen name="Turunan" component={Turunan} options={{
        headerShown: true,
        headerTintColor: colors.white,
        headerTitle: 'Makna',
        headerStyle: {
          backgroundColor: colors.primary,
        },
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {

              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),


                },

              ],
            },
          };
        },

      }} />


      <Stack.Screen name="Pencarian" component={Pencarian} options={{
        headerShown: true,
        headerTintColor: colors.white,
        headerTitle: 'Pencarian Kata',
        headerStyle: {
          backgroundColor: colors.primary,
        },
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {

              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),


                },

              ],
            },
          };
        },

      }} />







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
