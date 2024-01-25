import React from "react";
import {Text, TouchableOpacity, View, Image, FlatList} from 'react-native';
import { icons } from "../../constants";
import styled from "./mealsList.scss"

const MealsList = () => {
    const menu = [
        {
            id: 1,
            
            breakfast: [
                {
                    image: icons.porridge,
                    title: 'Spaghetti Bolognese with meatbals',
                },
                {
                    image: icons.soup,
                    title: 'Potato soup',
                },
                {
                    image: icons.porridge,
                    title: 'Spaghetti Bolognese with meatbals',
                },
                {
                    image: icons.soup,
                    title: 'Potato soup',
                },
                {
                    image: icons.porridge,
                    title: 'Spaghetti Bolognese with meatbals',
                }
             ]
        },
        {
            id: 2,
            image: icons.slideBack,
            title: 'sliderText-2'
        },
        {
            id: 3,
            image: icons.slideBack,
            title: 'sliderText-3'
        }
    ]
    const menuList = menu[0].breakfast.map((item, i) => {
        
        return (
            <View style={styled.meals__item}>
                <View style={styled.meals__box}></View>
                <Image 
                    source={item.image}
                    style={styled.meals__img}
                    />
                <Text style={styled.meals__text} key={item.id}>{item.title}</Text>

            </View>  
        )
    });
    return (
        <View style={styled.meals}>
            {menuList}
        </View>
    )
}
export default MealsList