import React, { useState, useRef } from "react";
import { Text, View, SafeAreaView, Image, TextInput, KeyboardAvoidingView } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { useTranslation } from "react-i18next";

import { Formik, Form, Field } from "formik";

// import firebase from "firebase/compat/app";
import auth from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore"

import BtnButton from "../../Components/Button/Button";
import { icons } from "../../constants";
import Header from "../../Components/Header/Header";
import styled from "./style.scss";

export default function Auth({ navigation }) {
  const { t } = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [confirm, setConfirm] = useState(null);

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [valid, setValid] = useState(true);
  const [disable, setDisable] = useState(false);



  const signInWithPhoneNumber = async () => {
    try {
        console.log(phoneNumber);
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation)
    } catch (error) {
        console.log("Error: ", error);
    }
  }

  const confirmCode = async () => {
    try {
        const userCredential = await confirm.confirm(code);
        const user = userCredential.user;

        //check if the user is new or existing
        const userDocument = await firestore()
        .collection("users")
        .doc(user.uid)
        .get();

        if (userDocument.exists) {
            console.log('user exists');
        } else {
            console.log('user is new');
            // navigation.navigate('Detail', {uid: user.uid})
        }
    } catch (error){
        console.log('Ivalid code.', error);
    }
  }



  // const onChangeDisable = () => {
  //     valid ? setDisable(false) : setDisable(true)
  // }


//   return (
//     <View style={{flex: 1, padding: 10, backgroundColor: "#BEBDB8"}}>
//         <Text style={{fontSize: 32, marginBottom: 40}}>
//             Phone Number Auth
//         </Text>
//         {!confirm ? (
//             <>
//                 <Text style={{marginBottom: 20, fontSize: 18}}>Enter number</Text>
//                 <TextInput style={styled.auth__input} value={phoneNumber} onChangeText={onInputChanged}/>
//                 <BtnButton title={'send'} onPress={signInWithPhoneNumber}/>
//             </>
//         ) : (
//            <> 
//             <Text style={{marginBottom: 20, fontSize: 18}}>
//                 Enter the code sent to your phone
//             </Text>
            
//             <TextInput style={styled.auth__input} value={code} onChangeText={setCode}/>
//             <BtnButton title={'confirm'} onPress={confirmCode}/>
//            </> 
//         )}
//     </View>
//   )

const EnterPhone = () => {
    return (
        <SafeAreaView style={styled.auth}>
        <Image style={styled.back} source={icons.backRed} />
        <View style={styled.wrapper}>
            <Header onPress={() => navigation.navigate("Main")} isWhite={true} />
            <Image style={styled.image} source={icons.headerName} />
            <Text style={styled.auth__started}>{t("getStarted")}</Text>
            <Image style={styled.auth__img} source={icons.first} />
        </View>
        <KeyboardAvoidingView
            // behavior={Platform.OS =='ios' ? "padding" : "height"}
            style={{ position: "relative", flex: 0.45 }}
        >
            <Text style={styled.auth__title}>Phone number</Text>
            {/* <TextInputMask
            type={"cel-phone"}
            options={{
                maskType: "INTERNATIONAL",
                withDDD: true,
                dddMask: "(971) ",
            }}
            ref={(ref) => (phoneField = ref)}
            style={[styled.auth__input, valid ? { borderColor: " rgba(12, 3, 0, 0.50)" } : { borderColor: "rgba(255, 0, 0, 1)" }]}
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={onInputChanged}
            onFocus={() => {
                setIsShowKeyboard(true);
            }}
            onBlur={() => {
                setIsShowKeyboard(false);
                setValid(phoneField.isValid());
                setDisable(phoneField.isValid());
            }}
            /> */}
            <TextInput
                style={styled.auth__input}
                keyboardType="numeric"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />
            {valid ? null : <Text style={styled.auth__error}>Enter the correct phone number</Text>}

            <View style={styled.auth__buttons}>
            <BtnButton
                onPress={() => sendVerification(phoneNumber)}
                title={t("continue")}
                buttonStyle={{ backgroundColor: "#F55926", borderWidth: 2, borderColor: "#F55926", opacity: disable ? 1 : 0.7, pointerEvents: disable ? "all" : "none" }}
                textStyle={{ color: "rgba(244, 237, 225, 1)" }}
            />
            </View>
        </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
const ConfirmCode = () => {
    return (
        <SafeAreaView style={styled.auth}>

        <KeyboardAvoidingView
            style={{ position: "relative", flex: 0.45 }}
        >
            <Text style={styled.auth__title}>Phone number</Text>
           
            <TextInput
                style={styled.auth__input}
                keyboardType="numeric"
                value={code}
                onChangeText={setCode}
            />
            {valid ? null : <Text style={styled.auth__error}>Enter the correct phone number</Text>}

            <View style={styled.auth__buttons}>
            <BtnButton
                onPress={() => confirmCode()}
                title={t("continue")}
                buttonStyle={{ backgroundColor: "#F55926", borderWidth: 2, borderColor: "#F55926", opacity: disable ? 1 : 0.7, pointerEvents: disable ? "all" : "none" }}
                textStyle={{ color: "rgba(244, 237, 225, 1)" }}
            />
            </View>
        </KeyboardAvoidingView>
        </SafeAreaView>
    )
}


  return (
    !confirm ? <EnterPhone/> : <ConfirmCode/>
  );
}
