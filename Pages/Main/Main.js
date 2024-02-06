import React, { useState, useEffect, createContext } from 'react';
import { Text, View,  TouchableOpacity, FlatList, Image, ImageBackground,  SafeAreaView} from 'react-native';
import styled from './main.scss';
import Header from '../../Components/Header/Header';
import {icons} from "../../constants";
import Slider from "../../Components/Slider/Slider";
import BtnButton from '../../Components/Button/Button';
import {useTranslation} from 'react-i18next';



export default function Main({ navigation}) {
    const {t} = useTranslation();

  return (
	
    <View style={styled.container}>
		<ImageBackground
				resizeMode="cover"
				style={styled.back}
				source={icons.backFull}>
			<SafeAreaView style={{flex:1}}>
				<View style={{flex: 0.8}}>
					<Header onPress={() => console.log('mainScreen')} isBack={false} lang={true}/>
					<Image
						style={styled.image}
						source={icons.redTitle}/>
					<Slider />
				</View>
				
				<View style={{flex: 0.2, marginBottom: 20}}>
					<BtnButton onPress={() => navigation.navigate("Email")} title={t('getStarted')} buttonStyle={{marginTop: 15, backgroundColor:"#F55926"}} textStyle={{color: 'rgba(244, 237, 225, 1)'}} arrow={true} />
					<BtnButton onPress={() => navigation.navigate("Auth")} title={t('logIn')} buttonStyle={{marginTop: 15, marginBottom: 20 }} textStyle={{color: 'black'}}/>
					
				</View>
			</SafeAreaView>
			
		</ImageBackground>
    </ View>
  );
}
