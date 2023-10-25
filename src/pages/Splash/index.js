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
      justifyContent: 'center',
      position: 'relative'

    }}>







      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image source={require('../../assets/logo.png')} style={{
          width: windowWidth / 1.5,
          height: windowWidth / 1.5,
          resizeMode: 'contain'
        }} />

        <Text style={{
          fontFamily: fonts.secondary[800],
          fontSize: 40,
          textAlign: 'center'
        }}>Kamus Dwibahasa</Text>
        <Text style={{
          fontFamily: fonts.secondary[800],
          fontSize: 30,
          textAlign: 'center',
          color: colors.secondary,
        }}>Melayu Ambon - Indonesia</Text>

      </View>

      <View style={{
        marginBottom: 20,
        padding: 10,
      }}>
        <ActivityIndicator size="large" color={colors.secondary} />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
