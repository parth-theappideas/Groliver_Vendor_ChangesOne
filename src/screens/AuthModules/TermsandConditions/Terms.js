import React from "react";
import { View, Text, Image, ScrollView, StatusBar } from 'react-native'
import { Fonts } from "../../../assets/fonts/fonts";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import Images from "../../../const/Images";
import { fs, hs, vs } from "../../../utils/stylesUtils";
import styles from "./Styles";

const Terms = ({ }) => {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <Container containerStyle={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />

                <Container containerStyle={styles.container2}>
                    <Image
                        source={Images.hor_logo}
                        style={styles.imglogo}
                    />

                    <Container containerStyle={styles.container3}>
                        <Label style={styles.text1}>Our Terms of service</Label>
                    </Container>

                    <Container containerStyle={styles.container4}>
                        <Label style={styles.text2}>Lorem Ipsum is simply dummy text of the</Label>
                        <Label style={styles.text2}>printing and typesetting industry. Lorem Ipsum</Label>
                        <Label style={styles.text2}>has been the industry's standard dummy text</Label>
                        <Label style={styles.text2}>ever since the 1500s, when an unknown printer</Label>
                        <Label style={styles.text2}>took a galley of type and scrambled it to make</Label>
                        <Label style={styles.text2}>a type specimen book</Label>
                    </Container>
                </Container>
            </Container>
        </ScrollView>
    )
}

export default Terms;