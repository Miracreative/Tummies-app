import React from "react";
import {Text, TouchableOpacity, View, Image, FlatList} from 'react-native';
import { icons } from "../../constants";
import styled from "./mealsList.scss"

const MealsList = ({day, meal}) => {
    const menu = [
        {
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
            ],
            lunch: [
                {
                    image: icons.porridge,
                    title: 'Spaghetti Bolognese with meatbals',
                },
                {
                    image: icons.soup,
                    title: 'lunch lunch',
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
            ],
            id: 1
        },
        {
           
            breakfast: [
                {
                    image: icons.soup,
                    title: 'Potato soup',
                },
                {
                    image: icons.soup,
                    title: 'Potato soup',
                },
                {
                    image: icons.soup,
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
            ],
            lunch: [
                {
                    image: icons.porridge,
                    title: 'lunch',
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
            ],
            id: 2
        },
        {
            id: 3,
        }
    ]
    let breakfastList = menu[day].breakfast.map((item, i) => {
            
        return (
            <View style={styled.meals__item} key={i}>
                <View style={styled.meals__box}></View>
                <Image 
                    source={item.image}
                    style={styled.meals__img}
                    />
                <Text style={styled.meals__text}>{item.title}</Text>

            </View>  
        )
    });

    let lunchList = menu[day].lunch.map((item, i) => {
            
        return (
            <View style={styled.meals__item} key={i}>
                <View style={styled.meals__box}></View>
                <Image 
                    source={item.image}
                    style={styled.meals__img}
                    />
                <Text style={styled.meals__text}>{item.title}</Text>

            </View>  
        )
    });
    let breakfast  = (meal == 0) ? breakfastList : null;
    let lunch = (meal == 1) ? lunchList : null;
    return (
        <View style={styled.meals}>
           {breakfast}
           {lunch}
        </View>
    )
}
export default MealsList