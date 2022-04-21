import React, { useState, useEffect } from "react";
import { View, Image, Pressable, ToastAndroid, StatusBar } from 'react-native'
import Container from "../../../components/container";
import Label from "../../../components/Label";
import Images from "../../../const/Images";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./Styles";
import LoadingIndicator from "../../../components/LoadingIndicator";
import { api_token } from '../../../utils/Globals'
import { profileApi } from "../../../utils/apigetService";

const Profile = ({ navigation }) => {

    const [Loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [images, setImage] = useState('');
    const [countryCode, setCountryCode] = useState('');

    const Logout = async () => {
        setLoading(true);
        try {
            const Data = await AsyncStorage.removeItem('@store1:User');
            if (Data) {
                navigation.replace("Signin");
                ToastAndroid.show("Logout Successfully", ToastAndroid.SHORT);
            } else {
                console.log("Unsuccessfull Delete", Data);
            }
            console.log("Successfully Delete", Data);
        }
        catch (e) {
            console.log("error", e);
        }
        navigation.reset({
            index: 0,
            routes: [{ name: 'Signin' }]
        })
        setLoading(false);
    }

    useEffect(() => {
        ProfileHandler();
    }, [])

    const ProfileHandler = async (values) => {
        setLoading(true);
        console.log(values);

        let response = await profileApi({ method: 'get' })
        console.log("response", response);

        if (response.status == 'Success') {
            setLoading(false);
            console.log("responses", response);
            const NameAccess = response.data.name
            setName(NameAccess);

            const EmailAccess = response.data.email
            setEmail(EmailAccess);
            console.log("res===>", response.data.email);

            const CountryCodeAccess = response.data.country_code
            setCountryCode(CountryCodeAccess);

            const PhoneNumAccess = response.data.mobile_no
            setPhone(PhoneNumAccess);

            const ImagesAccess = response.data.store_image
            setImage(ImagesAccess);
        } else {
            alert(response.message);
            setLoading(false);
        }
    }
    console.log(api_token);
    console.log("*=> res", images);
    console.log("*=> res name", name);
    console.log("*=> res email", email);

    return (
        <Container containerStyle={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Container containerStyle={styles.mainContainer}>
                <Container containerStyle={styles.profileimgBorder}>
                    <Image
                        source={images}
                        style={styles.profileimg}
                    />
                </Container>
                <Container>
                    <Container containerStyle={styles.container2}>
                        <Label style={styles.text}>{name}</Label>
                        <Pressable onPress={() => navigation.navigate("Editprofile", {
                            name_Data: name,
                            email_Data: email,
                            mobilenum_Data: phone,
                            image_Data: images,
                            countryCode_Data: countryCode
                        })}>
                            <Image
                                source={Images.edit}
                                style={styles.editimg}
                            />
                        </Pressable>
                    </Container>

                    <Container containerStyle={styles.container3}>
                        <Label style={styles.text2}>{email}</Label>
                    </Container>
                </Container>
            </Container>

            <Container containerStyle={styles.container4}>
                <Container onPress={() => navigation.navigate("Notification")}>
                    <Container containerStyle={styles.container5}>
                        <Container containerStyle={styles.container6}>
                            <Image
                                source={Images.notification}
                                style={styles.notificationimg}
                            />
                            <Label style={styles.text3} onPress={() => navigation.navigate("Notification")}>Notification</Label>
                        </Container>

                        <Image
                            source={Images.right}
                            style={styles.rightimg}
                        />
                    </Container>
                </Container>
            </Container>

            <Container containerStyle={styles.borderView} />

            <Container containerStyle={styles.container7}>
                <Container onPress={() => navigation.navigate("Help")}>
                    <Container containerStyle={styles.container8}>
                        <Container containerStyle={styles.container9}>
                            <Image
                                source={Images.help}
                                style={styles.helpimg}
                            />
                            <Label style={styles.text4} onPress={() => navigation.navigate("Help")}>Help</Label>
                        </Container>

                        <Image
                            source={Images.right}
                            style={styles.rightimg}
                        />
                    </Container>
                </Container>
            </Container>

            <Container containerStyle={styles.borderView} />

            <Container containerStyle={styles.container10}>
                <Container onPress={() => Logout()}>
                    <Container containerStyle={styles.container11}>
                        <Container containerStyle={styles.container12}>
                            <Image
                                source={Images.logout_pic}
                                style={styles.logoutimg}
                            />
                            <Label style={styles.text5}>Logout</Label>
                        </Container>

                        <Image
                            source={Images.right}
                            style={styles.rightimg}
                        />
                    </Container>
                </Container>
            </Container>
            {Loading ?
                <View style={styles.LoadingIndicator}>
                    <LoadingIndicator />
                </View>
                : null}
        </Container>
    )
}

export default Profile;