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
import { MyButton } from '../../components';

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
            backgroundColor: colors.primary,
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <TouchableWithoutFeedback onPress={() => setOpen(true)}>
              <View style={{
                flex: 0.5,
              }}>
                <Icon type='ionicon' name='menu-outline' size={40} color={colors.white} />
              </View>
            </TouchableWithoutFeedback>
            <Image source={require('../../assets/logo.png')} style={{
              width: 60,
              height: 60,
            }} />
            <View style={{
              paddingLeft: 10,
            }}>
              <Text style={{
                fontFamily: fonts.secondary[800],
                color: colors.white,
                fontSize: 20,
              }}>KAMUS DWIBAHASA</Text>
              <Text style={{
                fontFamily: fonts.secondary[800],
                fontSize: 14,
                color: colors.white
              }}>MELAYU AMBON - INDONESIA</Text>
            </View>
          </View>


        </View>

      </View>


      <View style={{
        flex: 1,
        padding: 20,
        justifyContent: 'center'
      }}>
        <Text style={{
          fontFamily: fonts.secondary[600],
          fontSize: 20,
          color: colors.black,
          textAlign: 'center'
        }}>Selamat datang di Aplikasi Kamus Dwibahasa Melayu Ambon-Indonesia
          Kantor Bahasa Provinsi Maluku
        </Text>
        <Image source={require('../../assets/logo.png')} style={{
          width: 180,
          height: 180,
          marginVertical: 50,
          alignSelf: 'center'
        }} />
        <MyButton onPress={() => navigation.navigate('Pencarian')} warna={colors.primary} title="Mulai Pencarian Kata" Icons="search" />
      </View>


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