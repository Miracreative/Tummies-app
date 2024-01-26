import React, {useState} from 'react';
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';
import 'react-native-gesture-handler';
import {name1} from './../../actions';
import { useDispatch, useSelector } from 'react-redux';
import BtnButton from '../../Components/Button/Button';
import {icons} from "../../constants";
import Header from '../../Components/Header/Header';
import styled from "./style.scss";
export default function FirstDay({ navigation }) {

  let {t} = useTranslation();
  const price = useSelector(state => state.plan.price);
  const long = useSelector(state => state.plan.long);
  const [date, setDate] = useState(null);
  const dispatch = useDispatch();
 
  return (
    
        <SafeAreaView style={styled.calendar}>
          <ScrollView style={styled.calendar__back}>
            <Image style={styled.calendar__backImg}
                    source={icons.back}/>
          </ScrollView>
            <Header style={{flex: 0.1}} onPress={() => navigation.navigate("Results")} isButtons={false}/>
            <View 
              style={styled.calendar__container}>
                <Text style={styled.calendar__title}>{t('days')}</Text>
                <Text style={styled.calendar__descr}>{t('subscr')}</Text>

                <View
                    style={styled.calendar__block}>
                        <Text style={styled.calendar__input}>Sunday, November 26, 2023</Text>
                    <TouchableOpacity>
                        <Image 
                            style={styled.calendar__icon}
                            source={icons.calendar} />
                    </TouchableOpacity>
                </View>
                <Text style={styled.calendar__title}>{t('days')}</Text>
                <View style={styled.calendar__divider}></View>
                <BtnButton onPress={() => {console.log('7')}} title={t('morning')} buttonStyle={{backgroundColor: '#F55926',borderWidth: 2, borderColor: '#F55926', marginBottom: 30}} textStyle={{color: 'rgba(244, 237, 225, 1)', }}/>
            </View>
        <BtnButton onPress={() => {navigation.navigate("Age")}} title={t('next')} buttonStyle={{backgroundColor: '#F55926',borderWidth: 2, borderColor: '#F55926', marginBottom: 30}} textStyle={{color: 'rgba(244, 237, 225, 1)', }}/>
    </SafeAreaView>
  );
}
