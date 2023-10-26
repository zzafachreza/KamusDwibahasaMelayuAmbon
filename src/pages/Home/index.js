import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback, Linking } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useIsFocused } from '@react-navigation/native';
import 'intl';
import 'intl/locale-data/jsonp/en';
import 'moment/locale/id';
import { TextInput } from 'react-native';
import Modal from 'react-native-modal';

export default function Home({ navigation, route }) {

  const kamusData = require('./../../db/kamus.json');
  const [data, setData] = useState(kamusData)
  const [open, setOpen] = useState(false);

  const [filterBy, setFilterBy] = useState('Semua');
  const [kunci, setKunci] = useState('');
  const isFocus = useIsFocused();
  const _getTransaction = async () => {
  }


  useEffect(() => {
    if (isFocus) {
      _getTransaction();
    }
  }, [isFocus]);


  const __renderITem = ({ item, index }) => {

    if (index > 0 && item.Entri !== data[index - 1].Entri) {
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

  }


  return (

    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.white,

    }}>







      <View style={{
      }}>

        <View style={{
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <TouchableWithoutFeedback onPress={() => setOpen(true)}>
              <View style={{
                flex: 0.5,
              }}>
                <Icon type='ionicon' name='menu-outline' size={40} color={colors.black} />
              </View>
            </TouchableWithoutFeedback>
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


      <Modal
        style={{
        }}
        hasBackdrop={true}
        backdropOpacity={0.6}
        backdropColor={colors.black}
        // animationType="fade"
        coverScreen={true}
        backdropTransitionInTiming={100}
        backdropTransitionOutTiming={100}
        deviceHeight={windowHeight}
        onBackdropPress={() => setOpen(false)}
        animationOut="slideOutLeft"
        animationIn="slideInLeft"
        animationInTiming={100}
        animationOutTiming={100}
        isVisible={open}

        onRequestClose={() => {
          setOpen(false)
        }}>
        <View style={{
          marginLeft: -20,
          marginTop: -22,
          marginBottom: -22,
          backgroundColor: colors.white,
          flex: 1,

          width: windowWidth / 1.6,
          borderBottomRightRadius: windowHeight,
          borderTopRightRadius: 0,
        }}>
          <View style={{
            paddingTop: 20,
            paddingBottom: 20,
            backgroundColor: colors.white,
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image source={require('../../assets/logo.png')} style={{
              width: 70,
              height: 70,
            }} />
            <Text style={{
              fontFamily: fonts.secondary[800],
              color: colors.black,
              fontSize: 15,
            }}>KAMUS DWIBAHASA</Text>
            <Text style={{
              fontFamily: fonts.secondary[800],
              fontSize: 10,
              color: colors.secondary
            }}>MELAYU AMBON - INDONESIA</Text>
          </View>

          <TouchableWithoutFeedback onPress={() => {
            navigation.navigate('Kelas');
            setOpen(false);
          }}>
            <View style={{
              marginVertical: 10,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <Icon type='ionicon' name='bookmark' size={15} />
              <Text style={{
                fontFamily: fonts.secondary[600],
                fontSize: 15,
                flex: 1,
                left: 10,
                color: colors.black
              }}>Kelas Kata</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => {
            navigation.navigate('Jenis');
            setOpen(false);
          }}>
            <View style={{
              marginVertical: 10,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <Icon type='ionicon' name='bookmark' size={15} />
              <Text style={{
                fontFamily: fonts.secondary[600],
                fontSize: 15,
                flex: 1,
                left: 10,
                color: colors.black
              }}>Jenis</Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={{
            marginTop: 50,
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
          }} />
          <TouchableWithoutFeedback onPress={() => {
            navigation.navigate('Petunjuk');
            setOpen(false);
          }}>
            <View style={{
              marginVertical: 10,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <Icon type='ionicon' name='book' size={15} />
              <Text style={{
                fontFamily: fonts.secondary[600],
                fontSize: 15,
                flex: 1,
                left: 10,
                color: colors.black
              }}>Petunjuk Penggunaan</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => {
            navigation.navigate('Tentang');
            setOpen(false);
          }}>
            <View style={{
              marginVertical: 10,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <Icon type='ionicon' name='information-circle' size={15} />
              <Text style={{
                fontFamily: fonts.secondary[600],
                fontSize: 15,
                flex: 1,
                left: 10,
                color: colors.black
              }}>Tentang Kami</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
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