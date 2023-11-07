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
    const kamusData = require('./../../db/kamus.json');

    const [data, setData] = useState(route.params);


    let KEY = route.params.Entri.split(" (")[0].trim() + ' (';

    const filterData = kamusData.filter(i => i.Entri.toLowerCase().indexOf(KEY.toLowerCase()) > -1);





    const TURUNAN = kamusData.filter(i => {
        // 👇️ using AND (&&) operator
        return i.Entri == data.Entri;
    });
    console.log(TURUNAN);




    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            position: 'relative',
            padding: 10,
        }}>

            <ScrollView showsVerticalScrollIndicator={false}>

                {filterData.length > 0 && filterData.map((item, index) => {

                    const TURUNAN = kamusData.filter(i => {
                        // 👇️ using AND (&&) operator
                        return i.Entri == item.Entri;
                    });

                    if (index > 0 && item.Entri !== filterData[index - 1].Entri) {
                        return (
                            <View>
                                <Text style={{
                                    fontFamily: fonts.secondary[800],
                                    fontSize: 25,
                                }}>{item.Entri}</Text>
                                <Text style={{
                                    fontFamily: fonts.secondary[600],
                                    fontSize: 25,
                                }}>{item.Kata_turunan}</Text>
                                <Text style={{
                                    fontFamily: fonts.secondary.normal,
                                    fontSize: 25,
                                }}>{item.Lafal}</Text>

                                <View style={{

                                    padding: 10,
                                    borderRadius: 10,

                                    marginVertical: 5,
                                }}>
                                    <Text style={{
                                        fontFamily: fonts.secondary.normal,
                                        fontSize: 20,
                                        color: colors.danger,
                                    }}>{item.Kelas_Kata_1}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: 14,
                                    }}>{item.Definisi_1}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: 14,
                                        fontStyle: 'italic'
                                    }}>{item.Contoh}</Text>

                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: 14,
                                    }}>{item.Terjemahan_Contoh}</Text>
                                </View>

                                <View style={{

                                    padding: 10,
                                    borderRadius: 10,

                                    marginVertical: 5,
                                }}>
                                    <Text style={{
                                        fontFamily: fonts.secondary.normal,
                                        fontSize: 20,
                                        color: colors.danger,
                                    }}>{item.Kelas_Kata_2}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: 14,
                                    }}>{item.Definisi_2}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: 14,
                                        fontStyle: 'italic'
                                    }}>{item.Contoh_1}</Text>

                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: 14,
                                    }}>{item.Terjemahan_Contoh_2}</Text>
                                </View>

                                <View style={{

                                    padding: 10,
                                    borderRadius: 10,

                                    marginVertical: 5,
                                }}>
                                    <Text style={{
                                        fontFamily: fonts.secondary.normal,
                                        fontSize: 20,
                                        color: colors.danger,
                                    }}>{item.Kelas_Kata_3}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: 14,
                                    }}>{item.Definisi_3}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: 14,
                                        fontStyle: 'italic'
                                    }}>{item.Contoh_3}</Text>

                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: 14,
                                    }}>{item.Terjemahan_Contoh_4}</Text>
                                </View>


                                {TURUNAN.length > 1 &&
                                    <View>


                                        <View style={{
                                            paddingVertical: 10,
                                        }}>
                                            <Text><Text style={{
                                                fontFamily: fonts.secondary[800],
                                                fontSize: 15,
                                            }}>kata Turunan : </Text>
                                                {TURUNAN.map((i, index) => {

                                                    if (i.Kata_turunan !== '') {
                                                        return (
                                                            <TouchableWithoutFeedback onPress={() => {
                                                                // setData(i)
                                                                navigation.navigate('Turunan', i)
                                                            }}>

                                                                <Text style={{
                                                                    fontFamily: fonts.primary[600],
                                                                    color: i.Kata_turunan == data.Kata_turunan ? colors.black : colors.secondary,
                                                                    fontSize: 15,
                                                                }}>{i.Kata_turunan}{index < TURUNAN.length - 1 ? ';' : ''} </Text>


                                                            </TouchableWithoutFeedback>
                                                        )
                                                    }

                                                })}
                                            </Text>
                                        </View>
                                    </View>
                                }
                            </View>


                        )
                    } else if (index == 0) {
                        return (
                            <View>
                                <Text style={{
                                    fontFamily: fonts.secondary[800],
                                    fontSize: 25,
                                }}>{item.Entri}</Text>
                                <Text style={{
                                    fontFamily: fonts.secondary[600],
                                    fontSize: 25,
                                }}>{item.Kata_turunan}</Text>
                                <Text style={{
                                    fontFamily: fonts.secondary.normal,
                                    fontSize: 25,
                                }}>{item.Lafal}</Text>

                                <View style={{

                                    padding: 10,
                                    borderRadius: 10,

                                    marginVertical: 5,
                                }}>
                                    <Text style={{
                                        fontFamily: fonts.secondary.normal,
                                        fontSize: 20,
                                        color: colors.danger,
                                    }}>{item.Kelas_Kata_1}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: 14,
                                    }}>{item.Definisi_1}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: 14,
                                        fontStyle: 'italic'
                                    }}>{item.Contoh}</Text>

                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: 14,
                                    }}>{item.Terjemahan_Contoh}</Text>
                                </View>

                                <View style={{

                                    padding: 10,
                                    borderRadius: 10,

                                    marginVertical: 5,
                                }}>
                                    <Text style={{
                                        fontFamily: fonts.secondary.normal,
                                        fontSize: 20,
                                        color: colors.danger,
                                    }}>{item.Kelas_Kata_2}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: 14,
                                    }}>{item.Definisi_2}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: 14,
                                        fontStyle: 'italic'
                                    }}>{item.Contoh_1}</Text>

                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: 14,
                                    }}>{item.Terjemahan_Contoh_2}</Text>
                                </View>

                                <View style={{

                                    padding: 10,
                                    borderRadius: 10,

                                    marginVertical: 5,
                                }}>
                                    <Text style={{
                                        fontFamily: fonts.secondary.normal,
                                        fontSize: 20,
                                        color: colors.danger,
                                    }}>{item.Kelas_Kata_3}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: 14,
                                    }}>{item.Definisi_3}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: 14,
                                        fontStyle: 'italic'
                                    }}>{item.Contoh_3}</Text>

                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: 14,
                                    }}>{item.Terjemahan_Contoh_4}</Text>
                                </View>


                                {TURUNAN.length > 1 &&
                                    <View>


                                        <View style={{
                                            paddingVertical: 10,
                                        }}>
                                            <Text><Text style={{
                                                fontFamily: fonts.secondary[800],
                                                fontSize: 15,
                                            }}>kata Turunan : </Text>
                                                {TURUNAN.map((i, index) => {

                                                    if (i.Kata_turunan !== '') {
                                                        return (
                                                            <TouchableWithoutFeedback onPress={() => {
                                                                // setData(i)
                                                                navigation.navigate('Turunan', i)
                                                            }}>

                                                                <Text style={{
                                                                    fontFamily: fonts.primary[600],
                                                                    color: i.Kata_turunan == data.Kata_turunan ? colors.black : colors.secondary,
                                                                    fontSize: 15,
                                                                }}>{i.Kata_turunan}{index < TURUNAN.length - 1 ? ';' : ''} </Text>


                                                            </TouchableWithoutFeedback>
                                                        )
                                                    }

                                                })}
                                            </Text>
                                        </View>
                                    </View>
                                }
                            </View>


                        )
                    }
                })}




            </ScrollView>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})