import React from "react";
import { View, Image, Text, StyleSheet, useWindowDimensions, ImageBackground} from 'react-native';

import styled from "./slideItem.scss";

const SlideItem = ({item}) => {
    const {width} = useWindowDimensions();
    function returnText() {
        if (item.text) {
           return <Text style={styled.text}>{item.text}</Text>
        } else {
           return null
        }
    }
    return (
        <View style={[styled.container, {width}]}>
            <ImageBackground source={item.image}
            resizeMode="contain" 
                    style={[styled.image]}>

                <View style={styled.textContainer}>
                    <Text
                        style={styled.title}>{item.title}</Text>
                    {
                        returnText()
                    }
                </View>
            </ImageBackground>    
      
        </View>
    )
}
export default SlideItem