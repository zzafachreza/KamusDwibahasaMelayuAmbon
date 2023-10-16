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

export default function Kategori({ navigation, route }) {

    const data = route.params;
    console.log(data);




    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            position: 'relative',
            padding: 10,
        }}>

            <View>
                <Text style={{
                    fontFamily: fonts.secondary[800],
                    fontSize: 25,
                }}>{data.Entri}</Text>
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: 25,
                }}>{data.Kata_turunan}</Text>
                <Text style={{
                    fontFamily: fonts.secondary.normal,
                    fontSize: 25,
                }}>{data.Lafal}</Text>

                <View style={{

                    padding: 10,
                    borderRadius: 10,

                    marginVertical: 5,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary.normal,
                        fontSize: 20,
                        fontStyle: 'italic'
                    }}>{data.Kelas_Kata_1}</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: 14,
                    }}>{data.Definisi_1}</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 14,
                    }}>{data.Contoh}</Text>

                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: 14,
                    }}>{data.Terjemahan_Contoh}</Text>
                </View>

                <View style={{

                    padding: 10,
                    borderRadius: 10,

                    marginVertical: 5,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary.normal,
                        fontSize: 20,
                        fontStyle: 'italic'
                    }}>{data.Kelas_Kata_2}</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: 14,
                    }}>{data.Definisi_2}</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 14,
                    }}>{data.Contoh_1}</Text>

                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: 14,
                    }}>{data.Terjemahan_Contoh_2}</Text>
                </View>

                <View style={{

                    padding: 10,
                    borderRadius: 10,

                    marginVertical: 5,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary.normal,
                        fontSize: 20,
                        fontStyle: 'italic'
                    }}>{data.Kelas_Kata_3}</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: 14,
                    }}>{data.Definisi_3}</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 14,
                    }}>{data.Contoh_3}</Text>

                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: 14,
                    }}>{data.Terjemahan_Contoh_4}</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})