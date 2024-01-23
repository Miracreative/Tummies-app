import React, {useState} from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import 'react-native-gesture-handler';
import {gen1} from './../../actions';
import { useDispatch, useSelector } from 'react-redux';
import BtnButton from '../../Components/Button/Button';
import {icons} from "../../constants";
import Header from '../../Components/Header/Header';
import styled from "./style.scss";
export default function Name({ navigation }) {

  let {t} = useTranslation();
  const gender1 = useSelector(state => state.childrens.children1.gender);
  const [gender, setGender] = useState(null);
  const dispatch = useDispatch();

  return (
    
        <View style={styled.gender}>
          <View style={styled.gender__back}>
            <Image style={styled.gender__backImg}
                    source={icons.back}/>
          </View>
            <Header style={{flex: 0.1}} onPress={() => navigation.navigate("Auth")} isButtons={false}/>
            <View 
              style={styled.gender__container}>
                <Text style={styled.gender__title}>{t('genderTitle')}</Text>
                <Text style={styled.gender__descr}>{t('genderDescr')}</Text>
                <TouchableOpacity style={styled.gender__iconContainer}
                                  onPress={() => setGender('boy')}>
                  <Image style={styled.gender__icon}
                          source={(gender=='boy') ? icons.redBoy : icons.boy} />
                  <Text style={styled.gender__text}>{t('boy')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styled.gender__iconContainer}
                                  onPress={() => setGender('girl')}>
                  <Image style={styled.gender__icon}
                          source={(gender=='girl') ? icons.redGirl : icons.girl} />
                  <Text style={styled.gender__text}>{t('girl')}</Text>
                </TouchableOpacity>
                <BtnButton onPress={() => {dispatch(gen1(gender))}} title={t('next')} buttonStyle={{backgroundColor: '#F55926',borderWidth: 2, borderColor: '#F55926', opacity: gender ? 1 : 0.7}} textStyle={{color: 'rgba(244, 237, 225, 1)', }}/>
            </View>
    </View>
  );
}
