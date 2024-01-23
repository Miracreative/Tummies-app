import React, {useState} from 'react';
import {Text, View,SafeAreaView, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import {useTranslation} from 'react-i18next';
import BtnButton from '../../Components/Button/Button';
import {icons} from "../../constants";
import Header from '../../Components/Header/Header';
import styled from "./style.scss";
export default function Auth({navigation}) {
    const {t} = useTranslation();
    const [myNumber, setMyNumber] = useState(''); 
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [valid, setValid] = useState(true);
    const [disable, setDisable] = useState(false);
    const onInputChanged = (text) => {
        setMyNumber(text)
    }
    

    // const onChangeDisable = () => {
    //     valid ? setDisable(false) : setDisable(true)
    // }
   
    return (
        <SafeAreaView style={styled.auth}>
           <Image
            style={styled.back}
            source={icons.backRed}/>
		<View
			style={styled.wrapper}>
			<Header onPress={() => navigation.navigate('ChooseLocation')} isWhite={true}/>
			<Image
				style={styled.image}
				source={icons.headerName}/>
            <Text style={styled.auth__started}>{t("getStarted")}</Text>
            <Image 
                style={styled.auth__img}
                source={icons.first} />
		</View>
        <KeyboardAvoidingView 
            // behavior={Platform.OS =='ios' ? "padding" : "height"}
            style={{position: 'relative', flex: .45}}>
                
            <Text
                style={styled.auth__title}>
                Phone number
            </Text>
            <TextInputMask
                type={'cel-phone'}
                options={{
                    maskType: 'INTERNATIONAL',
                    withDDD: true,
                    dddMask: '(971) '
                  }}
                ref={(ref) => phoneField = ref}
                style={[styled.auth__input, valid ? {borderColor: ' rgba(12, 3, 0, 0.50)'} : {borderColor: 'rgba(255, 0, 0, 1)'}]}
                keyboardType = 'numeric'
                value = {myNumber}
                onChangeText = {(text)=> {onInputChanged(text);
                                            }}
                onFocus={() => {setIsShowKeyboard(true);
                                }
                                }
                onBlur={() => {setIsShowKeyboard(false);
                    setValid(phoneField.isValid());
                    setDisable(phoneField.isValid());
                    }}
                
            />
            {valid ? 
            null : <Text style={styled.auth__error}>Enter the correct phone number</Text>
            }
            <View style={[styled.auth__buttons, isShowKeyboard ? {marginTop: 0} : {marginTop: 'auto'}]}>
                <BtnButton onPress={() => navigation.navigate('Gender')} title={t('continue')} buttonStyle={{backgroundColor: '#F55926',borderWidth: 2, borderColor: '#F55926', opacity: disable  ? 1 : .7, ointerEvents: disable ? 'all' : 'none'}} textStyle={{color: 'rgba(244, 237, 225, 1)', }}/>
                <BtnButton onPress={() => navigation.navigate('Gender')} title={t('logIn')} buttonStyle={{backgroundColor: 'rgba(244, 237, 225, 1)', borderStyle: 'solid', borderWidth: 2, borderColor: 'transparent', width: '50%'}} textStyle={{color: '#0C0300'}}/>
            </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
        
    )

   
}