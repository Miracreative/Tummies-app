import React, {useState, useEffect} from 'react';
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native';
import {useTranslation} from 'react-i18next';
import 'react-native-gesture-handler';
import {age1} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import BtnButton from '../../Components/Button/Button';
import MealsList from '../../Components/MealsList/MealsList';
import {icons} from "../../constants";
import Header from '../../Components/Header/Header';
import styled from "./style.scss";
export default function Results({ navigation }) {

  let {t} = useTranslation();
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
      
  const [active, setActive] = useState(0);
  const [activeMeal, setActiveMeal] = useState(0);
  const [long, setLong] = useState(0);
  const [plan, setPlan] = useState(0);

  const elements = workCalendar.map((item, i) => {
  
        return (
            <TouchableOpacity onPress={() => setActive(i)} style={[styled.results__item, {backgroundColor: (active==i) ? '#FF9D7D' : '#FFFFFF'}]}>
              <View style={[styled.results__shadow, {backgroundColor: (active==i) ? '#F55926' : '#FFFFFF'}]}></View>
              <Text style={[styled.results__date, {color: (active==i) ? '#F3EDDF' : '#F55926', fontWeight: (active==i) ? 500 : 300}]}  key={i}>{item}</Text>
            </TouchableOpacity>  
        )
    });

  const meal = [
    t('breakfast'),
    t('lunch'),
    t('dinner'),
    t('snack')
  ];


  const mealList = meal.map((item, i) => {
  
    return (
        <TouchableOpacity onPress={() => setActiveMeal(i)} style={[styled.results__item, {width: '45%', backgroundColor: (activeMeal==i) ? '#FF9D7D' : '#FFFFFF'}]}>
          <View style={[styled.results__shadow, {backgroundColor: (activeMeal==i) ? '#F55926' : '#FFFFFF'}]}></View>
          <Text style={[styled.results__date, {color: (activeMeal==i) ? '#F3EDDF' : '#F55926', fontWeight: (activeMeal==i) ? 500 : 300}]}  key={i}>{item}</Text>
        </TouchableOpacity>  
    )
  });

  const longArr = [
    t('mounthly'),
    t('weekly')
  ]
  const longArrList = longArr.map((item, i) => {
  
    return (
        <TouchableOpacity onPress={() => setLong(i)} style={[styled.results__item, {width: '45%', backgroundColor: (long==i) ? '#FF9D7D' : '#FFFFFF'}]}>
          <View style={[styled.results__shadow, {backgroundColor: (long==i) ? '#F55926' : '#FFFFFF'}]}></View>
          <Text style={[styled.results__date, {color: (long==i) ? '#F3EDDF' : '#F55926', fontWeight: (long==i) ? 500 : 300}]}  key={i}>{item}</Text>
        </TouchableOpacity>  
    )
  });

  const varietyPlan = [
    t('full'),
    t('average'),
    t('little')
  ]
  const varietyPlanList = varietyPlan.map((item, i) => {
  
    return (
        <TouchableOpacity onPress={() => setLong(i)} style={[styled.results__item, {width: '45%', backgroundColor: (plan==i) ? '#FF9D7D' : '#FFFFFF'}]}>
          <View style={[styled.results__shadow, {backgroundColor: (plan==i) ? '#F55926' : '#FFFFFF'}]}></View>
          <Text style={[styled.results__date, {color: (plan==i) ? '#F3EDDF' : '#F55926', fontWeight: (plan==i) ? 500 : 300}]}  key={i}>{item}</Text>
        </TouchableOpacity>  
    )
  });
  return (
    
        <SafeAreaView style={styled.results}>
            <ScrollView style={styled.results__contaner}>
                <Header style={{flex: 0.1}} onPress={() => navigation.navigate("Age")} isButtons={false}/>
                <Text style={styled.results__title}>{t('resultsTitle')}</Text>
                <Text style={styled.results__text}>{t('resultsDescr')}</Text>
                <Text style={styled.results__title}>{t('menu')}</Text>
                <View style={styled.results__dates}>
                    {elements}
                </View>
                <View style={styled.results__divider}></View>
                <View style={styled.results__dates}>
                  {mealList}
                </View>
                <MealsList/>
                <Text style={styled.results__title}>{t('plan')}</Text>
                <View style={styled.results__dates}>
                  {longArrList}
                </View>
                <View style={styled.results__divider}></View>
                <View style={styled.results__dates}>
                  {varietyPlanList}
                </View>
                <View style={styled.results__box}>
                  <Text style={[styled.results__title, styled.results__title_narrow]}>{t('cost')}</Text>
                  <View style={styled.results__ring}></View>
                  <Text style={styled.results__descr}>Serves up to 2000 out of 2663 calories recommendended for you</Text>
                  <View style={styled.results__ring}></View>
                  <Text style={styled.results__descr}>5 days a week * 4 weeks</Text>
                  <View style={styled.results__ring}></View>
                  <Text style={styled.results__descr}>Skip anytime</Text>
                  <Text style={styled.results__price}>1000</Text>
                  <Text style={styled.results__valute}>sar/mounth</Text>
                  <View style={styled.results__border}></View>
                  <Image  style={styled.results__fone}
                          source={icons.bottomFone} />
                </View>
                <BtnButton onPress={() => {navigation.navigate("Age")}} title={t('next')} buttonStyle={{backgroundColor: '#F55926',borderWidth: 2, borderColor: '#F55926', marginBottom: 30}} textStyle={{color: 'rgba(244, 237, 225, 1)', }}/>
            </ScrollView>
        </SafeAreaView>
    );
}
