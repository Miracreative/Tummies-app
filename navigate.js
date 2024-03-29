import React from 'react';
import Main from './Pages/Main/Main';
import FirstLocation from './Pages/Location/Location';
import AutoLocation from './Pages/AutoLocation/AutoLocation';
import ApplyLocation from './Pages/ApplyLocation/ApplyLocation';
import ChooseLocation from './Pages/ChooseLocation/ChooseLocation';
import Gender from './Pages/Gender/Gender';
import Auth from './Pages/Authentication/Auth';
import AuthConfirm from './Pages/AuthenticationConfirm/AuthenticationConfirm';
import Name from './Pages/Name/Name';
import Age from './Pages/Age/Age';
import Results from './Pages/Results/Results';
import FirstDay from './Pages/FirstDay/FirstDay';
import Email from './Pages/Email/Email';
import FirstPayment from './Pages/FirstPayment/FirstPayment';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector} from 'react-redux';
import i18next, {languageResources} from './services/i18next';


const Stack = createStackNavigator();

export default function Navigate() {

    const language = useSelector(state => state.language);
    i18next.changeLanguage(language);
    return  <NavigationContainer>
        <Stack.Navigator
            // initialRouteName="Main"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name="Main"
                component={Main}
            />
            <Stack.Screen
                name="FirstLocation"
                component={FirstLocation}
            />

            <Stack.Screen
                name="AutoLocation"
                component={AutoLocation}
            />
            <Stack.Screen
                name="ApplyLocation"
                component={ApplyLocation}
            />
            <Stack.Screen
                name="ChooseLocation"
                component={ChooseLocation}
            />
            <Stack.Screen
                name="Auth"
                component={Auth}
            />
            <Stack.Screen
                name="AuthConfirm"
                component={AuthConfirm}
            />
            <Stack.Screen
                name="Gender"
                component={Gender}
            />
            <Stack.Screen
                name="Name"
                component={Name}
            />
            <Stack.Screen
                name="Age"
                component={Age}
            />
            <Stack.Screen
                    name="Results"
                    component={Results}
                />
            <Stack.Screen
                    name="FirstDay"
                    component={FirstDay}
                />
            <Stack.Screen
                    name="Email"
                    component={Email}
                />
            <Stack.Screen
                    name="FirstPayment"
                    component={FirstPayment}
                />
           
        </Stack.Navigator>
    </NavigationContainer>;
   
}