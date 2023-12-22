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

export default function Turunan({ navigation, route }) {
    const kamusData = require('./../../db/kamus.json');

    const [data, setData] = useState(route.params);

    let KEY = route.params.Kata_turunan.split(" (").length > 1 ? route.params.Kata_turunan.split(" (")[0].trim() + ' (' : route.params.Kata_turunan.split(" (")[0].trim();
    console.log('ini key', KEY);
    const filterData = route.params.Kata_turunan.split(" (").length > 1 ? kamusData.filter(i => i.Kata_turunan.substring(0, KEY.length) == KEY.toLowerCase()) : kamusData.filter(i => i.Kata_turunan.toLowerCase() == KEY.toLowerCase());
    console.log('ini data', filterData);

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            position: 'relative',
            padding: 10,
        }}>

            <ScrollView>

                {filterData.length > 0 && filterData.map((item, index) => {

                    const TURUNAN = kamusData.filter(i => {
                        // 👇️ using AND (&&) operator
                        return i.Entri == item.Entri;
                    });


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

                            {/* KHUSUS LAFAL */}
                            {item.Lafal.indexOf(";") <= 0 && <>
                                <Text style={{
                                    fontFamily: fonts.secondary.normal,
                                    fontSize: 25,
                                }}>{item.Lafal}</Text>
                            </>}

                            {item.Lafal.indexOf(";") > 0 && item.Lafal.split(";").length == 2 &&
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{
                                        fontFamily: fonts.secondary.normal,
                                        fontSize: 25,
                                        fontWeight: 'normal',
                                        color: colors.black,
                                    }}>{item.Lafal.split(";")[0]}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: 25,
                                        fontWeight: 'normal',
                                        color: colors.black,
                                    }}>;</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary.normal,
                                        fontSize: 25,
                                        fontWeight: 'normal',
                                        color: colors.black,
                                    }}>{item.Lafal.split(";")[1]}</Text>
                                </View>
                            }

                            {item.Lafal.indexOf(";") > 0 && item.Lafal.split(";").length == 3 &&
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{
                                        fontFamily: fonts.secondary.normal,
                                        fontSize: 25,
                                        fontWeight: 'normal',
                                        color: colors.black,
                                    }}>{item.Lafal.split(";")[0]}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: 25,
                                        fontWeight: 'normal',
                                        color: colors.black,
                                    }}>;</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary.normal,
                                        fontSize: 25,
                                        fontWeight: 'normal',
                                        color: colors.black,
                                    }}>{item.Lafal.split(";")[1]}</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: windowWidth / 15,
                                        fontWeight: 'normal',
                                        color: colors.black,
                                    }}>;</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary.normal,
                                        fontSize: windowWidth / 15,
                                        fontWeight: 'normal',
                                        color: colors.black,
                                    }}>{item.Lafal.split(";")[2]}</Text>
                                </View>
                            }

                            {item.Kelas_Kata_1.length > 0 && <View style={{
                                padding: 10,
                                borderRadius: 10,
                                marginVertical: 5,
                            }}>
                                <Text style={{
                                    fontFamily: fonts.secondary[600],
                                    fontSize: 16,
                                    color: colors.danger,
                                }}>{item.Kelas_Kata_1}</Text>
                                <Text style={{
                                    marginTop: 10,
                                    fontFamily: fonts.secondary[400],
                                    fontSize: 14,
                                }}>{item.Definisi_1}</Text>
                                <Text style={{
                                    marginTop: 10,
                                    fontFamily: fonts.secondary[600],
                                    fontSize: 14,
                                    fontStyle: 'italic'
                                }}>{item.Contoh}</Text>
                                <Text style={{
                                    marginTop: 10,
                                    fontFamily: fonts.secondary[400],
                                    fontSize: 14,
                                }}>{item.Terjemahan_Contoh}</Text>
                            </View>}

                            {item.Kelas_Kata_2.length > 0 && <View style={{
                                padding: 10,
                                borderRadius: 10,
                                marginVertical: 5,
                            }}>
                                <Text style={{
                                    fontFamily: fonts.secondary[600],
                                    fontSize: 16,
                                    color: colors.danger,
                                }}>{item.Kelas_Kata_2}</Text>
                                <Text style={{
                                    marginTop: 10,
                                    fontFamily: fonts.secondary[400],
                                    fontSize: 14,
                                }}>{item.Definisi_2}</Text>
                                <Text style={{
                                    marginTop: 10,
                                    fontFamily: fonts.secondary[600],
                                    fontSize: 14,
                                    fontStyle: 'italic'
                                }}>{item.Contoh_1}</Text>

                                <Text style={{
                                    marginTop: 10,
                                    fontFamily: fonts.secondary[400],
                                    fontSize: 14,
                                }}>{item.Terjemahan_Contoh_2}</Text>
                            </View>}

                            {item.Kelas_Kata_3.length > 0 && <View style={{
                                padding: 10,
                                borderRadius: 10,
                                marginVertical: 5,
                            }}>
                                <Text style={{
                                    fontFamily: fonts.secondary[600],
                                    fontSize: 16,
                                    color: colors.danger,
                                }}>{item.Kelas_Kata_3}</Text>
                                <Text style={{
                                    marginTop: 10,
                                    fontFamily: fonts.secondary[400],
                                    fontSize: 14,
                                }}>{item.Definisi_3}</Text>
                                <Text style={{
                                    marginTop: 10,
                                    fontFamily: fonts.secondary[600],
                                    fontSize: 14,
                                    fontStyle: 'italic'
                                }}>{item.Contoh_3}</Text>
                                <Text style={{
                                    marginTop: 10,
                                    fontFamily: fonts.secondary[400],
                                    fontSize: 14,
                                }}>{item.Terjemahan_Contoh_4}</Text>
                            </View>}



                        </View>


                    )

                })}


            </ScrollView>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})