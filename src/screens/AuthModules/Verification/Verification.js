import React, { useState } from "react";
import { View, Text, ScrollView, Image, StatusBar, Modal, ToastAndroid } from 'react-native'
import Images from "../../../const/Images";
import { fs, hs, screenWidth, vs } from "../../../utils/stylesUtils";
import Btn from "../../../components/Btn";
import styles from "./Styles";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Globals from "../../../utils/Globals"
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell, } from 'react-native-confirmation-code-field';
import { Formik } from 'formik'
import * as yup from 'yup'
import VerificationModal from "../../../modals/VerificationModal";
import { verificationApi } from "../../../utils/apiServices";
import LoadingIndicator from "../../../components/LoadingIndicator";

const CELL_COUNT = 6;

const Verification = ({ navigation, route }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [value, setValue] = useState('');
    const [Loading, setLoading] = useState(false);
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [rest, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const VerificationSchema = yup.object({
        otp: yup.number()
            .required('')
    })

    const VerificationHandler = async (values) => {
        setLoading(true);
        console.log(values);

        var formData = new FormData();
        formData.append("mobile_no", route.params.mobile_no);
        formData.append("otp", values.otp);

        let response = await verificationApi({ data: formData })
        console.log("res", response);

        // if (response.status == 'Success' && route.params.mobile_no){
        //     navigation.navigate("ResetPassword");
        // }else{
        //     alert(response.message);
        // }

        if (response.status == 'Success') {
            setLoading(true);
            Globals.api_token = response.data.api_token
            await AsyncStorage.setItem('@store1:User', JSON.stringify({ data: response.data }));

            navigation.navigate("ResetPassword", {
                mobile_no: route.params.mobile_no,
                password: route.params.password,
                routes: [{ name: 'ResetPassword' }],
            })
            setLoading(false);
            ToastAndroid.show("OTP Verify Successfully", ToastAndroid.SHORT);
            console.log("response", response);
        }
        else {
            alert(response.message);
            navigation.navigate("Verification");
            setLoading(false);
            ToastAndroid.show("OTP Verify Unsuccessfull", ToastAndroid.SHORT);
        }
    }

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <Container containerStyle={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Image
                    source={Images.email}
                    style={styles.emaillogo}
                />

                <Label style={styles.text1}>Verify your SMS</Label>

                <Container containerStyle={styles.container2}>
                    <Label style={styles.text2}>Check your SMS for an OTP</Label>
                </Container>

                <View style={styles.root}>
                    <View style={{
                        flex: 1,
                        alignItems: 'center'
                    }}>
                        <Formik
                            initialValues={{ otp: '', mobile_no: '' }}
                            validationSchema={VerificationSchema}
                            onSubmit={VerificationHandler}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                                <>
                                    <CodeField
                                        ref={ref}
                                        {...rest}
                                        value={values.otp}
                                        onChangeText={handleChange('otp')}
                                        onBlur={handleBlur('otp')}
                                        cellCount={CELL_COUNT}
                                        rootStyle={styles.codeFieldRoot}
                                        keyboardType="number-pad"
                                        textContentType="oneTimeCode"
                                        renderCell={({ index, symbol, isFocused }) => (
                                            <Text
                                                key={index}
                                                style={[styles.cell, isFocused && styles.focusCell]}
                                                onLayout={getCellOnLayoutHandler(index)}>
                                                {symbol || (isFocused ? <Cursor /> : null)}
                                            </Text>
                                        )}
                                    />

                                    <Btn
                                        title="Verify"
                                        btnStyle={{
                                            backgroundColor: '#009345',
                                            borderRadius: 5,
                                            justifyContent: 'center',
                                            width: '120%',
                                            alignSelf: 'center',
                                            marginTop: vs(30),
                                        }}
                                        btnHeight={50}
                                        textColor={'white'}
                                        textSize={14}
                                        onPress={handleSubmit}
                                    />

                                    <Btn
                                        title="Resend OTP"
                                        btnStyle={{
                                            backgroundColor: '#fff',
                                            borderRadius: 5,
                                            justifyContent: 'center',
                                            width: '120%',
                                            borderColor: '#fff',
                                            alignSelf: 'center',
                                            marginTop: vs(20),
                                        }}
                                        btnHeight={50}
                                        textColor={'#000'}
                                        labelStyle={{
                                            fontWeight: 'bold'
                                        }}
                                        textSize={14}
                                    />
                                </>
                            )}
                        </Formik>
                    </View>
                </View>
            </Container>
            <VerificationModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />

            {Loading ?
                <View style={{
                    marginLeft: hs(13),
                    position: 'absolute',
                    top: 0,
                    bottom: 0
                }}>
                    <LoadingIndicator />
                </View>
                : null}
        </ScrollView>
    )
}

export default Verification;