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

    const PARAMS = route.params;
    const kamusData = require('./../../db/kamus.json');
    const [data, setData] = useState(kamusData)
    const [open, setOpen] = useState(false);

    const [filterBy, setFilterBy] = useState('Semua');
    const [kunci, setKunci] = useState('');
    const isFocus = useIsFocused();
    const _getTransaction = () => {

        let results = data.filter(i => {
            // 👇️ using AND (&&) operator
            return i.Kelas_Kata_1 === PARAMS.id;
        });
        console.log(results[0])
        setData(results)
    }


    useEffect(() => {
        if (isFocus) {
            _getTransaction();
        }
    }, [isFocus]);


    const __renderITem = ({ item, index }) => {
        if (index > 0 && item.Entri.split(" (")[0].trim() !== data[index - 1].Entri.split(" (")[0].trim()) {
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
                        }}>{item.Entri.split(" (")[0].trim()}</Text>



                        {item.Lafal.indexOf(";") <= 0 && <>
                            <Text style={{
                                fontFamily: fonts.secondary.normal,
                                fontSize: 14,
                            }}>{item.Lafal}</Text>
                        </>}
                        {/* KHUSUS LAFAL */}
                        {item.Lafal.indexOf(";") > 0 && item.Lafal.split(";").length == 2 &&
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontFamily: fonts.secondary.normal,
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    color: colors.black,
                                }}>{item.Lafal.split(";")[0]}</Text>
                                <Text style={{
                                    fontFamily: fonts.secondary[400],
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    color: colors.black,
                                }}>;</Text>
                                <Text style={{
                                    fontFamily: fonts.secondary.normal,
                                    fontSize: 14,
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
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    color: colors.black,
                                }}>{item.Lafal.split(";")[0]}</Text>
                                <Text style={{
                                    fontFamily: fonts.secondary[400],
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    color: colors.black,
                                }}>;</Text>
                                <Text style={{
                                    fontFamily: fonts.secondary.normal,
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    color: colors.black,
                                }}>{item.Lafal.split(";")[1]}</Text>
                                <Text style={{
                                    fontFamily: fonts.secondary[400],
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    color: colors.black,
                                }}>;</Text>
                                <Text style={{
                                    fontFamily: fonts.secondary.normal,
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    color: colors.black,
                                }}>{item.Lafal.split(";")[2]}</Text>
                            </View>
                        }
                        <Text style={{
                            fontFamily: fonts.secondary.normal,
                            fontSize: 14
                        }}>{item.Kata_turunan}</Text>
                    </View>
                </TouchableNativeFeedback >
            )
        } else if (index == 0) {
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
                        }}>{item.Entri.split(" (")[0].trim()}</Text>

                        {/* KHUSUS LAFAL */}
                        {item.Lafal.indexOf(";") <= 0 && <>
                            <Text style={{
                                fontFamily: fonts.secondary.normal,
                                fontSize: 14,
                            }}>{item.Lafal}</Text>
                        </>}
                        {item.Lafal.indexOf(";") > 0 && item.Lafal.split(";").length == 2 &&
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontFamily: fonts.secondary.normal,
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    color: colors.black,
                                }}>{item.Lafal.split(";")[0]}</Text>
                                <Text style={{
                                    fontFamily: fonts.secondary[400],
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    color: colors.black,
                                }}>;</Text>
                                <Text style={{
                                    fontFamily: fonts.secondary.normal,
                                    fontSize: 14,
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
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    color: colors.black,
                                }}>{item.Lafal.split(";")[0]}</Text>
                                <Text style={{
                                    fontFamily: fonts.secondary[400],
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    color: colors.black,
                                }}>;</Text>
                                <Text style={{
                                    fontFamily: fonts.secondary.normal,
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    color: colors.black,
                                }}>{item.Lafal.split(";")[1]}</Text>
                                <Text style={{
                                    fontFamily: fonts.secondary[400],
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    color: colors.black,
                                }}>;</Text>
                                <Text style={{
                                    fontFamily: fonts.secondary.normal,
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    color: colors.black,
                                }}>{item.Lafal.split(";")[2]}</Text>
                            </View>
                        }


                        {/* KHUSUS TURUNAN */}
                        {item.Kata_turunan.indexOf(";") <= 0 && <>
                            <Text style={{
                                fontFamily: fonts.secondary.normal,
                                fontSize: 14,
                            }}>{item.Kata_turunan}</Text>
                        </>}
                        {item.Kata_turunan.indexOf(";") > 0 && item.Kata_turunan.split(";").length == 2 &&
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontFamily: fonts.secondary.normal,
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    color: colors.black,
                                }}>{item.Kata_turunan.split(";")[0]}</Text>
                                <Text style={{
                                    fontFamily: fonts.secondary[400],
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    color: colors.black,
                                }}>;</Text>
                                <Text style={{
                                    fontFamily: fonts.secondary.normal,
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    color: colors.black,
                                }}>{item.Kata_turunan.split(";")[1]}</Text>
                            </View>
                        }

                        {item.Kata_turunan.indexOf(";") > 0 && item.Kata_turunan.split(";").length == 3 &&
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontFamily: fonts.secondary.normal,
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    color: colors.black,
                                }}>{item.Kata_turunan.split(";")[0]}</Text>
                                <Text style={{
                                    fontFamily: fonts.secondary[400],
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    color: colors.black,
                                }}>;</Text>
                                <Text style={{
                                    fontFamily: fonts.secondary.normal,
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    color: colors.black,
                                }}>{item.Kata_turunan.split(";")[1]}</Text>
                                <Text style={{
                                    fontFamily: fonts.secondary[400],
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    color: colors.black,
                                }}>;</Text>
                                <Text style={{
                                    fontFamily: fonts.secondary.normal,
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    color: colors.black,
                                }}>{item.Kata_turunan.split(";")[2]}</Text>
                            </View>
                        }
                    </View>
                </TouchableNativeFeedback >
            )
        }
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
                }}>Kelas Kata <Text style={{
                    fontFamily: fonts.secondary[800],
                    color: colors.primary,
                }}>{PARAMS.name} ( {PARAMS.id} )</Text></Text>
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