import React, { useState, useEffect, createContext } from 'react';
import { Text, View,  TouchableOpacity, FlatList, Image, Modal,  SafeAreaView} from 'react-native';
// import PropTypes from "prop-types";
// import Geolocation from 'react-native-geolocation-service'; 
import styled from './main.scss';
// import Geocoder from 'react-native-geocoding'; 
import Header from '../../Components/Header/Header';
import {icons} from "../../constants";
import Slider from "../../Components/Slider/Slider";
import BtnButton from '../../Components/Button/Button';
import {useTranslation} from 'react-i18next';



export default function Main({ navigation}) {
    const {t} = useTranslation();

  return (
	
    <SafeAreaView style={styled.container}>
		<Image
				style={styled.back}
				source={icons.back}/>
		<View style={styled.wrapper}>
			<Header onPress={() => console.log('mainScreen')} isBack={false}/>
			<Image
				style={styled.image}
				source={icons.redTitle}/>
		</View>
		<Slider style={{flex: 0.7}}/>
		<BtnButton onPress={() => navigation.navigate("FirstLocation")} title={t('getStarted')} buttonStyle={{marginTop: 15, backgroundColor:"#F55926", flex: 0.055}} textStyle={{color: 'rgba(244, 237, 225, 1)'}} arrow={true} />
		<BtnButton onPress={() => navigation.navigate("Auth")} title={t('logIn')} buttonStyle={{marginTop: 15, flex: 0.05, marginBottom: 20 }} textStyle={{color: 'black'}}/>
		
    </ SafeAreaView>
  );
}
