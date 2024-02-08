import { Text, View,  SafeAreaView, Image, ImageBackground, KeyboardAvoidingView, Platform, Keyboard, ScrollView, TouchableOpacity, TouchableWithoutFeedback, TextInput, StatusBar} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useStripe } from '@stripe/stripe-react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import MapView from 'react-native-maps';
import {useTranslation} from 'react-i18next';
import {  useSelector, useDispatch } from 'react-redux';
import {area1, street1, build1, flat1, instr1} from './../../actions';
import BtnButton from '../../Components/Button/Button';
import {icons} from "../../constants";
import Header from '../../Components/Header/Header';
import styled from "./style.scss";

const FirstPayment = ({navigation}) => {
    const {t} = useTranslation();
    const latitude = useSelector(state => state.userInfo.latitude);
    const longitude = useSelector(state => state.userInfo.longitude);
    const currentArea = useSelector(state => state.childrens.children1.deliveryDetails.area);
    const currentBuilding = useSelector(state => state.childrens.children1.deliveryDetails.building);
    const currentFlat = useSelector(state => state.childrens.children1.deliveryDetails.flat);
    const currentStreet = useSelector(state => state.childrens.children1.deliveryDetails.street);


    const stripe = useStripe();
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#F3EDDF', position: 'relative'}}>
            <View style={{width: '100%', height: StatusBar.currentHeight, backgroundColor: '#FFFFFF'}}></View>
            <ScrollView style={{ width: '100%'}}>
                <View style={styled.pay__back}>
                    <Image style={styled.pay__backImg}
                        source={icons.backMin}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default FirstPayment