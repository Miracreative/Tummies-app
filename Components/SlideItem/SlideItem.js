import React from "react";
import { View, Image, Text, StyleSheet, useWindowDimensions} from 'react-native';

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
            <Image source={item.image} 
                    style={[styled.image, {width, resizeMode: 'contain'}]}/>

            <View>
                <Text
                    style={styled.title}>{item.title}</Text>
                {
                    returnText()
                }
                  
            </View>
        </View>
    )
}
export default SlideItem