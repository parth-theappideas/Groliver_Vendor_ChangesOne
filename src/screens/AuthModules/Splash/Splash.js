import React, { useEffect } from "react";
import { View, Text, Image, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { styles } from "./Styles";
import Images from "../../../const/Images";
import Container from "../../../components/container";
import * as Globals from "../../../utils/Globals"
import AsyncStorage from "@react-native-async-storage/async-storage";

const Splash = () => {
    const navigation = useNavigation();

    useEffect(() => {
        getUserData();
    }, [])

    const getUserData = async () => {
        try {
            const ParsedData = await AsyncStorage.getItem('@store1:User');
            const Data = JSON.parse(ParsedData);

            setTimeout(() => {
                if (Data) {
                    Globals.api_token = Data.data.token
                    navigation.replace("Dashboard");
                } else {
                    navigation.replace('Signin')
                }
            }, 1000)
            console.log("get data success", Data);
        } catch (e) {
            console.log("error", e);
        }
    }

    return (
        <Container containerStyle={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Image
                source={Images.splash}
                style={styles.splashImage}
            />
        </Container>
    )
}

export default Splash;