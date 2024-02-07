import React, {useState, useEffect} from 'react';
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, StyleSheet, ImageBackground } from 'react-native';
import {useTranslation} from 'react-i18next';
import 'react-native-gesture-handler';
import {price, lon} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import BtnButton from '../../Components/Button/Button';
import MealsList from '../../Components/MealsList/MealsList';
import {icons} from "../../constants";
import Header from '../../Components/Header/Header';
import styled from "./style.scss";
export default function Results({ navigation }) {

  const dispatch = useDispatch();

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
  // const [plan, setPlan] = useState(0);

  const elements = workCalendar.map((item, i) => {
  
        return (
            <TouchableOpacity onPress={() => {setActive(i)
                                              setActiveMeal(0) }} style={[styled.results__item, {backgroundColor: (active==i) ? '#FF9D7D' : '#FFFFFF'}]}>
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

  // const varietyPlan = [
  //   t('full'),
  //   t('average'),
  //   t('little')
  // ]
  // const varietyPlanList = varietyPlan.map((item, i) => {
  
  //   return (
  //       <TouchableOpacity onPress={() => setPlan(i)} style={[styled.results__item, {width: '45%', backgroundColor: (plan==i) ? '#FF9D7D' : '#FFFFFF'}]}>
  //         <View style={[styled.results__shadow, {backgroundColor: (plan==i) ? '#F55926' : '#FFFFFF'}]}></View>
  //         <Text style={[styled.results__date, {color: (plan==i) ? '#F3EDDF' : '#F55926', fontWeight: (plan==i) ? 500 : 300}]}  key={i}>{item}</Text>
  //       </TouchableOpacity>  
  //   )
  // });

  const planDescriptions = [
    {
      descr1: "Serves up to 2000 out of 2663 calories recommendended for you",
      descr2: "5 days a week * 4 weeks",
      descr3: "Skip anytime",
      sum: 1000,
      long: "sar/mounth"
    },
    {
      descr1: "Serves up to 2000 out of 2663 calories recommendended for you",
      descr2: "5 days a week * 4 weeks",
      descr3: "Skip anytime",
      sum: 250,
      long: "sar/week"
    },
    
  ]
  return (
        <View style={[styled.container, {paddingTop: StatusBar.currentHeight}]}>
          
              <SafeAreaView style={styled.results}>
              <ImageBackground
                  resizeMode="cover"
                  style={styled.back}
                  source={icons.pink}>
                <ScrollView style={styled.results__container}>
              
                    <Header style={{flex: 0.1}} onPress={() => navigation.goBack()} isButtons={false} isWhite={true} isStatus={false}/>
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
                    <MealsList day={active} meal={activeMeal}/>
                    <Text style={styled.results__title}>{t('plan')}</Text>
                    <View style={styled.results__dates}>
                      {longArrList}
                    </View>
                    {/* <View style={styled.results__divider}></View>
                    <View style={styled.results__dates}>
                      {varietyPlanList}
                    </View> */}
                    <View style={styled.results__box}>
                      <Text style={[styled.results__title, styled.results__title_narrow]}>{t('cost')}</Text>
                      <View style={styled.results__ring}></View>
                      <Text style={styled.results__descr}>{planDescriptions[long].descr1}</Text>
                      <View style={styled.results__ring}></View>
                      <Text style={styled.results__descr}>{planDescriptions[long].descr2}</Text>
                      <View style={styled.results__ring}></View>
                      <Text style={styled.results__descr}>{planDescriptions[long].descr3}</Text>
                      <Text style={styled.results__price}>{planDescriptions[long].sum}</Text>
                      <Text style={styled.results__valute}>{planDescriptions[long].long}</Text>
                      <View style={styled.results__border}></View>
                      <Image  style={styled.results__fone}
                              source={icons.bottomFone} />
                    </View>
                    <BtnButton onPress={() => {
                                                dispatch(price(planDescriptions[long].sum))
                                                dispatch(lon(planDescriptions[long].long))
                                                navigation.navigate("FirstDay")}} title={t('next')} buttonStyle={{backgroundColor: '#F55926',borderWidth: 2, borderColor: '#F55926', marginBottom: 30}} textStyle={{color: 'rgba(244, 237, 225, 1)', }}/>
                       
                </ScrollView>
                </ImageBackground>
            </SafeAreaView>
       
        </View>
    
   
    );
}
