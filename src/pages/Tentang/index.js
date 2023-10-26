import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback, Linking } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useIsFocused } from '@react-navigation/native';

export default function Tentang() {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            padding: 20,
        }}>
            <Text style={{
                fontFamily: fonts.secondary[800],
                fontSize: 25,
                color: colors.black
            }}>Tentang kami: </Text>

            <Text style={{
                marginTop: 20,
                fontFamily: fonts.secondary[800],
                fontSize: 17,
                color: colors.primary,
            }}>Kamus Dwibahasa Melayu Ambon-Indonesia</Text>

            <Text style={{
                marginTop: 20,
                fontFamily: fonts.secondary[600],
                fontSize: 17,
                color: colors.black,
            }}>Kantor Bahasa Provinsi Maluku, Badan Pengembangan dan Pembinaan Bahasa, Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi</Text>

            <Text style={{
                marginTop: 50,
                fontFamily: fonts.secondary[800],
                fontSize: 17,
                color: colors.primary,
            }}>Penanggung jawab:</Text>
            <Text style={{
                marginTop: 10,
                fontFamily: fonts.secondary[600],
                fontSize: 17,
                color: colors.black,
            }}>Kity Karenisa, S.S. M.A.</Text>

            <Text style={{
                marginTop: 50,
                fontFamily: fonts.secondary[800],
                fontSize: 17,
                color: colors.primary,
            }}>Penanggung jawab:</Text>
            <Text style={{
                marginTop: 10,
                fontFamily: fonts.secondary[600],
                fontSize: 17,
                color: colors.black,
            }}>Evi Olivia Kumbangsila</Text>
            <Text style={{
                marginTop: 5,
                fontFamily: fonts.secondary[600],
                fontSize: 17,
                color: colors.black,
            }}>Linda Margret Heumasse</Text>
            <Text style={{
                marginTop: 5,
                fontFamily: fonts.secondary[600],
                fontSize: 17,
                color: colors.black,
            }}>Arie Rumihin</Text>
            <Text style={{
                marginTop: 5,
                fontFamily: fonts.secondary[600],
                fontSize: 17,
                color: colors.black,
            }}>Helmina Kastanya</Text>

            <Text style={{
                marginTop: 5,
                fontFamily: fonts.secondary[600],
                fontSize: 17,
                color: colors.black,
            }}>Meike H.E. Pieter</Text>
            <Text style={{
                marginTop: 5,
                fontFamily: fonts.secondary[600],
                fontSize: 17,
                color: colors.black,
            }}>Tresye Silooy</Text>
            <Text style={{
                marginTop: 5,
                fontFamily: fonts.secondary[600],
                fontSize: 17,
                color: colors.black,
            }}>Nita Handayani Hasan</Text>
            <Text style={{
                marginTop: 5,
                fontFamily: fonts.secondary[600],
                fontSize: 17,
                color: colors.black,
            }}>Faradika Darman</Text>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})