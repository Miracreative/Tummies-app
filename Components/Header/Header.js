import React, {useState} from "react";
import { View, TouchableOpacity, Image, Text, StatusBar} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


import{icons} from "./../../constants";

import styled from "./header.scss";
// import {connect} from 'react-redux';
import {lang} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';


const Header = ({onPress, isBack=true, isButtons=true, isWhite=false}) => {
    const language = useSelector(state => state.language);
    const dispatch = useDispatch();

    return (
        <View style={[styled.header, {paddingTop: StatusBar.currentHeight}]}>
            <View
                style={styled.header__wrapper}>
                
                {
                    isBack ? <TouchableOpacity
                    onPress={onPress}
                    style={styled.header__container}>
                        {
                            isWhite ? <Image 
                            style={[styled.header__img, {
                                tintColor: 'white'
                            }]}
                            source={icons.arrow}/> : <Image 
                            style={styled.header__img}
                            source={icons.arrow}/>
                        }
                    
                    </TouchableOpacity> : <TouchableOpacity
                    onPress={onPress}
                    style={styled.header__container_opacity}>
                    <Image 
                        style={styled.header__img}
                        source={icons.arrow}/>
                </TouchableOpacity>
                }
                
            </View>
            {
                isButtons ? <View style={styled.header__wrapper}>
                
                <TouchableOpacity
                    onPress={() => console.log('entertament')}
                    style={styled.header__container}>
                        {
                            isWhite ?        <Image 
                                                style={styled.header__img}
                                                source={icons.entertamentWhite}/> :  <Image 
                                                                style={styled.header__img}
                                                                source={icons.entertament}/>
                        }
              
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('catering')}
                    style={styled.header__container}>
                        {
                            isWhite ?  <Image 
                            style={styled.header__img}
                            source={icons.cateringWhite}/> : <Image 
                            style={styled.header__img}
                            source={icons.catering}/>
                        }
                   
                </TouchableOpacity>
                <TouchableOpacity
                    style={styled.header__container}
                    onPress={() => dispatch(lang())}>
                        {
                            isWhite ? <View 
                            style={styled.header__ring_white}>
                            <Text 
                                style={[styled.header__text_red, {fontSize: RFValue ( 16,  740)}]}>{language == 'ar' ? 'EN' : 'AR'}</Text>
                            </View> : <View 
                                style={styled.header__ring}>
                                <Text 
                                    style={[styled.header__text, {fontSize: RFValue ( 16,  740)}]}>{language == 'ar' ? 'EN' : 'AR'}</Text>
                        </View>
                        }
                 
                </TouchableOpacity>
            </View> : <View style={styled.header__wrapper_opacity}>
                
                <TouchableOpacity
                    onPress={() => console.log('entertament')}
                    style={styled.header__container}>
                    <Image 
                        style={styled.header__img}
                        source={icons.entertament}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('catering')}
                    style={styled.header__container}>
                    <Image 
                        style={styled.header__img}
                        source={icons.catering}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styled.header__container}
                    onPress={() => dispatch(lang())}>
                   <View 
                        style={styled.header__ring}>
                        <Text 
                            style={[styled.header__text, {fontSize: RFValue ( 16,  740)}]}>{language == 'ar' ? 'EN' : 'AR'}</Text>
                   </View>
                </TouchableOpacity>
            </View>
            }
            
        </View>
    )

}

export default Header;