import React, { useState, useEffect, createContext } from 'react';
import { Text, View,  TouchableOpacity, FlatList, Image, Modal} from 'react-native';

import BtnButton from '../../Components/Button/Button';
import {icons} from "../../constants";
import Header from '../../Components/Header/Header';
import styled from "./style.scss";
export default function FirstPhone({ navigation }) {
	
  return (
    <View style={styled.location}>
		<Header onPress={() => navigation.navigate("FirstLocation")}/>
        <View>
            <Text> FirstPhone</Text>
            <BtnButton onPress={() => navigation.navigate('AutoLocation')} title="Share locatopn" buttonStyle={{backgroundColor: '#F55926'}} textStyle={{color: 'rgba(244, 237, 225, 1)'}}/>
            <BtnButton onPress={() => navigation.navigate('ChooseLocation')} title="Choose location manualiiy" buttonStyle={{backgroundColor: 'rgba(244, 237, 225, 1)', borderStyle: 'solid', borderWidth: 2, borderColor: '#F55926'}} textStyle={{color: '#F55926'}}/>
        </View>
    </View>
  );
}
