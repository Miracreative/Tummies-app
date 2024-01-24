import React, {useState, useEffect} from 'react';
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native';
import {useTranslation} from 'react-i18next';
import 'react-native-gesture-handler';
import {age1} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import BtnButton from '../../Components/Button/Button';
import {icons} from "../../constants";
import Header from '../../Components/Header/Header';
import styled from "./style.scss";
export default function Results({ navigation }) {

  let {t} = useTranslation();
  const childernGender = useSelector(state => state.childrens.children1.gender)
  const childernName = useSelector(state => state.childrens.children1.name)
  const childrenAge = useSelector(state => state.childrens.children1.age);
      let week = [];
      let weekDays = [];
      let mounthes = [];

      for(let i=0; i<7; i++) {
        let today = new Date();
        let curretDate = new Date(today.setDate(today.getDate() + 3));
        week.push((new Date(curretDate.setDate(curretDate.getDate() + i))).getDate())
      }
      for(let i=0; i<7; i++) {
        let today = new Date();
        let curretDate = new Date(today.setDate(today.getDate() + 3));
        weekDays.push(new Date(curretDate.setDate(curretDate.getDate() + i)).getDay())
      }
      for(let i=0; i<7; i++) {
        let today = new Date();
        let curretDate = new Date(today.setDate(today.getDate() + 3));
        mounthes.push(new Date(curretDate.setDate(curretDate.getDate() + i)).toLocaleString('default', { month: 'short' }))
      }
  let sundays;
  let sut;
  weekDays.forEach((item, i) => {
    if(item == 0) {
        sundays = i;
    } 
    if(item == 6) {
        sut = i;
    }
  })
  delete week[sundays]
  delete week[sut]
  delete mounthes[sundays]
  delete mounthes[sut]
  const workWeek = week.filter(element => element !== undefined);
  const workMounthes = mounthes.filter(element => element !== undefined)
  let workCalendar = []

  workWeek.forEach((item, i) => {
    workCalendar.push(item + " " + workMounthes[i])
  })


  const elements = workCalendar.map((item, i) => {
        return (
            <View style={{width: '30%', color: 'red'}}><Text  key={i}>{item}</Text></View>  
        )
    });
  return (
    
        <SafeAreaView style={styled.results}>
            <View style={styled.results__contaner}>
                <Header style={{flex: 0.1}} onPress={() => navigation.navigate("Age")} isButtons={false}/>
                <Text style={styled.results__title}>{t('resultsTitle')}</Text>
                <Text style={styled.results__text}>{t('resultsDescr')}</Text>
                <Text style={styled.results__title}>{t('menu')}</Text>
                <View style={styled.results__dates}>
                    {elements}
                </View>
            </View>
        </SafeAreaView>
    );
}
