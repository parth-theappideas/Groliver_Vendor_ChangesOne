import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StatusBar, Pressable, ToastAndroid, ActivityIndicator } from 'react-native'
import { Fonts } from "../../../assets/fonts/fonts";
import Images from "../../../const/Images";
import InputBox from "../../../components/InputBox";
import Btn from "../../../components/Btn";
import { fs, hs, screenHeight, screenWidth, vs } from "../../../utils/stylesUtils";
import styles from "./Styles";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import { Formik } from 'formik'
import * as yup from 'yup'
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Globals from "../../../utils/Globals"
import { loginApi } from "../../../utils/apiServices";
import LoadingIndicator from "../../../components/LoadingIndicator";

const Signin = ({ navigation, route }) => {

    const [Loading, setLoading] = useState(false);

    const SigninSchema = yup.object({
        mobile_no: yup
            .number()
            .min(1999999999, "Not Valid Phone Number !")
            .max(9999999999, "Not Valid Phone Number !"),
        password: yup
            .string()
            .required("Password is Required *")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            )
    })


    const SigninHandler = async (values) => {
        setLoading(true);
        console.log(values);

        var formData = new FormData();
        formData.append("mobile_no", values.mobile_no);
        formData.append("password", values.password);
        formData.append("fcm_token", "");

        let response = await loginApi({ data: formData })
        console.log("res", response);

        if (response.status == 'Success') {
            Globals.api_token = response.data.api_token
            await AsyncStorage.setItem('@store1:User', JSON.stringify({ data: response.data }));
            setLoading(false);

            navigation.reset({
                index: 0,
                routes: [{ name: 'Dashboard' }]
            })

            ToastAndroid.show("Signin Successfully", ToastAndroid.SHORT);
            console.log("response", response);
        }
        else {
            alert(response.message);
            setLoading(false);
            ToastAndroid.show("Signin Unsuccessfull", ToastAndroid.SHORT);
        }
    }

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <Container containerStyle={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Image
                    source={Images.logo}
                    style={styles.logo}
                />
                <Label style={styles.text1}>Sign In to Your Vendor Account</Label>

                <Formik
                    initialValues={{ mobile_no: '', password: '' }}
                    validationSchema={SigninSchema}
                    onSubmit={SigninHandler}
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
                                    marginTop: vs(20),
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
                                marginLeft: hs(15),
                                marginTop: vs(5)
                            }}>{errors.mobile_no}</Label>}

                            <InputBox
                                placeholder="Password"
                                inputStyle={{
                                    maxWidth: '75%'
                                }}
                                secureTextEntry={true}
                                containerStyle={{
                                    width: '92%',
                                    backgroundColor: '#fff',
                                    borderColor: '#F2F2F2',
                                    marginTop: vs(10)
                                }}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                inputHeight={50}
                                textSize={14}
                            />
                            {errors.password && <Label style={{
                                color: 'red',
                                alignSelf: 'flex-start',
                                marginLeft: hs(15),
                                marginTop: vs(5)
                            }}>{errors.password}</Label>}

                            <Btn
                                title="Sign in"
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

                <Container containerStyle={styles.container2}>
                    <Label style={styles.text2} onPress={() => navigation.navigate("ForgotPassword")}>Forgot Password?</Label>
                </Container>

                <Container containerStyle={styles.container3}>
                    <Label style={styles.text3}>Don't have an account?</Label>
                    <Label style={styles.text4} onPress={() => navigation.navigate("Signup")}>Sign up</Label>
                </Container>

                <Container containerStyle={styles.container4}>
                    <Container containerStyle={styles.container5}>
                        <Pressable onPress={() => onGooglePress()}>
                            <Image
                                source={Images.google}
                                style={styles.googleimg}
                            />
                        </Pressable>

                        <Pressable onPress={() => OnFbLogin()}>
                            <Image
                                source={Images.fb}
                                style={styles.fbimg}
                            />
                        </Pressable>

                        <Pressable>
                            <Image
                                source={Images.twitter}
                                style={styles.twitterimg}
                            />
                        </Pressable>
                    </Container>
                </Container>
                {Loading ? <LoadingIndicator /> : null}
            </Container>
        </ScrollView>
    )

}

export default Signin;