import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View} from 'react-native';
import AppLoading from 'expo-app-loading';
import styled from './styles/style.scss';
import {gStyle} from './styles/style';
import * as Font from 'expo-font';

import MainStack from './navigate';

import { createStore} from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const fonts = () => Font.loadAsync({
  'hagrid': require('./assets/fonts/HagridTextTrial-Bold.ttf'),
  'hagrid-light': require('./assets/fonts/HagridTextTrial-Light.ttf')
});

export default function App() {



  const [font, setFont] = useState(false);
  if(font) {
      return (
        <Provider store={store}>
          <MainStack />
        </Provider>
        
      );
    } else {
    return (
      <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={console.warn}/>
    );
  }
  
}
