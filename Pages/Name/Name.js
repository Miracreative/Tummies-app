import React, {useState} from 'react';
import { Text, View, Image, TextInput, SafeAreaView} from 'react-native';
import {useTranslation} from 'react-i18next';
import 'react-native-gesture-handler';
import {name1} from './../../actions';
import { useDispatch, useSelector } from 'react-redux';
import BtnButton from '../../Components/Button/Button';
import {icons} from "../../constants";
import Header from '../../Components/Header/Header';
import styled from "./style.scss";
export default function Name({ navigation }) {

  let {t} = useTranslation();
  const gender1 = useSelector(state => state.childrens.children1.gender);
  const [name, setName] = useState(null);
  const dispatch = useDispatch();
  const onChangeName = (text) => {
    setName(text)
  }
  return (
    
        <SafeAreaView style={styled.name}>
          <View style={styled.name__back}>
            <Image style={styled.name__backImg}
                    source={icons.back}/>
          </View>
            <Header style={{flex: 0.1}} onPress={() => navigation.navigate("Gender")} isButtons={false}/>
            <View 
              style={styled.name__container}>
                <Text style={styled.name__title}>{t('enterName')}</Text>
                  <Image style={styled.name__icon}
                          source={(gender1=='boy') ? icons.redBoy : icons.redGirl} />
                  <Text style={styled.name__text}>{ (gender1=='boy') ? t('boy') : t('girl')}</Text>
                <Text style={styled.name__text}>{t('name')}</Text>
                <TextInput
                        style={styled.name__input}
                        onChangeText={text => {onChangeName(text)}}
                        value={name}
                    />
                
            </View>
        <BtnButton onPress={() => {dispatch(name1(name))}} title={t('next')} buttonStyle={{backgroundColor: '#F55926',borderWidth: 2, borderColor: '#F55926', marginBottom: 30, opacity: (name.length > 1) ? 1 : 0.7, pointerEvents: (name.length > 1) ? 'all' : 'none'}} textStyle={{color: 'rgba(244, 237, 225, 1)', }}/>
    </SafeAreaView>
  );
}
