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

            <ScrollView>

                <Text style={{
                    fontFamily: fonts.secondary[800],
                    fontSize: 25,
                }}>{data.Entri}</Text>
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: 25,
                }}>{data.Kata_turunan}</Text>

                {data.Lafal.indexOf(";") <= 0 && <>
                    <Text style={{
                        fontFamily: fonts.secondary.normal,
                        fontSize: 25,
                    }}>{data.Lafal}</Text>
                </>}

                {/* KHUSUS LAFAL */}
                {data.Lafal.indexOf(";") > 0 && data.Lafal.split(";").length == 2 &&
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary.normal,
                            fontSize: 25,
                            fontWeight: 'normal',
                            color: colors.black,
                        }}>{data.Lafal.split(";")[0]}</Text>
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
                        }}>{data.Lafal.split(";")[1]}</Text>
                    </View>
                }

                {data.Lafal.indexOf(";") > 0 && data.Lafal.split(";").length == 3 &&
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary.normal,
                            fontSize: windowWidth / 15,
                            fontWeight: 'normal',
                            color: colors.black,
                        }}>{data.Lafal.split(";")[0]}</Text>
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
                        }}>{data.Lafal.split(";")[1]}</Text>
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
                        }}>{data.Lafal.split(";")[2]}</Text>
                    </View>
                }


                {data.Kelas_Kata_1.length > 0 && <View style={{
                    padding: 10,
                    borderRadius: 10,
                    marginVertical: 5,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 16,
                        color: colors.danger,
                    }}>{data.Kelas_Kata_1}</Text>
                    <Text style={{
                        marginTop: 10,
                        fontFamily: fonts.secondary[400],
                        fontSize: 14,
                    }}>{data.Definisi_1}</Text>
                    <Text style={{
                        marginTop: 10,
                        marginTop: 10,
                        fontFamily: fonts.secondary[600],
                        fontSize: 14,
                        fontStyle: 'italic'
                    }}>{data.Contoh}</Text>
                    <Text style={{
                        marginTop: 10,
                        fontFamily: fonts.secondary[400],
                        fontSize: 14,
                    }}>{data.Terjemahan_Contoh}</Text>
                </View>}

                {data.Kelas_Kata_2.length > 0 && <View style={{
                    padding: 10,
                    borderRadius: 10,
                    marginVertical: 5,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 16,
                        color: colors.danger,
                    }}>{data.Kelas_Kata_2}</Text>
                    <Text style={{
                        marginTop: 10,
                        fontFamily: fonts.secondary[400],
                        fontSize: 14,
                    }}>{data.Definisi_2}</Text>
                    <Text style={{
                        marginTop: 10,
                        fontFamily: fonts.secondary[600],
                        fontSize: 14,
                        fontStyle: 'italic'
                    }}>{data.Contoh_1}</Text>

                    <Text style={{
                        marginTop: 10,
                        fontFamily: fonts.secondary[400],
                        fontSize: 14,
                    }}>{data.Terjemahan_Contoh_2}</Text>
                </View>}

                {data.Kelas_Kata_3.length > 0 && <View style={{
                    padding: 10,
                    borderRadius: 10,
                    marginVertical: 5,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 16,
                        color: colors.danger,
                    }}>{data.Kelas_Kata_3}</Text>
                    <Text style={{
                        marginTop: 10,
                        fontFamily: fonts.secondary[400],
                        fontSize: 14,
                    }}>{data.Definisi_3}</Text>
                    <Text style={{
                        marginTop: 10,
                        fontFamily: fonts.secondary[600],
                        fontSize: 14,
                        fontStyle: 'italic'
                    }}>{data.Contoh_3}</Text>
                    <Text style={{
                        marginTop: 10,
                        fontFamily: fonts.secondary[400],
                        fontSize: 14,
                    }}>{data.Terjemahan_Contoh_4}</Text>
                </View>}



            </ScrollView>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})