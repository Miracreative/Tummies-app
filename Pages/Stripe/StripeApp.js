import React, {useState} from "react";
import {
    View,
    TextInput,
    Button,
    Alert
} from "react-native";
import { StripeProvider, CardField, useConfirmPayment } from '@stripe/stripe-react-native';
const API_URL = "http://localhost:5000"

const StripeApp = (props) => {
    const [email, setEmail] = useState();
    const [cardDetails, setCardDetails] = useState();
    const {confirmPayment, loading} = useConfirmPayment();

    const fetchPaymentIntentClientSecret = async () => {
       console.log('hello')
        const response = await fetch(`${API_URL}/create-payment-intent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const {clientSecret, error} = await response.json();
        return {clientSecret, error}
    }

    const handlePayPress = async () => {
        if(!cardDetails?.complete || !email) {
            Alert.alert("complete card details");
            return;
        }

        const billingDetails = {
            email: email
        }

        try {
            const {clientSecret, error} = await fetchPaymentIntentClientSecret();

            if(error) {
                console.log("Unable to payment");
            } else {
                const {paymentIntent, error} = await confirmPayment (clientSecret, {
                    type: "Card",
                    billingDetails: billingDetails
                });

                if (error) {
                    alert(`Payment Confirmation Error ${error.message}`)
                } else if(paymentIntent) {
                    alert("Payment Successful");
                    console.log("Paymrnt successful ", paymentIntent)
                }
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <StripeProvider
            publishableKey="pk_test_51OHnMiHjsHSJNiHFWFH8SqIRCQlIMyYEri1OtvzCs3nO4DQZ9JsHyh6eKzIyZcMZwiiqJKXvUD9sJdf0XWxfofDG00raTk2CHD">
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    margin: 20
                }}>
                <TextInput
                    autoCapitalize="none"
                    placeholder="E-mail"
                    keyboardType="email-address"
                    onChange={value => setEmail(value.nativeEvent.text)}
                    style={{
                        backgroundColor: "#efefefef",
                        borderRadius: 8,
                        fontSize: 20,
                        height: 50,
                        padding: 10
                    }} />
                <CardField
                    postalCodeEnabled={true}
                    placeholder={{
                        number: '4242 4242 4242 4242',
                    }}
                    cardStyle={{
                        backgroundColor: "#efefefef"
                    }}
                    style={{
                        height: 50,
                        marginVertical: 30
                    }}
                    onCardChange={cardDetails => {
                        setCardDetails(cardDetails)
                    }}
                     />
                    <Button onPress={handlePayPress} title="Pay" disabled={loading}/>
            </View>
        </StripeProvider>
       
    )
}

export default StripeApp;