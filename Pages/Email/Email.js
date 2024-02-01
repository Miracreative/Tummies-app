import React, {useState} from 'react';
import {Text, View,SafeAreaView, Image, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import {useTranslation} from 'react-i18next';
import BtnButton from '../../Components/Button/Button';
import {icons} from "../../constants";
import Header from '../../Components/Header/Header';
import styled from "./style.scss";
export default function Email({navigation}) {
    const {t} = useTranslation();
    const [email, setEmail] = useState(''); 
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [valid, setValid] = useState(true);
    const [disable, setDisable] = useState(true);
   

    const validateEmail = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
          setEmail(text)
          setValid(false)
          setDisable(true)
        }
        else {
          setEmail(text)
          setValid(true)
          setDisable(false)
        }
      }
    return (
        <SafeAreaView style={styled.email}>
           <Image
            style={styled.back}
            source={icons.backRed}/>
		<View
			style={styled.wrapper}>
			<Header onPress={() => navigation.goBack()} isWhite={true} />
			<Image
				style={styled.image}
				source={icons.headerName}/>
            <Image 
                style={styled.email__img}
                source={icons.third} />
		</View>
        <KeyboardAvoidingView 
            // behavior={Platform.OS =='ios' ? "padding" : "height"}
            style={{position: 'relative', flex: .45}}>
                
            <Text
                style={styled.email__title}>
                Email
            </Text>
            <TextInput
                style={styled.email__input}
                value = {email}
                onChangeText = {(text)=> {validateEmail(text);}}
                onFocus={() => {setIsShowKeyboard(true);}}
                onBlur={() => {setIsShowKeyboard(false);
                    // setValid(validateEmail(text));
                    // setDisable(validateEmail(text));
                    }}
                
            />
            {valid ? 
            null : <Text style={styled.email__error}>Enter the correct e-mail</Text>
            }
            <View style={[styled.email__buttons, isShowKeyboard ? {marginTop: 0} : {marginTop: 'auto'}]}>
                <BtnButton onPress={() => navigation.navigate('Gender')} title={t('continue')} buttonStyle={{backgroundColor: '#F55926',borderWidth: 2, borderColor: '#F55926', opacity: disable  ? .7 : 1, pointerEvents: disable ? 'none' : 'auto'}} textStyle={{color: 'rgba(244, 237, 225, 1)', }}/>
                <View style={styled.email__privacy}>
                    <Text style={styled.email__text}>By continuing, you agree to our</Text>
                    <View style={styled.email__stroke}>
                        <TouchableOpacity><Text style={[styled.email__term, {textDecorationLine: 'underline', textDecorationStyle: 'solid', textDecorationColor: '#0C0300'}]}>Terms</Text></TouchableOpacity><Text style={styled.email__term}> and </Text><TouchableOpacity><Text style={[styled.email__term, {textDecorationLine: 'underline', textDecorationStyle: 'solid', textDecorationColor: '#0C0300'}]}>Privacy Policy</Text></TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
        
    )

   
}