import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback, Linking } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';
import moment from 'moment';
import 'moment/locale/id';
import MyCarouser from '../../components/MyCarouser';
import { Rating } from 'react-native-ratings';
import { TextInput } from 'react-native';
import { MyGap, MyPicker } from '../../components';



export default function Home({ navigation, route }) {

  const kamusData = require('./../../db/kamus.json');
  const [data, setData] = useState(kamusData)
  const [filterBy, setFilterBy] = useState('Semua');
  const [kunci, setKunci] = useState('');
  const isFocus = useIsFocused();
  const _getTransaction = async () => {
  }


  useEffect(() => {
    if (isFocus) {
      _getTransaction();
      console.log(kamusData[0])
    }
  }, [isFocus]);


  const __renderITem = ({ item, index }) => {
    return (
      <TouchableNativeFeedback onPress={() => navigation.navigate('Feature', item)}>
        <View style={{
          padding: 10,
          marginHorizontal: 10,
          marginVertical: 2,
        }}>
          <Text style={{
            fontFamily: fonts.secondary[800],
            fontSize: 14
          }}>{item.Entri}</Text>
          <Text style={{
            fontFamily: fonts.secondary.normal,
            fontSize: 14
          }}>{item.Lafal}</Text>
          <Text style={{
            fontFamily: fonts.secondary.normal,
            fontSize: 14
          }}>{item.Kata_turunan}</Text>
        </View>
      </TouchableNativeFeedback >
    )
  }

  return (

    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.white,
      position: 'relative'
    }}>

      <View style={{
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 0
      }}>
        <Image source={require('../../assets/top2.png')} style={{
          width: 100,
          height: 140,
        }} />
      </View>




      <View style={{
        paddingHorizontal: 10,
      }}>

        <View style={{
          padding: 10,
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Image source={require('../../assets/logo.png')} style={{
              width: 70,
              height: 70,
            }} />
            <View style={{
              paddingLeft: 10,
            }}>
              <Text style={{
                fontFamily: fonts.secondary[600],
                fontSize: 15,
                color: colors.black
              }}>Hallo Selamat datang di</Text>
              <Text style={{
                fontFamily: fonts.secondary[800],
                color: colors.black,
                fontSize: 20,
              }}>KAMUS DWIBAHASA</Text>
              <Text style={{
                fontFamily: fonts.secondary[800],
                fontSize: 14,
                color: colors.secondary
              }}>MELAYU AMBON - INDONESIA</Text>
            </View>
          </View>


        </View>
        <View style={{
          padding: 10,
        }}>
          <MyPicker label="Cari Berdasarkan" onValueChange={x => {
            setFilterBy(x)
          }} iconname="options" data={[
            { label: 'Semua', value: 'Semua' },
            { label: 'Entri', value: 'Entri' },
            { label: 'Kata turunan', value: 'Kata_turunan' },
            { label: 'Lafal', value: 'Lafal' },
          ]} />
          <MyGap jarak={10} />
          <TextInput value={kunci} onChangeText={x => {
            setKunci(x);
            if (filterBy == 'Semua') {


              let TMP1 = kamusData.filter(i => i.Entri.toLowerCase().indexOf(x.toLowerCase()) > -1);
              let TMP2 = kamusData.filter(i => i.Kata_turunan.toLowerCase().indexOf(x.toLowerCase()) > -1);
              let TMP3 = kamusData.filter(i => i.Lafal.toLowerCase().indexOf(x.toLowerCase()) > -1);
              let TMP4 = kamusData.filter(i => i.Kelas_Kata_1.toLowerCase().indexOf(x.toLowerCase()) > -1);
              let TMP5 = kamusData.filter(i => i.Definisi_1.toLowerCase().indexOf(x.toLowerCase()) > -1);
              let TMP6 = kamusData.filter(i => i.Contoh.toLowerCase().indexOf(x.toLowerCase()) > -1);
              let TMP7 = kamusData.filter(i => i.Terjemahan_Contoh.toLowerCase().indexOf(x.toLowerCase()) > -1);
              let TMP8 = kamusData.filter(i => i.Kelas_Kata_2.toLowerCase().indexOf(x.toLowerCase()) > -1);
              let TMP9 = kamusData.filter(i => i.Definisi_2.toLowerCase().indexOf(x.toLowerCase()) > -1);
              let TMP10 = kamusData.filter(i => i.Contoh_1.toLowerCase().indexOf(x.toLowerCase()) > -1);
              let TMP11 = kamusData.filter(i => i.Terjemahan_Contoh_2.toLowerCase().indexOf(x.toLowerCase()) > -1);
              let TMP12 = kamusData.filter(i => i.Kelas_Kata_3.toLowerCase().indexOf(x.toLowerCase()) > -1);
              let TMP13 = kamusData.filter(i => i.Definisi_3.toLowerCase().indexOf(x.toLowerCase()) > -1);
              let TMP14 = kamusData.filter(i => i.Contoh_3.toLowerCase().indexOf(x.toLowerCase()) > -1);
              let TMP15 = kamusData.filter(i => i.Terjemahan_Contoh_4.toLowerCase().indexOf(x.toLowerCase()) > -1);



              if (TMP1.length > 0) { setData(TMP1) }
              else if (TMP2.length > 0) { setData(TMP2) }
              else if (TMP3.length > 0) { setData(TMP3) }
              else if (TMP4.length > 0) { setData(TMP4) }
              else if (TMP5.length > 0) { setData(TMP5) }
              else if (TMP6.length > 0) { setData(TMP6) }
              else if (TMP7.length > 0) { setData(TMP7) }
              else if (TMP8.length > 0) { setData(TMP8) }
              else if (TMP9.length > 0) { setData(TMP9) }
              else if (TMP10.length > 0) { setData(TMP10) }
              else if (TMP11.length > 0) { setData(TMP11) }
              else if (TMP12.length > 0) { setData(TMP12) }
              else if (TMP13.length > 0) { setData(TMP13) }
              else if (TMP14.length > 0) { setData(TMP14) }
              else if (TMP15.length > 0) { setData(TMP15) }



            } else if (filterBy == 'Entri') {
              let TMP = kamusData.filter(i => i.Entri.toLowerCase().indexOf(x.toLowerCase()) > -1);
              setData(TMP);
            } else if (filterBy == 'Kata_turunan') {
              let TMP = kamusData.filter(i => i.Kata_turunan.toLowerCase().indexOf(x.toLowerCase()) > -1);
              setData(TMP);
            } else if (filterBy == 'Lafal') {
              let TMP = kamusData.filter(i => i.Lafal.toLowerCase().indexOf(x.toLowerCase()) > -1);
              setData(TMP);
            }
          }} placeholder='Masukan pencarian . . .' style={{
            borderWidth: 1,
            paddingLeft: 10,
            fontFamily: fonts.secondary[600],
            fontSize: 14,
            borderColor: colors.primary,
            borderRadius: 10,
            backgroundColor: colors.white,
            opacity: 0.8,
          }} />
        </View>
      </View>

      <FlatList data={data} renderItem={__renderITem} />


    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  tulisan: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: fonts.secondary[600],
    color: colors.black,
    textAlign: 'justify'
  },
  tulisanJudul: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: fonts.secondary[800],
    color: colors.black,
    textAlign: 'justify'
  }
})