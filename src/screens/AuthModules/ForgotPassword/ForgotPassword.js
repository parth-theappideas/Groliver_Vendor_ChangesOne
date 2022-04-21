import React, { useState } from "react";
import { View, Text, Image, ScrollView, StatusBar, ToastAndroid } from 'react-native'
import { Fonts } from "../../../assets/fonts/fonts";
import Images from "../../../const/Images";
import { fs, hs, screenWidth, vs } from "../../../utils/stylesUtils";
import Btn from "../../../components/Btn";
import InputBox from "../../../components/InputBox";
import styles from "./Styles";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import { Formik } from 'formik'
import * as yup from 'yup'
import LoadingIndicator from "../../../components/LoadingIndicator";
import { forgotpasswordApi } from "../../../utils/apiServices";

const ForgotPassword = ({ navigation }) => {

    const [Loading, setLoading] = useState(false);

    const ForgotPasswordSchema = yup.object({
        mobile_no: yup
            .number()
            .min(1999999999, "Not Valid Phone Number !")
            .max(9999999999, "Not Valid Phone Number !"),
    })

    async function ForgotPasswordHandler(values) {
        setLoading(true);
        console.log(values);

        var formData = new FormData();
        formData.append("mobile_no", values.mobile_no);
        formData.append("fcm_token", '');

        let response = await forgotpasswordApi({ data: formData })
        console.log("response", response);

        if (response.status == 'Success') {
            setLoading(false);
            navigation.navigate("Verification", {
                mobile_no: values.mobile_no,
                routes: [{ name: 'Verification' }],
            })
            ToastAndroid.show("Forgot Password Successfully", ToastAndroid.SHORT);
            console.log("response", response);
        } else {
            alert(response.message);
            setLoading(false);
        }
    }

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Container containerStyle={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Image
                    source={Images.vector}
                    style={styles.forgotpswimg}
                />

                <Label style={styles.text1}>Forgot your password</Label>

                <Container containerStyle={styles.container2}>
                    <Label style={styles.text2}>Enter your mobile number below and we will</Label>
                    <Label style={styles.text3}>send you a verification code</Label>
                </Container>

                <Formik
                    initialValues={{ mobile_no: '' }}
                    validationSchema={ForgotPasswordSchema}
                    onSubmit={ForgotPasswordHandler}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                        <>
                            <InputBox
                                placeholder="Phone number"
                                inputStyle={{
                                    maxWidth: '75%'
                                }}
                                containerStyle={{
                                    width: '92%',
                                    backgroundColor: '#fff',
                                    borderColor: '#F2F2F2',
                                    marginTop: vs(20)
                                }}
                                onChangeText={handleChange('mobile_no')}
                                onBlur={handleBlur('mobile_no')}
                                value={values.mobile_no}
                                keyboardType="numeric"
                                inputHeight={50}
                                textSize={14}
                            />
                            {errors.mobile_no && <Label style={{
                                color: 'red',
                                alignSelf: 'flex-start',
                                marginLeft: hs(20),
                                marginTop: vs(5)
                            }}>{errors.mobile_no}</Label>}

                            <Btn
                                title="Send"
                                btnStyle={{
                                    backgroundColor: '#009345',
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    width: '92%',
                                    alignSelf: 'center',
                                    marginTop: vs(20),
                                }}
                                btnHeight={50}
                                textColor={'white'}
                                textSize={14}
                                onPress={handleSubmit}
                            />
                        </>
                    )}
                </Formik>

                <Btn
                    title="Back to login"
                    btnStyle={{
                        backgroundColor: '#fff',
                        borderRadius: 5,
                        justifyContent: 'center',
                        width: '92%',
                        borderColor: '#fff',
                        alignSelf: 'center',
                        marginTop: vs(20),
                    }}
                    btnHeight={50}
                    textColor={'#000'}
                    textSize={14}
                    labelStyle={{
                        fontWeight: 'bold'
                    }}
                    onPress={() => navigation.navigate("Signin")}
                />
            </Container>

            {Loading ?
                <View style={{
                    marginLeft: hs(13),
                    position:'absolute',
                    top:0,
                    bottom:0
                }}>
                    <LoadingIndicator />
                </View>
                : null}

        </ScrollView>
    )
}

export default ForgotPassword;