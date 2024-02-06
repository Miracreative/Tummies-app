import React from 'react';
import {View, SafeAreaView, ImageBackground, TouchableWithoutFeedback, Text, StatusBar, Image} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {useTranslation} from 'react-i18next';
import {icons} from "../../../constants";
import styled from "./style.scss";
export default function NoInternet({navigation}) {
    const {t} = useTranslation();
    

    
    return (
        <View
            style={{flex: 1}}>
            <ImageBackground
                resizeMode='cover'
                style={styled.back}
                source={icons.backRedFull}>
                <SafeAreaView style={{ paddingTop: StatusBar.currentHeight, flex: 1, justifyContent: "space-around"}} >
                    <View>
                        <Image
                        style={styled.image}
                        source={icons.headerName}/>
                            <Text style={[styled.title, {fontSize: RFValue ( 22,  740)}]}>{t('noInetTitle')}</Text>
                            <Text style={[styled.text, {fontSize: RFValue ( 14,  740)}]}>{t('noInetText')}</Text>
                        </View>
                    <Image 
                        style={styled.bigImage}
                        source={icons.sad} />
                </SafeAreaView>
            </ImageBackground>
        </View>

    )

   
}
