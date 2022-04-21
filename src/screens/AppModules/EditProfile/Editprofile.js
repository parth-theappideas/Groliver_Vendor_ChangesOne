import React, { useState } from "react";
import { Image, ScrollView, ToastAndroid, StatusBar, View } from 'react-native'
import Images from "../../../const/Images";
import { fs, hs, screenWidth, vs } from "../../../utils/stylesUtils";
import InputBox from "../../../components/InputBox";
import Btn from "../../../components/Btn";
import Container from "../../../components/container";
import styles from "./Styles";
import Label from "../../../components/Label";
import { Formik } from 'formik'
import * as yup from 'yup'
import { editprofileApi } from "../../../utils/apiServices";
import EditprofileModal from "../../../modals/EditProfileModal";
import LoadingIndicator from "../../../components/LoadingIndicator";

const Editprofile = ({ navigation, route }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [picture, setPicture] = useState('');
    const [Loading, setLoading] = useState(false);
    const { name_Data, email_Data, mobilenum_Data, image_Data, countryCode_Data } = route.params;

    const EditprofileSchema = yup.object({
        name: yup
            .string(),
        email: yup
            .string()
            .email("Email is invalid"),
        country_code: yup
            .number()
            .min(+12, "Not Valid Country Code"),
        mobile_no: yup
            .number()
            .min(1999999999, "Not Valid Phone Number !")
            .max(9999999999, "Not Valid Phone Number !"),
    })

    async function EditprofileHandler(values) {
        console.log(values);
        setLoading(true);

        var formData = new FormData();
        formData.append("name", values.name);
        formData.append("image", "");

        let response = await editprofileApi({ data: formData })
        console.log("response", response);
        console.log("email_Data=>", email_Data);

        if (response.status == 'Success') {
            setLoading(true);
            navigation.navigate("Profile");
            ToastAndroid.show("Profile Updated Successfully", ToastAndroid.SHORT);
            console.log("response", response);
        } else {
            alert(response.message);
            setLoading(true);
        }
    }

    return (
        <ScrollView style={{ backgroundColor: 'white' }} contentContainerStyle={{
            paddingBottom: vs(50)
        }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Container containerStyle={styles.container}>
                <Container containerStyle={styles.container2} onPress={() => setModalVisible(!modalVisible)}>
                    <Container containerStyle={styles.profileimgBorder}>
                        <Image
                            source={picture ? { uri: picture } : image_Data}
                            style={picture ? styles.Clickimg : styles.profileimg}
                        />

                        <Image
                            source={Images.change}
                            style={styles.changeimg}
                        />
                    </Container>
                </Container>

                <Formik
                    initialValues={{ name: name_Data, email: email_Data, mobile_no: mobilenum_Data, country_code: countryCode_Data }}
                    validationSchema={EditprofileSchema}
                    onSubmit={EditprofileHandler}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                        <>
                            <Container containerStyle={styles.container3}>
                                <Label style={styles.label}>Company name</Label>
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

                                <Label style={styles.label}>Enter email address</Label>
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

                                <Label style={styles.label}>Country</Label>
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
                                {errors.mobile_no && <Label style={{
                                    color: 'red',
                                    marginTop: vs(5)
                                }}>{errors.mobile_no}</Label>}

                                <Label style={styles.label}>Mobile number</Label>
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
                                title="Update"
                                btnStyle={{
                                    backgroundColor: '#009345',
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    width: screenWidth * 0.92,
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
            </Container>

            <EditprofileModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                setPicture={setPicture}
            />

            {Loading ?
                <View style={styles.LoadingIndicator}>
                    <LoadingIndicator />
                </View>
                : null}
        </ScrollView>
    )
}

export default Editprofile;