import React, { useState, useRef } from "react";
import { View, Text, Image, StatusBar, ScrollView, ToastAndroid, ActivityIndicator } from 'react-native'
import { Fonts } from "../../../assets/fonts/fonts";
import Images from "../../../const/Images";
import { fs, hs, screenWidth, vs } from "../../../utils/stylesUtils";
import InputBox from "../../../components/InputBox";
import Btn from "../../../components/Btn";
import styles from "./Styles";
import { Picker } from '@react-native-picker/picker'
import Container from "../../../components/container";
import Label from "../../../components/Label";
import { Formik } from 'formik'
import * as yup from 'yup'
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Globals from "../../../utils/Globals"
import SignupModal from "../../../modals/SignupModal";
import { registerApi } from "../../../utils/apiServices";
import LoadingIndicator from "../../../components/LoadingIndicator";

const Signup = ({ navigation }) => {

    const [Loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [picture, setPicture] = useState('');

    const SignupSchema = yup.object({
        name: yup.string()
            .required("Required *"),
        email: yup.string()
            .required("Required *")
            .email("Email is invalid"),
        country_code: yup.number()
            .required("Required *")
            .min(+12, "Not Valid Country Code"),
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

    async function SignupHandler(values) {
        console.log(values);
        setLoading(true);

        var formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("country_code", values.country_code);
        formData.append("fcm_token", '')
        formData.append("mobile_no", values.mobile_no);
        formData.append("password", values.password);
        formData.append("image","");

        let response = await registerApi({ data: formData })
        console.log("Res", response);

        if (response.status == 'Success') {
            Globals.api_token = response.data.api_token
            await AsyncStorage.setItem('@store1:User', JSON.stringify({ data: response.data }));
            setLoading(false);

            ToastAndroid.show("Signup Successfully", ToastAndroid.SHORT);
            console.log("response", response);

            // navigation.navigate("UploadDocs", {
            //     mobile_no: values.mobile_no,
            //     password:values.password,
            //     routes: [{ name: 'UploadDocs' }],
            // })7845123659

            navigation.navigate("Dashboard");
        }
        else {
            alert(response.message);
            setLoading(false);
            ToastAndroid.show("Signup UnSuccessfull", ToastAndroid.SHORT);
        }
    }

    return (
        <ScrollView style={{ backgroundColor: 'white' }} contentContainerStyle={{
            paddingBottom: vs(50)
        }}>
            <Container containerStyle={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Container onPress={() => setModalVisible(!modalVisible)}>
                    <Image
                        source={picture ? { uri: picture } : require('../../../assets/images/placeholder.png')}
                        style={picture ? styles.Clickimg : styles.img1}
                    />
                    <Image
                        source={Images.change}
                        style={styles.img2}
                    />
                </Container>

                <Formik
                    initialValues={{ name: '', email: '', mobile_no: '', password: '', country_code: '' }}
                    validationSchema={SignupSchema}
                    onSubmit={SignupHandler}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                        <>
                            <Container containerStyle={styles.container2}>

                                <Label style={styles.text1}>Company name</Label>
                                <InputBox
                                    placeholder="Type here..."
                                    inputStyle={{
                                        maxWidth: '99%'
                                    }}
                                    containerStyle={{
                                        width: screenWidth * 0.92,
                                        backgroundColor: '#fff',
                                        borderColor: '#F2F2F2',
                                        marginTop: vs(10)
                                    }}
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    value={values.name}
                                    inputHeight={50}
                                    textSize={14}
                                />
                                {errors.name && <Label style={{
                                    color: 'red',
                                    marginTop: vs(5)
                                }}>{errors.name}</Label>}

                                <Label style={styles.text2}>Enter email address</Label>
                                <InputBox
                                    placeholder="Type here..."
                                    inputStyle={{
                                        maxWidth: '99%'
                                    }}
                                    containerStyle={{
                                        width: screenWidth * 0.92,
                                        backgroundColor: '#fff',
                                        borderColor: '#F2F2F2',
                                        marginTop: vs(10)
                                    }}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    inputHeight={50}
                                    textSize={14}
                                />
                                {errors.email && <Label style={{
                                    color: 'red',
                                    marginTop: vs(5)
                                }}>{errors.email}</Label>}

                                <Label style={styles.text2}>Enter password</Label>
                                <InputBox
                                    placeholder="Type here..."
                                    inputStyle={{
                                        maxWidth: '99%'
                                    }}
                                    secureTextEntry={true}
                                    containerStyle={{
                                        width: screenWidth * 0.92,
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
                                    marginTop: vs(5)
                                }}>{errors.password}</Label>}

                                <Label style={styles.text3}>Country</Label>
                                <InputBox
                                    placeholder="Type here..."
                                    inputStyle={{
                                        maxWidth: '99%'
                                    }}
                                    containerStyle={{
                                        width: screenWidth * 0.92,
                                        backgroundColor: '#fff',
                                        borderColor: '#F2F2F2',
                                        marginTop: vs(10)
                                    }}
                                    onChangeText={handleChange('country_code')}
                                    onBlur={handleBlur('country_code')}
                                    value={values.country_code}
                                    inputHeight={50}
                                    textSize={14}
                                />
                                {errors.country_code && <Label style={{
                                    color: 'red',
                                    marginTop: vs(5)
                                }}>{errors.country_code}</Label>}

                                <Label style={styles.text4}>Mobile number</Label>
                                <InputBox
                                    placeholder="Type here..."
                                    inputStyle={{
                                        maxWidth: '99%'
                                    }}
                                    keyboardType="numeric"
                                    containerStyle={{
                                        width: screenWidth * 0.92,
                                        backgroundColor: '#fff',
                                        borderColor: '#F2F2F2',
                                        marginTop: vs(10)
                                    }}
                                    onChangeText={handleChange('mobile_no')}
                                    onBlur={handleBlur('mobile_no')}
                                    value={values.mobile_no}
                                    inputHeight={50}
                                    textSize={14}
                                />
                                {errors.mobile_no && <Label style={{
                                    color: 'red',
                                    marginTop: vs(5)
                                }}>{errors.mobile_no}</Label>}
                            </Container>

                            <Btn
                                title="Continue"
                                btnStyle={{
                                    backgroundColor: '#009345',
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    width: '95%',
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

                <Container containerStyle={styles.container3}>
                    <Container containerStyle={styles.container4}>
                        <Label style={styles.text5}>By continuing, you agree to our</Label>
                        <Label style={styles.text6} onPress={() => navigation.navigate("Terms")}>Terms and Conditions</Label>
                    </Container>

                    <Container containerStyle={styles.container5}>
                        <Label style={styles.text7}>and</Label>
                        <Label style={styles.text8} onPress={() => navigation.navigate("Privacy")}>Privacy Policy</Label>
                    </Container>
                </Container>
                {Loading ? <LoadingIndicator /> : null}
                <SignupModal
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    setPicture={setPicture}
                />
            </Container>
        </ScrollView>
    )
}

export default Signup; 