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

export default function ({ navigation, route }) {

    const kamusData = require('./../../db/kamus.json');
    const [data, setData] = useState([
        {
            id: 'Entri',
            name: 'Bentuk Dasar'
        },
        {
            id: 'Kata_turunan',
            name: 'Kata Turunan'
        },

    ])
    const [open, setOpen] = useState(false);

    const [filterBy, setFilterBy] = useState('Semua');
    const [kunci, setKunci] = useState('');
    const isFocus = useIsFocused();
    const _getTransaction = () => {

        let dataTmp = data.filter(i => i.Kelas_Kata_1 !== '');
        console.log(dataTmp[0])
    }


    useEffect(() => {
        if (isFocus) {
            _getTransaction();
        }
    }, [isFocus]);


    const __renderITem = ({ item, index }) => {
        return (
            <TouchableNativeFeedback onPress={() => navigation.navigate('JenisData', item)}>
                <View style={{
                    padding: 10,
                    marginHorizontal: 10,
                    marginVertical: 2,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 14
                    }}><Text style={{
                        fontFamily: fonts.secondary[800],
                        fontSize: 14,
                        left: 5,
                    }}>( {index + 1} ) </Text>{item.name}


                    </Text>

                </View>
            </TouchableNativeFeedback >
        )
    }


    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <View style={{
                borderBottomWidth: 1,
                borderBottomColor: colors.border,
                marginVertical: 10,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Icon type='ionicon' name='bookmark' size={20} />
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: 20,
                    flex: 1,
                    left: 10,
                    color: colors.black
                }}>Jenis</Text>
            </View>

            <View style={{
                flex: 1,
                paddingLeft: 20,
            }}>
                <FlatList data={data} renderItem={__renderITem} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})