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
	//постим юзера
	// let user = {
	// 	username: 'John',
	// 	email: 'smith@mail.com',
	// 	password: 'dasdasdfe2354g'
	//   };
	// fetch('http://192.168.0.189:1337/api/auth/local/register', {
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-Type': 'application/json;charset=utf-8',
	// 		Authorization: 'bearer 95bb57fd6d68b41a61d103afbf4e7777611a0c52a157ba750d54c84401f79cbc3bd4174390b3a17b9db6c7ca26506b8851387501323fa5f24847939c0e7911064edfcde87b39f67b4c486ccc6e5d69867a21e69eb55a68e49cfaeb9c4128a1c49f2e268e0e37354da99301ebcc127b9c0e01b1c333eff154eb79e66269a0a197',
	// 	},
	// 	body: JSON.stringify(user),
	// 	})

	//записываем ребенка
	// let myUser = {
	// 	data: {
	// 		name: 'test123',
	// 		user: '12'
	// 	}
	// }
	// fetch('http://192.168.0.189:1337/api/children', {
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-Type': 'application/json;charset=utf-8',
	// 		Authorization: 'bearer 95bb57fd6d68b41a61d103afbf4e7777611a0c52a157ba750d54c84401f79cbc3bd4174390b3a17b9db6c7ca26506b8851387501323fa5f24847939c0e7911064edfcde87b39f67b4c486ccc6e5d69867a21e69eb55a68e49cfaeb9c4128a1c49f2e268e0e37354da99301ebcc127b9c0e01b1c333eff154eb79e66269a0a197',
	// 	},
	// 	body: JSON.stringify(myUser),
	// 	})
	// 	.then((r) => r.json())
	// 	.then((data) => (console.log(data)))
	const [userData, setUserData] = useState()
	useEffect(() => {
		
		fetch('http://192.168.0.189:1337/api/users', {
			method: 'GET',
			headers: {
				Authorization: 'bearer 95bb57fd6d68b41a61d103afbf4e7777611a0c52a157ba750d54c84401f79cbc3bd4174390b3a17b9db6c7ca26506b8851387501323fa5f24847939c0e7911064edfcde87b39f67b4c486ccc6e5d69867a21e69eb55a68e49cfaeb9c4128a1c49f2e268e0e37354da99301ebcc127b9c0e01b1c333eff154eb79e66269a0a197',
			},
			body: JSON.stringify(),
			})
			.then((r) => r.json())
			.then((data) => (setUserData(data)))
		
	}, [])
	
	// console.log(userData)
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
					<BtnButton onPress={() => navigation.navigate("FirstPayment")} title={t('getStarted')} buttonStyle={{marginTop: 15, backgroundColor:"#F55926"}} textStyle={{color: 'rgba(244, 237, 225, 1)'}} arrow={true} />
					<BtnButton onPress={() => navigation.navigate("Auth")} title={t('logIn')} buttonStyle={{marginTop: 15, marginBottom: 20 }} textStyle={{color: 'black'}}/>
					
				</View>
			</SafeAreaView>
			
		</ImageBackground>
    </ View>
  );
}
