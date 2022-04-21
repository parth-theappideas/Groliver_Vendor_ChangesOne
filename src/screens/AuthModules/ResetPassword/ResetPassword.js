import React, { useState } from "react";
import { View, Text, Image, ScrollView, StatusBar, ToastAndroid } from 'react-native'
import { Fonts } from "../../../assets/fonts/fonts";
import Images from "../../../const/Images";
import { fs, hs, screenWidth, vs } from "../../../utils/stylesUtils";
import InputBox from "../../../components/InputBox";
import Btn from "../../../components/Btn";
import styles from "./Styles";
import Container from "../../../components/container";
import { Formik } from 'formik'
import * as yup from 'yup'
import Label from "../../../components/Label";
import { resetpasswordApi } from "../../../utils/apiServices";
import LoadingIndicator from "../../../components/LoadingIndicator";

const ResetPassword = ({ navigation, route }) => {

    const [Loading, setLoading] = useState(false);

    const ResetPasswordSchema = yup.object({
        Newpassword: yup.string()
            .required('Required')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
        Confirmpassword: yup.string()
            .required('Required')
            .oneOf([yup.ref('Newpassword'), null], 'Passwords must match')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
    })

    async function ResetPasswordHandler(values) {
        setLoading(true);
        console.log(values);

        var formData = new FormData();
        formData.append("mobile_no", route.params.mobile_no);
        formData.append("password", route.params.password);

        let response = await resetpasswordApi({ data: formData })
        console.log("res", response);

        if (response.status == 'Success') {
            setLoading(true);
            navigation.navigate("Signin");
            setLoading(false);
            ToastAndroid.show("Reset Password Successfully", ToastAndroid.SHORT);
            console.log("response", response);
        } else {
            alert(response.message);
            setLoading(false);
        }
    }

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <Container containerStyle={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Image
                    source={Images.reset}
                    style={styles.resetpswimg}
                />

                <Text style={styles.text1}>Reset your password</Text>

                <Formik
                    initialValues={{ Newpassword: '', Confirmpassword: '' }}
                    validationSchema={ResetPasswordSchema}
                    onSubmit={ResetPasswordHandler}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                        <>
                            <InputBox
                                placeholder="New password"
                                inputStyle={{
                                    maxWidth: '75%'
                                }}
                                secureTextEntry={true}
                                containerStyle={{
                                    width: '92%',
                                    backgroundColor: '#fff',
                                    borderColor: '#F2F2F2',
                                    marginTop: vs(20)
                                }}
                                onChangeText={handleChange('Newpassword')}
                                onBlur={handleBlur('Newpassword')}
                                value={values.Newpassword}
                                inputHeight={50}
                                textSize={14}
                            />
                            {errors.Newpassword && <Label style={{
                                color: 'red',
                                alignSelf: 'flex-start',
                                marginLeft: hs(20)
                            }}>{errors.Newpassword}</Label>}

                            <InputBox
                                placeholder="Confirm password"
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
                                onChangeText={handleChange('Confirmpassword')}
                                onBlur={handleBlur('Confirmpassword')}
                                value={values.Confirmpassword}
                                inputHeight={50}
                                textSize={14}
                            />
                            {errors.Confirmpassword !== "Required" && <Label style={{
                                color: 'red',
                                alignSelf: 'flex-start',
                                marginLeft: hs(20)
                            }}>{errors.Confirmpassword}</Label>}

                            <Btn
                                title="Reset"
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
                    labelStyle={{
                        fontWeight: 'bold'
                    }}
                    textSize={14}
                />
            </Container>
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

export default ResetPassword;