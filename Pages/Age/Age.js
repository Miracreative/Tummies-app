import React, {useState} from 'react';
import { Text, View, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {useTranslation} from 'react-i18next';
import 'react-native-gesture-handler';
import {age1} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import BtnButton from '../../Components/Button/Button';
import {icons} from "../../constants";
import Header from '../../Components/Header/Header';
import styled from "./style.scss";
export default function Age({ navigation }) {

  let {t} = useTranslation();
  const childrenAge = useSelector(state => state.childrens.children1.age);
  const [age, setAge] = useState(childrenAge);
  const dispatch = useDispatch();

  const onUserDec = () => {
    let newAge = age + 1;
    setAge(newAge);
  }
  const onUserInc = () => {
    let newAge = age - 1;
    setAge(newAge);
  }
  return (
    
        <SafeAreaView style={styled.age}>
          <View style={styled.age__back}>
            <Image style={styled.age__backImg}
                    source={icons.back}/>
          </View>
            <Header style={{flex: 0.1}} onPress={() => navigation.navigate("Name")} isButtons={false}/>
            <Image style={styled.age__img}
                       source={icons.redTitle}/>
            <Text style={styled.age__title}>{t('ageTitle')}</Text>
            <View 
              style={styled.age__container}>
            <View style={styled.age__counter}>
              <TouchableOpacity style={styled.age__minus}
                                  onPress={() => onUserInc()} >
                <Text style={styled.age__dec}>-</Text>
              </TouchableOpacity >
              <View style={styled.age__gexagon}>
                <Image 
                    source={icons.gexagon} />
                    <Text style={styled.age__count}>{age}</Text>
              </View>
              <TouchableOpacity style={styled.age__plus}
                                  onPress={() => onUserDec()}>
                <Text style={styled.age__dec}>+</Text>
              </TouchableOpacity>
            </View>
            </View>
        <BtnButton onPress={() => {dispatch(age1(age))
                                    navigation.navigate('Results')}} title={t('next')} buttonStyle={{backgroundColor: '#F55926',borderWidth: 2, borderColor: '#F55926', marginBottom: 30}} textStyle={{color: 'rgba(244, 237, 225, 1)', }}/>
    </SafeAreaView>
  );
}
