import React, { useState, useEffect, createContext, useCallback } from 'react';
import {useHttp} from '../../hooks/http.hook';
import { Button, Text, View } from 'react-native';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
// import {create}  from "apisauce"
// const api = create({
//     baseURL: 'https://tummies-backend.onrender.com/',
//     headers: {
//         "X-API-Key": "95bb57fd6d68b41a61d103afbf4e7777611a0c52a157ba750d54c84401f79cbc3bd4174390b3a17b9db6c7ca26506b8851387501323fa5f24847939c0e7911064edfcde87b39f67b4c486ccc6e5d69867a21e69eb55a68e49cfaeb9c4128a1c49f2e268e0e37354da99301ebcc127b9c0e01b1c333eff154eb79e66269a0a197"
//     }
// })
export default function ApiComponent() {
   useEffect(() => {
    
    
   }, [])
   const getCities = async () => { 
    const citiesList = await fetch('https://countrisnow.space/api/v0.1/countries')
    const data = await citiesList.json()
    console.log(data)
}
    return (
        <View>
            <Button 
            onPress={() => {getCities()}}
            title="sdfsfsdfsdfds" />
        </View>
        
    )

   
}