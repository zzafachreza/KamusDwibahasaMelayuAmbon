import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { MyButton } from '../../components';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { MYAPP, getData } from '../../utils/localStorage';

export default function Splash({ navigation }) {



  const __getStarted = () => {




  }

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home')
    }, 1000)
  }, [])

  return (
    <SafeAreaView style={{
      flex: 1,
      padding: 0,
      backgroundColor: colors.white,
    }}>

      <View style={{
        padding: 10,
        height: 120,
        backgroundColor: colors.primary,
        justifyContent: 'center'
      }}>
        <Text style={{
          fontFamily: fonts.secondary[600],
          fontSize: 25,
          textAlign: 'center',
          color: colors.white
        }}>KAMUS DWIBAHASA</Text>
        <Text style={{
          fontFamily: fonts.secondary[600],
          fontSize: 25,
          textAlign: 'center',
          color: colors.white,
        }}>MELAYU AMBON-INDONESIA</Text>
      </View>
      <View style={{
        height: 40,
        backgroundColor: colors.black
      }} />

      <View style={{
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image source={require('../../assets/or.png')} style={{
          width: windowWidth / 1.5,
          height: windowWidth / 1.5,
        }} />
      </View>



      <View style={{
        flex: 0.5,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image source={require('../../assets/logo.png')} style={{
          width: windowWidth / 4,
          height: windowWidth / 4,
        }} />
      </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
